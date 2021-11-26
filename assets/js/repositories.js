import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest';

class Repo {
	constructor(){
		this.watchCount = 0;
		this.forksCount = 0;
		this.name = '';
		this.createdAt = '';
		this.topics = '';
	}

	/**
	 * Build repository card
	 * @returns card
	 */
	getCard(){
		const repoImg = this.getAbbr(this.name);
		const repoName = this.getCapitalized(this.name);
		const repoCreatedAt = this.getDate(this.createdAt);
		const repoForksCount = this.getNumber(this.forksCount);
		const repoWatchCount = this.getNumber(this.watchCount);
	
		return `
				<div class="repo d-flex flex-wrap align-items-center" role="row">
					<div class="repo__col col-12 col-md-1" role="cell">
						<div class="repo__img-wrapper d-flex align-items-center justify-content-center mx-auto">
							${repoImg}
						</div>
					</div>
					<div class="repo__col col-12 col-md-3 text-center text-md-start" role="cell">
						<h3 class="repo__title fs-5">${repoName}</h3>
						<p class="repo__createdAt">
							${repoCreatedAt}
						</p>
					</div>
					<div class="repo__col col-12 col-md-5 text-center text-md-start" role="cell">
						${
							this.topics.length > 0
							?(
								`
								<ul class="repo__tags d-flex flex-wrap justify-content-center justify-content-md-start">
									${
										this.topics.map(topic => (
											`<li class="repo__tag">
												${this.getCapitalized(topic)}
											</li>`
										)).join('')
									}
								</ul>
								`
							)
							:`<p>No tags asigned</p>`
						}
					</div>
					<div class="repo__col col-6 col-md-1" role="cell">
						<span class="repo__forks d-flex align-items-center justify-content-center">
							${repoForksCount}
						</span>
					</div>
					<div class="repo__col col-6 col-md-1" role="cell">
						<span class="repo__views d-flex align-items-center justify-content-center">
							${repoWatchCount}
						</span>
					</div>
				</div>
			`;
	}

	/**
	 * Add comma at every thousandth
	 * E.g. 3000 to 3,000
	 * @param {number} number 
	 * @returns numFormatted
	 */
	getNumber(number){
		const numFormatted = number.toLocaleString();
		return numFormatted;
	}

	/**
	 * Get date in dd MMMM YYYY format
	 * E.g. 18 October 2020
	 * @param {string} datetime 
	 * @returns dateFormatted
	 */
	getDate(datetime){
		const months = ['January','February',' March','April','May','June','July','August','September','October','November','December'];

		const date = datetime.split('T')[0];
		const dateSplit = date.split('-');
		
		const year = dateSplit[0];
		const monthInd = parseInt(dateSplit[1]) - 1; 
		const month = months[monthInd];
		const day = dateSplit[1];

		const dateFormatted = `${day} ${month} ${year}`;

		return dateFormatted;
	}

	/**
	 * Get abbreviation of text
	 * E.g. Junior Developer Group to JDG
	 * @param {string} name 
	 * @returns abbreviation
	 */
	getAbbr(name){
		const words = name.split('-');
		const abbreviations = words.map(word => word[0].toUpperCase());
		const abbreviation = abbreviations.join('');
		return abbreviation;
	}	

	/**
	 * Get capitalized text
	 * E.g. junior developer group to Junior Developer Group
	 * @param {string} name 
	 * @returns nameCap
	 */
	getCapitalized(name){
		const words = name.split('-');
		const wordsCap = words.map(word => word[0].toUpperCase() + word.slice(1));
		const nameCap = wordsCap.join(' ');
		return nameCap;
	}
}

export class Repositories{
	octokit;
	repos = [];	

	constructor(){
		this.octokit = new Octokit();
	}

	BuildDocument(){
		const loadingText = document.querySelector('.loading-text');
		const reposList = document.querySelector('.repos').children[1];

		loadingText.classList.add('hide');	// Hide loading text

		this.repos.forEach(repo => {	// Show repository cards
			const card = repo.getCard();
			reposList.innerHTML += card;
		})
	}

	async InitData(){
		const reposData = await this.getRepoData();

		/**
		 * Initialize repositories list
		 */
		for(const repoData of reposData){
			const repo = new Repo();
			repo.name = repoData.name;
			repo.topics = repoData.topics;
			repo.watchCount = repoData.watchers_count;
			repo.forksCount = repoData.forks_count;
			repo.createdAt = repoData.created_at;

			this.repos.push(repo);
		}
	}

	async getRepoData(){
		const data = await this.octokit.rest.repos.listForOrg({
			org: 'junior-developer-group',
			type: 'public'
		});

		return data.data;
	}
}

const repositories = new Repositories();
repositories.InitData().then(() => {
	repositories.BuildDocument();
})

/** 
 * Pre-fetched data for testing
 */
// const reposData = [
// 	{
// 		"id": 328376065,
// 		"node_id": "MDEwOlJlcG9zaXRvcnkzMjgzNzYwNjU=",
// 		"name": "junior-coding-team",
// 		"full_name": "Junior-Developer-Group/junior-coding-team",
// 		"private": false,
// 		"owner": {
// 			"login": "Junior-Developer-Group",
// 			"id": 77691813,
// 			"node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjkxODEz",
// 			"avatar_url": "https://avatars.githubusercontent.com/u/77691813?v=4",
// 			"gravatar_id": "",
// 			"url": "https://api.github.com/users/Junior-Developer-Group",
// 			"html_url": "https://github.com/Junior-Developer-Group",
// 			"followers_url": "https://api.github.com/users/Junior-Developer-Group/followers",
// 			"following_url": "https://api.github.com/users/Junior-Developer-Group/following{/other_user}",
// 			"gists_url": "https://api.github.com/users/Junior-Developer-Group/gists{/gist_id}",
// 			"starred_url": "https://api.github.com/users/Junior-Developer-Group/starred{/owner}{/repo}",
// 			"subscriptions_url": "https://api.github.com/users/Junior-Developer-Group/subscriptions",
// 			"organizations_url": "https://api.github.com/users/Junior-Developer-Group/orgs",
// 			"repos_url": "https://api.github.com/users/Junior-Developer-Group/repos",
// 			"events_url": "https://api.github.com/users/Junior-Developer-Group/events{/privacy}",
// 			"received_events_url": "https://api.github.com/users/Junior-Developer-Group/received_events",
// 			"type": "Organization",
// 			"site_admin": false
// 		},
// 		"html_url": "https://github.com/Junior-Developer-Group/junior-coding-team",
// 		"description": "COMPLETED: This is a home of Junior Developer Group. You can find all important information about joining and participating below.",
// 		"fork": false,
// 		"url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team",
// 		"forks_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/forks",
// 		"keys_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/keys{/key_id}",
// 		"collaborators_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/collaborators{/collaborator}",
// 		"teams_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/teams",
// 		"hooks_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/hooks",
// 		"issue_events_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/issues/events{/number}",
// 		"events_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/events",
// 		"assignees_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/assignees{/user}",
// 		"branches_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/branches{/branch}",
// 		"tags_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/tags",
// 		"blobs_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/git/blobs{/sha}",
// 		"git_tags_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/git/tags{/sha}",
// 		"git_refs_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/git/refs{/sha}",
// 		"trees_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/git/trees{/sha}",
// 		"statuses_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/statuses/{sha}",
// 		"languages_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/languages",
// 		"stargazers_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/stargazers",
// 		"contributors_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/contributors",
// 		"subscribers_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/subscribers",
// 		"subscription_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/subscription",
// 		"commits_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/commits{/sha}",
// 		"git_commits_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/git/commits{/sha}",
// 		"comments_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/comments{/number}",
// 		"issue_comment_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/issues/comments{/number}",
// 		"contents_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/contents/{+path}",
// 		"compare_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/compare/{base}...{head}",
// 		"merges_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/merges",
// 		"archive_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/{archive_format}{/ref}",
// 		"downloads_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/downloads",
// 		"issues_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/issues{/number}",
// 		"pulls_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/pulls{/number}",
// 		"milestones_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/milestones{/number}",
// 		"notifications_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/notifications{?since,all,participating}",
// 		"labels_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/labels{/name}",
// 		"releases_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/releases{/id}",
// 		"deployments_url": "https://api.github.com/repos/Junior-Developer-Group/junior-coding-team/deployments",
// 		"created_at": "2021-01-10T12:19:01Z",
// 		"updated_at": "2021-11-25T22:10:08Z",
// 		"pushed_at": "2021-11-20T20:51:21Z",
// 		"git_url": "git://github.com/Junior-Developer-Group/junior-coding-team.git",
// 		"ssh_url": "git@github.com:Junior-Developer-Group/junior-coding-team.git",
// 		"clone_url": "https://github.com/Junior-Developer-Group/junior-coding-team.git",
// 		"svn_url": "https://github.com/Junior-Developer-Group/junior-coding-team",
// 		"homepage": "https://junior-developer-group.github.io/junior-coding-team/",
// 		"size": 813,
// 		"stargazers_count": 10,
// 		"watchers_count": 10,
// 		"language": "JavaScript",
// 		"has_issues": true,
// 		"has_projects": true,
// 		"has_downloads": true,
// 		"has_wiki": true,
// 		"has_pages": true,
// 		"forks_count": 14,
// 		"mirror_url": null,
// 		"archived": false,
// 		"disabled": false,
// 		"open_issues_count": 0,
// 		"license": null,
// 		"allow_forking": true,
// 		"is_template": false,
// 		"topics": [
// 			"javascript",
// 			"junior-frontend-developer",
// 			"learning-by-doing",
// 			"learning-exercise",
// 			"opensource",
// 			"teamwork"
// 		],
// 		"visibility": "public",
// 		"forks": 14,
// 		"open_issues": 0,
// 		"watchers": 10,
// 		"default_branch": "main",
// 		"permissions": {
// 			"admin": false,
// 			"maintain": false,
// 			"push": false,
// 			"triage": false,
// 			"pull": true
// 		}
// 	},
// 	{
// 		"id": 330406891,
// 		"node_id": "MDEwOlJlcG9zaXRvcnkzMzA0MDY4OTE=",
// 		"name": "sleep-quality-calculator",
// 		"full_name": "Junior-Developer-Group/sleep-quality-calculator",
// 		"private": false,
// 		"owner": {
// 			"login": "Junior-Developer-Group",
// 			"id": 77691813,
// 			"node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjkxODEz",
// 			"avatar_url": "https://avatars.githubusercontent.com/u/77691813?v=4",
// 			"gravatar_id": "",
// 			"url": "https://api.github.com/users/Junior-Developer-Group",
// 			"html_url": "https://github.com/Junior-Developer-Group",
// 			"followers_url": "https://api.github.com/users/Junior-Developer-Group/followers",
// 			"following_url": "https://api.github.com/users/Junior-Developer-Group/following{/other_user}",
// 			"gists_url": "https://api.github.com/users/Junior-Developer-Group/gists{/gist_id}",
// 			"starred_url": "https://api.github.com/users/Junior-Developer-Group/starred{/owner}{/repo}",
// 			"subscriptions_url": "https://api.github.com/users/Junior-Developer-Group/subscriptions",
// 			"organizations_url": "https://api.github.com/users/Junior-Developer-Group/orgs",
// 			"repos_url": "https://api.github.com/users/Junior-Developer-Group/repos",
// 			"events_url": "https://api.github.com/users/Junior-Developer-Group/events{/privacy}",
// 			"received_events_url": "https://api.github.com/users/Junior-Developer-Group/received_events",
// 			"type": "Organization",
// 			"site_admin": false
// 		},
// 		"html_url": "https://github.com/Junior-Developer-Group/sleep-quality-calculator",
// 		"description": "COMPLETED: 'Sleep Quality Calculator' is an open source project created, designed and presented by Junior Developer Group. For joining and contributing please visit our website. ",
// 		"fork": false,
// 		"url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator",
// 		"forks_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/forks",
// 		"keys_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/keys{/key_id}",
// 		"collaborators_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/collaborators{/collaborator}",
// 		"teams_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/teams",
// 		"hooks_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/hooks",
// 		"issue_events_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/issues/events{/number}",
// 		"events_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/events",
// 		"assignees_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/assignees{/user}",
// 		"branches_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/branches{/branch}",
// 		"tags_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/tags",
// 		"blobs_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/git/blobs{/sha}",
// 		"git_tags_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/git/tags{/sha}",
// 		"git_refs_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/git/refs{/sha}",
// 		"trees_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/git/trees{/sha}",
// 		"statuses_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/statuses/{sha}",
// 		"languages_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/languages",
// 		"stargazers_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/stargazers",
// 		"contributors_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/contributors",
// 		"subscribers_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/subscribers",
// 		"subscription_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/subscription",
// 		"commits_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/commits{/sha}",
// 		"git_commits_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/git/commits{/sha}",
// 		"comments_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/comments{/number}",
// 		"issue_comment_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/issues/comments{/number}",
// 		"contents_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/contents/{+path}",
// 		"compare_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/compare/{base}...{head}",
// 		"merges_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/merges",
// 		"archive_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/{archive_format}{/ref}",
// 		"downloads_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/downloads",
// 		"issues_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/issues{/number}",
// 		"pulls_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/pulls{/number}",
// 		"milestones_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/milestones{/number}",
// 		"notifications_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/notifications{?since,all,participating}",
// 		"labels_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/labels{/name}",
// 		"releases_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/releases{/id}",
// 		"deployments_url": "https://api.github.com/repos/Junior-Developer-Group/sleep-quality-calculator/deployments",
// 		"created_at": "2021-01-17T14:15:36Z",
// 		"updated_at": "2021-09-26T11:35:41Z",
// 		"pushed_at": "2021-06-02T15:50:14Z",
// 		"git_url": "git://github.com/Junior-Developer-Group/sleep-quality-calculator.git",
// 		"ssh_url": "git@github.com:Junior-Developer-Group/sleep-quality-calculator.git",
// 		"clone_url": "https://github.com/Junior-Developer-Group/sleep-quality-calculator.git",
// 		"svn_url": "https://github.com/Junior-Developer-Group/sleep-quality-calculator",
// 		"homepage": "https://junior-developer-group.github.io/sleep-quality-calculator/",
// 		"size": 1979,
// 		"stargazers_count": 0,
// 		"watchers_count": 0,
// 		"language": "CSS",
// 		"has_issues": true,
// 		"has_projects": true,
// 		"has_downloads": true,
// 		"has_wiki": true,
// 		"has_pages": true,
// 		"forks_count": 5,
// 		"mirror_url": null,
// 		"archived": false,
// 		"disabled": false,
// 		"open_issues_count": 0,
// 		"license": null,
// 		"allow_forking": true,
// 		"is_template": false,
// 		"topics": [
// 			"front-end",
// 			"front-end-development",
// 			"junior-frontend-developer",
// 			"learn-to-code",
// 			"learning-by-doing",
// 			"learning-exercise",
// 			"opensource",
// 			"teamwork"
// 		],
// 		"visibility": "public",
// 		"forks": 5,
// 		"open_issues": 0,
// 		"watchers": 0,
// 		"default_branch": "main",
// 		"permissions": {
// 			"admin": false,
// 			"maintain": false,
// 			"push": false,
// 			"triage": false,
// 			"pull": true
// 		}
// 	},
// 	{
// 		"id": 338556996,
// 		"node_id": "MDEwOlJlcG9zaXRvcnkzMzg1NTY5OTY=",
// 		"name": "tamagotchi-game",
// 		"full_name": "Junior-Developer-Group/tamagotchi-game",
// 		"private": false,
// 		"owner": {
// 			"login": "Junior-Developer-Group",
// 			"id": 77691813,
// 			"node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjkxODEz",
// 			"avatar_url": "https://avatars.githubusercontent.com/u/77691813?v=4",
// 			"gravatar_id": "",
// 			"url": "https://api.github.com/users/Junior-Developer-Group",
// 			"html_url": "https://github.com/Junior-Developer-Group",
// 			"followers_url": "https://api.github.com/users/Junior-Developer-Group/followers",
// 			"following_url": "https://api.github.com/users/Junior-Developer-Group/following{/other_user}",
// 			"gists_url": "https://api.github.com/users/Junior-Developer-Group/gists{/gist_id}",
// 			"starred_url": "https://api.github.com/users/Junior-Developer-Group/starred{/owner}{/repo}",
// 			"subscriptions_url": "https://api.github.com/users/Junior-Developer-Group/subscriptions",
// 			"organizations_url": "https://api.github.com/users/Junior-Developer-Group/orgs",
// 			"repos_url": "https://api.github.com/users/Junior-Developer-Group/repos",
// 			"events_url": "https://api.github.com/users/Junior-Developer-Group/events{/privacy}",
// 			"received_events_url": "https://api.github.com/users/Junior-Developer-Group/received_events",
// 			"type": "Organization",
// 			"site_admin": false
// 		},
// 		"html_url": "https://github.com/Junior-Developer-Group/tamagotchi-game",
// 		"description": "ABANDONED: A game inspired by Tamagotchi mechanics, which revolve around taking care of a pet. The pet in our game is going to be a pink fairy armadillo, and there will be a page introducing the armadillo and highlighting conservation efforts towards it.",
// 		"fork": false,
// 		"url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game",
// 		"forks_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/forks",
// 		"keys_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/keys{/key_id}",
// 		"collaborators_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/collaborators{/collaborator}",
// 		"teams_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/teams",
// 		"hooks_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/hooks",
// 		"issue_events_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/issues/events{/number}",
// 		"events_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/events",
// 		"assignees_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/assignees{/user}",
// 		"branches_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/branches{/branch}",
// 		"tags_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/tags",
// 		"blobs_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/git/blobs{/sha}",
// 		"git_tags_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/git/tags{/sha}",
// 		"git_refs_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/git/refs{/sha}",
// 		"trees_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/git/trees{/sha}",
// 		"statuses_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/statuses/{sha}",
// 		"languages_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/languages",
// 		"stargazers_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/stargazers",
// 		"contributors_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/contributors",
// 		"subscribers_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/subscribers",
// 		"subscription_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/subscription",
// 		"commits_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/commits{/sha}",
// 		"git_commits_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/git/commits{/sha}",
// 		"comments_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/comments{/number}",
// 		"issue_comment_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/issues/comments{/number}",
// 		"contents_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/contents/{+path}",
// 		"compare_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/compare/{base}...{head}",
// 		"merges_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/merges",
// 		"archive_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/{archive_format}{/ref}",
// 		"downloads_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/downloads",
// 		"issues_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/issues{/number}",
// 		"pulls_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/pulls{/number}",
// 		"milestones_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/milestones{/number}",
// 		"notifications_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/notifications{?since,all,participating}",
// 		"labels_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/labels{/name}",
// 		"releases_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/releases{/id}",
// 		"deployments_url": "https://api.github.com/repos/Junior-Developer-Group/tamagotchi-game/deployments",
// 		"created_at": "2021-02-13T11:14:35Z",
// 		"updated_at": "2021-07-05T13:06:43Z",
// 		"pushed_at": "2021-04-02T17:26:50Z",
// 		"git_url": "git://github.com/Junior-Developer-Group/tamagotchi-game.git",
// 		"ssh_url": "git@github.com:Junior-Developer-Group/tamagotchi-game.git",
// 		"clone_url": "https://github.com/Junior-Developer-Group/tamagotchi-game.git",
// 		"svn_url": "https://github.com/Junior-Developer-Group/tamagotchi-game",
// 		"homepage": "https://junior-developer-group.github.io/tamagotchi-game/",
// 		"size": 66,
// 		"stargazers_count": 1,
// 		"watchers_count": 1,
// 		"language": "CSS",
// 		"has_issues": true,
// 		"has_projects": true,
// 		"has_downloads": true,
// 		"has_wiki": true,
// 		"has_pages": true,
// 		"forks_count": 4,
// 		"mirror_url": null,
// 		"archived": false,
// 		"disabled": false,
// 		"open_issues_count": 0,
// 		"license": {
// 			"key": "mit",
// 			"name": "MIT License",
// 			"spdx_id": "MIT",
// 			"url": "https://api.github.com/licenses/mit",
// 			"node_id": "MDc6TGljZW5zZTEz"
// 		},
// 		"allow_forking": true,
// 		"is_template": false,
// 		"topics": [],
// 		"visibility": "public",
// 		"forks": 4,
// 		"open_issues": 0,
// 		"watchers": 1,
// 		"default_branch": "main",
// 		"permissions": {
// 			"admin": false,
// 			"maintain": false,
// 			"push": false,
// 			"triage": false,
// 			"pull": true
// 		}
// 	},
// 	{
// 		"id": 352340388,
// 		"node_id": "MDEwOlJlcG9zaXRvcnkzNTIzNDAzODg=",
// 		"name": "cat-match",
// 		"full_name": "Junior-Developer-Group/cat-match",
// 		"private": false,
// 		"owner": {
// 			"login": "Junior-Developer-Group",
// 			"id": 77691813,
// 			"node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjkxODEz",
// 			"avatar_url": "https://avatars.githubusercontent.com/u/77691813?v=4",
// 			"gravatar_id": "",
// 			"url": "https://api.github.com/users/Junior-Developer-Group",
// 			"html_url": "https://github.com/Junior-Developer-Group",
// 			"followers_url": "https://api.github.com/users/Junior-Developer-Group/followers",
// 			"following_url": "https://api.github.com/users/Junior-Developer-Group/following{/other_user}",
// 			"gists_url": "https://api.github.com/users/Junior-Developer-Group/gists{/gist_id}",
// 			"starred_url": "https://api.github.com/users/Junior-Developer-Group/starred{/owner}{/repo}",
// 			"subscriptions_url": "https://api.github.com/users/Junior-Developer-Group/subscriptions",
// 			"organizations_url": "https://api.github.com/users/Junior-Developer-Group/orgs",
// 			"repos_url": "https://api.github.com/users/Junior-Developer-Group/repos",
// 			"events_url": "https://api.github.com/users/Junior-Developer-Group/events{/privacy}",
// 			"received_events_url": "https://api.github.com/users/Junior-Developer-Group/received_events",
// 			"type": "Organization",
// 			"site_admin": false
// 		},
// 		"html_url": "https://github.com/Junior-Developer-Group/cat-match",
// 		"description": "NEW: Our first project using an API which returns information on different cat breeds. Team lead @cendei",
// 		"fork": false,
// 		"url": "https://api.github.com/repos/Junior-Developer-Group/cat-match",
// 		"forks_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/forks",
// 		"keys_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/keys{/key_id}",
// 		"collaborators_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/collaborators{/collaborator}",
// 		"teams_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/teams",
// 		"hooks_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/hooks",
// 		"issue_events_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/issues/events{/number}",
// 		"events_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/events",
// 		"assignees_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/assignees{/user}",
// 		"branches_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/branches{/branch}",
// 		"tags_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/tags",
// 		"blobs_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/git/blobs{/sha}",
// 		"git_tags_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/git/tags{/sha}",
// 		"git_refs_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/git/refs{/sha}",
// 		"trees_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/git/trees{/sha}",
// 		"statuses_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/statuses/{sha}",
// 		"languages_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/languages",
// 		"stargazers_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/stargazers",
// 		"contributors_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/contributors",
// 		"subscribers_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/subscribers",
// 		"subscription_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/subscription",
// 		"commits_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/commits{/sha}",
// 		"git_commits_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/git/commits{/sha}",
// 		"comments_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/comments{/number}",
// 		"issue_comment_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/issues/comments{/number}",
// 		"contents_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/contents/{+path}",
// 		"compare_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/compare/{base}...{head}",
// 		"merges_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/merges",
// 		"archive_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/{archive_format}{/ref}",
// 		"downloads_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/downloads",
// 		"issues_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/issues{/number}",
// 		"pulls_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/pulls{/number}",
// 		"milestones_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/milestones{/number}",
// 		"notifications_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/notifications{?since,all,participating}",
// 		"labels_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/labels{/name}",
// 		"releases_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/releases{/id}",
// 		"deployments_url": "https://api.github.com/repos/Junior-Developer-Group/cat-match/deployments",
// 		"created_at": "2021-03-28T13:44:13Z",
// 		"updated_at": "2021-10-03T20:04:20Z",
// 		"pushed_at": "2021-08-06T18:20:47Z",
// 		"git_url": "git://github.com/Junior-Developer-Group/cat-match.git",
// 		"ssh_url": "git@github.com:Junior-Developer-Group/cat-match.git",
// 		"clone_url": "https://github.com/Junior-Developer-Group/cat-match.git",
// 		"svn_url": "https://github.com/Junior-Developer-Group/cat-match",
// 		"homepage": "",
// 		"size": 31,
// 		"stargazers_count": 1,
// 		"watchers_count": 1,
// 		"language": "HTML",
// 		"has_issues": true,
// 		"has_projects": true,
// 		"has_downloads": true,
// 		"has_wiki": true,
// 		"has_pages": false,
// 		"forks_count": 3,
// 		"mirror_url": null,
// 		"archived": false,
// 		"disabled": false,
// 		"open_issues_count": 0,
// 		"license": null,
// 		"allow_forking": true,
// 		"is_template": false,
// 		"topics": [
// 			"api",
// 			"cat-match",
// 			"javascript",
// 			"junior-developer",
// 			"junior-frontend-developer",
// 			"learn-to-code",
// 			"learning-by-doing",
// 			"opensource",
// 			"teamwork"
// 		],
// 		"visibility": "public",
// 		"forks": 3,
// 		"open_issues": 0,
// 		"watchers": 1,
// 		"default_branch": "main",
// 		"permissions": {
// 			"admin": false,
// 			"maintain": false,
// 			"push": false,
// 			"triage": false,
// 			"pull": true
// 		}
// 	},
// 	{
// 		"id": 366850062,
// 		"node_id": "MDEwOlJlcG9zaXRvcnkzNjY4NTAwNjI=",
// 		"name": "junior-developer-group",
// 		"full_name": "Junior-Developer-Group/junior-developer-group",
// 		"private": false,
// 		"owner": {
// 			"login": "Junior-Developer-Group",
// 			"id": 77691813,
// 			"node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjkxODEz",
// 			"avatar_url": "https://avatars.githubusercontent.com/u/77691813?v=4",
// 			"gravatar_id": "",
// 			"url": "https://api.github.com/users/Junior-Developer-Group",
// 			"html_url": "https://github.com/Junior-Developer-Group",
// 			"followers_url": "https://api.github.com/users/Junior-Developer-Group/followers",
// 			"following_url": "https://api.github.com/users/Junior-Developer-Group/following{/other_user}",
// 			"gists_url": "https://api.github.com/users/Junior-Developer-Group/gists{/gist_id}",
// 			"starred_url": "https://api.github.com/users/Junior-Developer-Group/starred{/owner}{/repo}",
// 			"subscriptions_url": "https://api.github.com/users/Junior-Developer-Group/subscriptions",
// 			"organizations_url": "https://api.github.com/users/Junior-Developer-Group/orgs",
// 			"repos_url": "https://api.github.com/users/Junior-Developer-Group/repos",
// 			"events_url": "https://api.github.com/users/Junior-Developer-Group/events{/privacy}",
// 			"received_events_url": "https://api.github.com/users/Junior-Developer-Group/received_events",
// 			"type": "Organization",
// 			"site_admin": false
// 		},
// 		"html_url": "https://github.com/Junior-Developer-Group/junior-developer-group",
// 		"description": "NEW: A brand new website HQ for our team",
// 		"fork": false,
// 		"url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group",
// 		"forks_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/forks",
// 		"keys_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/keys{/key_id}",
// 		"collaborators_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/collaborators{/collaborator}",
// 		"teams_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/teams",
// 		"hooks_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/hooks",
// 		"issue_events_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/issues/events{/number}",
// 		"events_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/events",
// 		"assignees_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/assignees{/user}",
// 		"branches_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/branches{/branch}",
// 		"tags_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/tags",
// 		"blobs_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/git/blobs{/sha}",
// 		"git_tags_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/git/tags{/sha}",
// 		"git_refs_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/git/refs{/sha}",
// 		"trees_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/git/trees{/sha}",
// 		"statuses_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/statuses/{sha}",
// 		"languages_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/languages",
// 		"stargazers_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/stargazers",
// 		"contributors_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/contributors",
// 		"subscribers_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/subscribers",
// 		"subscription_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/subscription",
// 		"commits_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/commits{/sha}",
// 		"git_commits_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/git/commits{/sha}",
// 		"comments_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/comments{/number}",
// 		"issue_comment_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/issues/comments{/number}",
// 		"contents_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/contents/{+path}",
// 		"compare_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/compare/{base}...{head}",
// 		"merges_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/merges",
// 		"archive_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/{archive_format}{/ref}",
// 		"downloads_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/downloads",
// 		"issues_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/issues{/number}",
// 		"pulls_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/pulls{/number}",
// 		"milestones_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/milestones{/number}",
// 		"notifications_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/notifications{?since,all,participating}",
// 		"labels_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/labels{/name}",
// 		"releases_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/releases{/id}",
// 		"deployments_url": "https://api.github.com/repos/Junior-Developer-Group/junior-developer-group/deployments",
// 		"created_at": "2021-05-12T20:49:14Z",
// 		"updated_at": "2021-11-23T17:36:51Z",
// 		"pushed_at": "2021-11-23T17:36:47Z",
// 		"git_url": "git://github.com/Junior-Developer-Group/junior-developer-group.git",
// 		"ssh_url": "git@github.com:Junior-Developer-Group/junior-developer-group.git",
// 		"clone_url": "https://github.com/Junior-Developer-Group/junior-developer-group.git",
// 		"svn_url": "https://github.com/Junior-Developer-Group/junior-developer-group",
// 		"homepage": "https://junior-developer-group.com",
// 		"size": 2441,
// 		"stargazers_count": 6,
// 		"watchers_count": 6,
// 		"language": "HTML",
// 		"has_issues": true,
// 		"has_projects": true,
// 		"has_downloads": true,
// 		"has_wiki": true,
// 		"has_pages": true,
// 		"forks_count": 13,
// 		"mirror_url": null,
// 		"archived": false,
// 		"disabled": false,
// 		"open_issues_count": 0,
// 		"license": null,
// 		"allow_forking": true,
// 		"is_template": false,
// 		"topics": [
// 			"css",
// 			"html",
// 			"javascript",
// 			"junior-frontend-developer",
// 			"learn-to-code",
// 			"learning-by-doing",
// 			"opensource",
// 			"teamwork"
// 		],
// 		"visibility": "public",
// 		"forks": 13,
// 		"open_issues": 0,
// 		"watchers": 6,
// 		"default_branch": "main",
// 		"permissions": {
// 			"admin": false,
// 			"maintain": false,
// 			"push": false,
// 			"triage": false,
// 			"pull": true
// 		}
// 	},
// 	{
// 		"id": 410524003,
// 		"node_id": "R_kgDOGHgZYw",
// 		"name": "HacktoberPet",
// 		"full_name": "Junior-Developer-Group/HacktoberPet",
// 		"private": false,
// 		"owner": {
// 			"login": "Junior-Developer-Group",
// 			"id": 77691813,
// 			"node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjkxODEz",
// 			"avatar_url": "https://avatars.githubusercontent.com/u/77691813?v=4",
// 			"gravatar_id": "",
// 			"url": "https://api.github.com/users/Junior-Developer-Group",
// 			"html_url": "https://github.com/Junior-Developer-Group",
// 			"followers_url": "https://api.github.com/users/Junior-Developer-Group/followers",
// 			"following_url": "https://api.github.com/users/Junior-Developer-Group/following{/other_user}",
// 			"gists_url": "https://api.github.com/users/Junior-Developer-Group/gists{/gist_id}",
// 			"starred_url": "https://api.github.com/users/Junior-Developer-Group/starred{/owner}{/repo}",
// 			"subscriptions_url": "https://api.github.com/users/Junior-Developer-Group/subscriptions",
// 			"organizations_url": "https://api.github.com/users/Junior-Developer-Group/orgs",
// 			"repos_url": "https://api.github.com/users/Junior-Developer-Group/repos",
// 			"events_url": "https://api.github.com/users/Junior-Developer-Group/events{/privacy}",
// 			"received_events_url": "https://api.github.com/users/Junior-Developer-Group/received_events",
// 			"type": "Organization",
// 			"site_admin": false
// 		},
// 		"html_url": "https://github.com/Junior-Developer-Group/HacktoberPet",
// 		"description": "CLOSED: A Junior Developer Group repository with a goal to create a personalised card representing our pets or favourite animals during HacktoberFest 2021",
// 		"fork": false,
// 		"url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet",
// 		"forks_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/forks",
// 		"keys_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/keys{/key_id}",
// 		"collaborators_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/collaborators{/collaborator}",
// 		"teams_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/teams",
// 		"hooks_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/hooks",
// 		"issue_events_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/issues/events{/number}",
// 		"events_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/events",
// 		"assignees_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/assignees{/user}",
// 		"branches_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/branches{/branch}",
// 		"tags_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/tags",
// 		"blobs_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/git/blobs{/sha}",
// 		"git_tags_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/git/tags{/sha}",
// 		"git_refs_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/git/refs{/sha}",
// 		"trees_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/git/trees{/sha}",
// 		"statuses_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/statuses/{sha}",
// 		"languages_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/languages",
// 		"stargazers_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/stargazers",
// 		"contributors_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/contributors",
// 		"subscribers_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/subscribers",
// 		"subscription_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/subscription",
// 		"commits_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/commits{/sha}",
// 		"git_commits_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/git/commits{/sha}",
// 		"comments_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/comments{/number}",
// 		"issue_comment_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/issues/comments{/number}",
// 		"contents_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/contents/{+path}",
// 		"compare_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/compare/{base}...{head}",
// 		"merges_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/merges",
// 		"archive_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/{archive_format}{/ref}",
// 		"downloads_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/downloads",
// 		"issues_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/issues{/number}",
// 		"pulls_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/pulls{/number}",
// 		"milestones_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/milestones{/number}",
// 		"notifications_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/notifications{?since,all,participating}",
// 		"labels_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/labels{/name}",
// 		"releases_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/releases{/id}",
// 		"deployments_url": "https://api.github.com/repos/Junior-Developer-Group/HacktoberPet/deployments",
// 		"created_at": "2021-09-26T10:46:28Z",
// 		"updated_at": "2021-11-01T17:07:41Z",
// 		"pushed_at": "2021-10-25T15:25:13Z",
// 		"git_url": "git://github.com/Junior-Developer-Group/HacktoberPet.git",
// 		"ssh_url": "git@github.com:Junior-Developer-Group/HacktoberPet.git",
// 		"clone_url": "https://github.com/Junior-Developer-Group/HacktoberPet.git",
// 		"svn_url": "https://github.com/Junior-Developer-Group/HacktoberPet",
// 		"homepage": "https://junior-developer-group.github.io/HacktoberPet/",
// 		"size": 21260,
// 		"stargazers_count": 9,
// 		"watchers_count": 9,
// 		"language": "CSS",
// 		"has_issues": true,
// 		"has_projects": true,
// 		"has_downloads": true,
// 		"has_wiki": true,
// 		"has_pages": true,
// 		"forks_count": 47,
// 		"mirror_url": null,
// 		"archived": false,
// 		"disabled": false,
// 		"open_issues_count": 0,
// 		"license": null,
// 		"allow_forking": true,
// 		"is_template": false,
// 		"topics": [
// 			"beginner-friendly",
// 			"beginner-project",
// 			"css",
// 			"hacktoberfest",
// 			"hacktoberfest2021",
// 			"html",
// 			"javascript",
// 			"junior-developer",
// 			"junior-frontend-developer"
// 		],
// 		"visibility": "public",
// 		"forks": 47,
// 		"open_issues": 0,
// 		"watchers": 9,
// 		"default_branch": "main",
// 		"permissions": {
// 			"admin": false,
// 			"maintain": false,
// 			"push": false,
// 			"triage": false,
// 			"pull": true
// 		}
// 	}
// ];