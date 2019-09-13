import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

const mobileMenu = new MobileMenu();
new RevealOnScroll('.feature-item', "85%", true);
new RevealOnScroll('.testimonial');
new StickyHeader();
new Modal();