import { ComponentHelper } from '../component-helper.js';

export class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    ComponentHelper.GetHtml(
      this,
      '../assets/js/components/sidebar/sidebar.html'
    );

	const loadListener = window.addEventListener('load', () => {	// Run after DOM is loaded
		this.setActiveLink();
		window.removeEventListener('load', loadListener);
	});
  }

  /**
   * Switch .active link on sidebar
   * Based on current page URL
   */
  setActiveLink(){
	  /**
	   * Unset previous .active link
	   */
	const currentActive = document.querySelector('.active');
	if(currentActive){
		currentActive.classList.remove('active');
		currentActive.removeAttribute('aria-current');
	}

	/**
	 * Set new .active link
	 */
	const currentPage = window.location.href;
	const navLinks = document.querySelectorAll('.nav-link');
	for(const navLink of navLinks){
		const linkHref = navLink.getAttribute('href');
		if(currentPage.includes(linkHref)){
			navLink.classList.add('active');
			navLink.setAttribute('aria-current','page');
			break;
		}
	}
  }
}
