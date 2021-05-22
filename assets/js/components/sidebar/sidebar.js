import { ComponentHelper } from '../component-helper.js'

export class Sidebar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		ComponentHelper.GetHtml(this, "assets/js/components/sidebar/sidebar.html");
	}
}