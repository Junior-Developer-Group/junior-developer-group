/**
 * Member invitation
 * > View in console
 */
console.log(
"%cHello stranger! 👋\n\n\n\n\nLooking to improve your dev skills? \n\n\n\n\nLet's do it together 💪 \n\n\n\n\n 👇 Join our group 👇\n\n",
'color:dimgrey; font-size: 40px; background-color: pink; border-radius: 10px;',
)
console.log(
'%cDiscord Channel:\n\n\n\nhttps://discord.gg/58YEbSgSAc\n\n\n\n',
'font-size: 20px',
)
console.log(
'%cOur Website: \n\n\n\nhttps://junior-developer-group.com\n\n\n\n',
'font-size: 20px',
)

console.log('%cWe also need designers 😉', 'font-size: 40px')
console.log('%c\n\n\n\n\n- Likii & the team 💛', 'font-size: 20px')
/**
 * End - Member Invitation
 */

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
    "https://gather.town/app/EXCj9n8cz6KDtw3p/Junior%20Dev%20HQ",
    "_blank"
  );
}
function openAboutPage() {
  window.location (
    "/pages/about.html",
    "_blank"
  );
}

function updateFooter() {
  const getDateElement = document.querySelector(".footer-copyright--date");

  const footerDate = () => {
    getDateElement.innerHTML = new Date().getFullYear();
  };

  footerDate();
}

function openDiscord() {
  window.open(
    "https://discord.com/invite/JdGZbZYDvd",
    "_blank"
  );
}

const loadListener = window.addEventListener('load', () => {	// Run after DOM is loaded
	updateFooter();
	window.removeEventListener('load',loadListener);
});

function runAnalyticsScripts() {

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-E7KQ4C9DKP';    

  document.head.appendChild(script);

  this.hideGDPRpopup();
}

function hideGDPRpopup () {
  const element = document.getElementById('GDPRwrapper')
  element.classList.remove("gdpr-wrapper");
  element.classList.add("gdpr-wrapper--hidden")
}