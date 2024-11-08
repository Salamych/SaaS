import { ToggleMenu} from "./module/toggleMenu.js";
import { PriceTimeToggle} from "./module/priceTimeToggle.js";
import {ActiveOfferToggle} from "./module/activeOfferToggle.js";

window.addEventListener('load', function(){

  new PriceTimeToggle();
  new ActiveOfferToggle();
  new ToggleMenu();
  
});



