import { Sidebar } from '../components/sidebar/sidebar.js';
import { Footer } from '../components/footer/footer.js';
import { GDPR } from '../components/gdpr/gdpr.js';
import { Navbar } from '../components/navbar/navbar.js'

customElements.define('sidebar-component', Sidebar);
customElements.define('footer-component', Footer);
customElements.define('gdpr-component', GDPR);
customElements.define('navbar-component', Navbar);