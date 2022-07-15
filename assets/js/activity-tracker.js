import { Dashboard } from "./dashboard.js";

const dashboard = new Dashboard;

const results = await dashboard.InitData();

const statsData = dashboard.BuildStatsData();

const config = {
    type: 'line',
    data: dashboard.BuildOverallCommitGraphData(statsData),
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
dashboard.chart = new Chart(ctx, config);

