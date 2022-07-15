import { Dashboard } from "./dashboard.js";

const dashboard = new Dashboard;

const results = await dashboard.InitData();

// const statsData = dashboard.BuildStatsData();
const ctrbContainer = document.getElementById('contributors-container');

// Sort contributors by contributions/commits count - Descending (Largest to smallest)
const sortedContributors = dashboard.contributors.sort((current, next) => (current.contributions > next.contributions ? -1 : 1));

if (ctrbContainer){
    sortedContributors.forEach((c) => {
        ctrbContainer.append(dashboard.ContributorRow(c));
    });
}


