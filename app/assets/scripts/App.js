import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import AOS from 'aos';

let mobileMenu = new MobileMenu();

AOS.init({
    duration: 1200
   });

if(module.hot) {
    module.hot.accept()
}