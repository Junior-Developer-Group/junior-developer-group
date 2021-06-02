import { ComponentHelper } from '../component-helper.js'

export class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		ComponentHelper.GetHtml(this, "../assets/js/components/footer/footer.html");
	}
}