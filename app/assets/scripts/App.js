import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const mobileMenu = new MobileMenu();
new RevealOnScroll('.feature-item', "85%", true);
new RevealOnScroll('.testimonial');