import { ComponentHelper } from '../component-helper.js'

export class Navbar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
		ComponentHelper.GetHtml(this, "/assets/js/components/navbar/navbar.html");
	}
}