import { ComponentHelper } from '../component-helper.js'

export class GDPR extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		ComponentHelper.GetHtml(this, "../assets/js/components/gdpr/gdpr.html");
	}
}