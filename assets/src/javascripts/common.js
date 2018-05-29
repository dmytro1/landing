// import $ from "jquery";
import {$, $$} from './modules/methods';
import main from "./modules/main";
import toggleChooseSections from "./modules/toggleChooseSections";
import onChangeSelect from "./modules/onChangeSelect";
import checkoutBtn from "./modules/checkoutBtn";
import addOrder from "./modules/addOrder";
import validation from "./modules/validation";
import gallery from "./modules/gallery";

main($, $$);
toggleChooseSections($, $$);
onChangeSelect($, $$);
checkoutBtn($);
addOrder($);
validation($);
gallery();