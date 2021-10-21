// opens mobile navbar by adding styling to a default 'display: none' style
function showMobileNavigationContent() {
  document.getElementById("mobileNavigationWrapper").style.display = "flex";
}

// closes mobile navbar by resetting styles to default 'display: none' style
function hideMobileNavigationContent() {
  document.getElementById("mobileNavigationWrapper").attributeStyleMap.clear();
}

function openSleepQualityCalculatorWebsite() {
  window.open(
    "https://junior-developer-group.github.io/sleep-quality-calculator/",
    "_blank"
  );
}

function openCatMatchRepository() {
  window.open("https://github.com/Junior-Developer-Group/cat-match", "_blank");
}

function openHacktoberfest2020Challenge() {
  window.open("https://mateahoward.github.io/hacktoberfest-2020/", "_blank");
}

function openTeamDashboardRepository() {
  window.open(
    "https://github.com/Junior-Developer-Group/junior-developer-group",
    "_blank"
  );
}

function openDiscord() {
  window.open(
    "https://discord.gg/EePB7Txtd8",
    "_blank"
  );
}

function openGitHub() {
  window.open(
    "https://github.com/Junior-Developer-Group",
    "_blank"
  );
}

function openInstagram() {
  window.open(
    "https://www.instagram.com/juniordevelopergroup/",
    "_blank"
  );
}


function openGather() {
  window.open(
    "https://gather.town/invite?token=6NeAjCOdrZUnwBN9RRoYHjPgAAyledKp",
    "_blank"
  );
}
function openAboutPage() {
  window.location (
    "/pages/about.html",
    "_blank"
  );
}
/pages/hacktoberfest/about.html

function updateFooter() {
  const getDateElement = document.querySelector(".footer-copyright--date");

  const footerDate = () => {
    getDateElement.innerHTML = new Date().getFullYear();
  };

  footerDate();
}

function openDiscord() {
  window.open(
    "https://discord.gg/58YEbSgSAc",
    "_blank"
  );
}

updateFooter();
