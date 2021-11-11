import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest';

class CardParams {
	constructor() {
		this.title = '';
		this.contributorLogins = [];
		this.pullRequests = [];
	}
}

class Contributor {
	constructor() {
		this.name = '';
		this.contributions = 0;
		this.avatarUrl = '';
	}
}

class OrgData {
	constructor() {
		this.contributorData = [];
		this.overallContributionData = [];
	}
}

class OrgContributorData {
	constructor() {
		this.overallContributions = [];
		this.projectContributions = [];
	}
}

export class Dashboard {
	octokit;
	chart;
	cards = [];
	contributors = [];
	repos = [];
	orgData = new OrgData();
	contributorChart;

	usedColors = [];

	constructor() {
		this.octokit = new Octokit();
	}

	BuildDocument () {
		const cardContainer = document.getElementById('card-container');
		const ctrbContainer = document.getElementById('contributors-container');
		const tablist = document.getElementById('repo-tabs');
		const tabContent = document.getElementById('repo-tabs-content');

		// Sort contributors by contributions/commits count - Descending (Largest to smallest)
		const sortedContributors = this.contributors.sort((current, next) => (current.contributions > next.contributions ? -1 : 1));

		sortedContributors.forEach((c) => {
			ctrbContainer.append(this.ContributorRow(c));
		});

		let setActive = true;
		this.cards.forEach((c) => {
			// cardContainer.innerHTML += this.RepoCard(c);
			tablist.innerHTML += this.RepoTab(c, setActive);
			tabContent.innerHTML += this.RepoPane(c, setActive);
			setActive = false;
		});

		const statsData = this.BuildStatsData();

		const config = {
			type: 'line',
			data: this.BuildOverallCommitGraphData(statsData),
			options: {
				plugins: {
					title: {
						display: true,
						text: `Weekly commit history for all repo's`
					}
				}
			}
		};

		let ctx = document.getElementById('myChart');
		this.chart = new Chart(ctx, config);
	}

	BuildOverallCommitGraphData (statsData) {
		//const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		const weeks = statsData.overallWeeks.map((x) =>
			new Date(x.w * 1000).toLocaleDateString('en-gb')
		);
		const commitData = {
			data: statsData.overallWeeks.map((x) => x.c),
			borderColor: 'rgb(0, 191, 255)',
			backgroundColor: 'rgb(0, 191, 255)',
			label: 'commits',
			tension: 0.1
		};

		const addData = {
			data: statsData.overallWeeks.map((x) => x.a / 100),
			borderColor: 'rgb(0, 255, 64)',
			backgroundColor: 'rgb(0, 255, 64)',
			label: 'adds (`00) ',
			tension: 0.1
		};

		const deleteData = {
			data: statsData.overallWeeks.map((x) => x.d / 100),
			borderColor: 'rgb(255, 0, 0)',
			backgroundColor: 'rgb(255, 0, 0)',
			label: 'deletes (`00)',
			tension: 0.1
		};

		const data = {
			labels: weeks,
			datasets: [commitData, addData, deleteData]
		};

		return data;
	}

	BuildContributorOverallCommitGraphData (contributorName) {
		const repoData = this.repos.flatMap((x) => {
			return { stats: x.cData.stats, reopName: x.name };
		});
		console.log(repoData);
		const contributorAllRepo = repoData.map((x) => {
			return {
				stats: x.stats.filter((y) => y.author.login == contributorName),
				repoName: x.reopName
			};
		});
		const uniqueWeeks = [
			...new Set(
				contributorAllRepo
					.flatMap((x) => x.stats.flatMap((x) => x.weeks))
					.map((x) => x.w)
			)
		].sort((a, b) => a - b);

		const data = {
			labels: uniqueWeeks.map((x) =>
				new Date(x * 1000).toLocaleDateString('en-gb')
			),
			datasets: []
		};

		for (const repo of contributorAllRepo) {
			let color =
				this.usedColors.filter((x) => x.name === repo.repoName)[0] || null;

			if (!color) {
				color = `rgb(${this.getRandomInt(0, 255)}, ${this.getRandomInt(
					0,
					255
				)}, ${this.getRandomInt(0, 255)})`;
				this.usedColors.push({ name: repo.repoName, color: color });
			} else {
				color = color.color;
			}

			let i = 0;
			const weekData = [];
			for (const week of uniqueWeeks) {
				const matchWeek =
					repo.stats.flatMap((x) => x.weeks)?.filter((x) => x.w === week)[0] ||
					null;
				if (matchWeek) {
					weekData[i] = matchWeek.c;
				} else {
					weekData[i] = 0;
				}
				i++;
			}

			const d = {
				data: weekData,
				borderColor: color,
				backgroundColor: color,
				label: repo.repoName,
				tension: 0.1
			};

			if (d.data.some((x) => x > 0)) {
				data.datasets.push(d);
			}
		}

		const config = {
			type: 'line',
			data: data,
			options: {
				plugins: {
					title: {
						display: true,
						text: `Weekly commit history for ${contributorName}`
					}
				}
			}
		};

		if (this.contributorChart) {
			this.contributorChart.destroy();
		}

		const ctx = document.getElementById('contributor-chart');
		this.contributorChart = new Chart(ctx, config);
	}

	getRandomInt (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}

	async InitData () {
		this.repos = await this.getRepoData();

		for (const repo of this.repos) {
			const c = new CardParams();
			c.title = repo.name;
			c.pullRequests = await this.getPullRequestsForRepo(repo.name);
			var cData = {
				contributorData: await this.getContributorDataForRepo(repo.name),
				stats: await this.getContributorStatsForRepo(repo.name)
			};

			repo.cData = cData;

			const contributorData = cData.contributorData;
			for (const d of contributorData) {
				c.contributorLogins.push({
					name: d.login,
					avatarUrl: d.avatar_url,
					contributions: d.contributions
				});

				const existing =
					this.contributors.filter((x) => x.name == d.login)[0] || null;
				if (existing) {
					const index = this.contributors.indexOf(existing);
					existing.contributions += d.contributions;
					this.contributors[index] = existing;
				} else {
					const ctrb = new Contributor();
					ctrb.name = d.login;
					ctrb.contributions = d.contributions;
					ctrb.avatarUrl = d.avatar_url;
					this.contributors.push(ctrb);
				}
			}

			this.cards.push(c);
		}
	}

	BuildStatsData () {
		const flatStats = this.repos.flatMap((x) => x.cData.stats);
		const flatWeeks = flatStats.flatMap((x) => x.weeks);

		const overallWeeks = [];

		for (const week of flatWeeks) {
			const existing = overallWeeks.filter((x) => x.w === week.w)[0] || null;
			if (existing) {
				const index = overallWeeks.indexOf(existing);
				existing.a += week.a;
				existing.c += week.c;
				existing.d += week.d;
				overallWeeks[index] = existing;
			} else {
				overallWeeks.push({
					a: week.a,
					c: week.c,
					d: week.d,
					w: week.w
				});
			}
		}

		return {
			overallWeeks: overallWeeks
		};
	}

	async getRepoData () {
		const data = await this.octokit.rest.repos.listForOrg({
			org: 'junior-developer-group',
			type: 'public'
		});

		return data.data;
	}

	async getContributorDataForRepo (repoName) {
		const data = await this.octokit.rest.repos.listContributors({
			owner: 'junior-developer-group',
			repo: repoName
		});

		return data.data;
	}

	async getContributorStatsForRepo (repoName) {
		const data = await this.octokit.rest.repos.getContributorsStats({
			owner: 'junior-developer-group',
			repo: repoName
		});

		return data.data;
	}

	async getPullRequestsForRepo (repoName) {
		const data = await this.octokit.rest.pulls.list({
			owner: "junior-developer-group",
			repo: repoName,
			state: 'all'
		});

		return data.data;
	}

	/**
	 * Remove hyphen(-) from text
	 * @param {string} text 
	 * @returns {string} textNoHyphen
	 */
	removeHyphen(text){
		const textNoHyphen = text.replace(/-/g,' ');
		return textNoHyphen;
	}

	/**
	 * Capitalize first letter of every word
	 * 'an example' to 'An Example'
	 * @param {string} text 
	 * @returns {string} textCapitalized
	 */
	capitalizeWords(text){
		let textCapitalized = '';
        const words = text.split(' ');
        const wordsLen = words.length;
        for(let ind=0;ind<wordsLen;ind++){
            const word = words[ind];
            textCapitalized += word[0].toUpperCase() + word.slice(1);
            if(ind !== wordsLen - 1){	// Only add whitespace if not last word
                textCapitalized += ' ';
            }
        }
		return textCapitalized;
	}


	RepoTab(params, active=false) {
		let repoName = this.removeHyphen(params.title);
		repoName = this.capitalizeWords(repoName);

		return `<li class="nav-item" role="presentation">
												<button class="nav-link ${active ? 'active' : ''}" id="${params.title
			}-tab" data-bs-toggle="tab" data-bs-target="#${params.title
			}-pane" type="button"
												role="tab" aria-controls="${params.title}-pane" aria-selected="true">${repoName
			}</button>
											</li>`;
	}

	RepoPane (params, active = false) {
		const list = params.contributorLogins.map(
			(x) =>
				`<li><img style='height:20px' src='${x.avatarUrl}'/>${x.name} | ${x.contributions} contributions</li>`
		);
		return `<div class="tab-pane fade ${active ? 'show active' : ''}" id="${params.title
			}-pane" role="tabpanel" aria-labelledby="home-tab">
										<card class='card col m-2'>
											<card-header class='card-header'>${params.title}</card-header>
											<div class='card-body'>
												<ul>
													${list.join('')}
												</ul>
											</div>
											Pull Requests: ${params.pullRequests.length}
										<card></div>`;
	}

	RepoCard (params) {
		const list = params.contributorLogins.map(
			(x) =>
				`<li><img style='height:20px' src='${x.avatarUrl}'/>${x.name} | ${x.contributions} contributions</li>`
		);
		return `<card class='card col m-2'>
											<card-header class='card-header'>${params.title}</card-header>
											<div class='card-body'>
												<ul>
													${list.join('')}
												</ul>
											</div>
										<card>`;
	}

	ContributorRow (params) {
		const element = document.createElement('tr');
		element.innerHTML = `<td><img style='height: 20px' src='${params.avatarUrl}'/>${params.name}</td>
											<td>${params.contributions}</td>
											<td>
												<button class="btn btn-sm btn-info">
													More Info
												</button>
											</td>`;

		const button = element.getElementsByTagName('button')[0] || null;
		if (button) {
			button.addEventListener('click', () =>
				this.BuildContributorOverallCommitGraphData(params.name)
			);
		}

		return element;
	}
}

const dashboard = new Dashboard();
dashboard.InitData().then(() => {
	dashboard.BuildDocument();
});
