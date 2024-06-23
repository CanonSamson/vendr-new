import HomeIcon from "../assets/svg/home-icon.svg";
import SellingIcon from "../assets/svg/selling-icon.svg";
import MessagesIcon from "../assets/svg/messages-icon.svg";
import BuyingIcon from "../assets/svg/buying-icon.svg";
import ActiveHomeIcon from "../assets/svg/active-home-icon.svg";
import ActiveSellingIcon from "../assets/svg/active-selling-icon.svg";
import ActiveMessagesIcon from "../assets/svg/active-messages-icon.svg";
import ActiveBuyingIcon from "../assets/svg/active-buying-icon.svg";
import ArrowRightSvg from "../assets/icon/arrow-right.svg";
import ArrowRightWhiteSvg from "../assets/icon/arrow-right-white.svg";
import ActionIonSvg from "../assets/icon/action-icon.svg";
import PersonIonSvg from "../assets/icon/person.svg";
import PlusIonSvg from "../assets/icon/plus.svg";
import CloseSvg from "../assets/icon/closeIcon.svg";
const ArrowDownPng = require("../assets/icon/arrow-down.png");
const FilterPng = require("../assets/icon/filter.png");
const ClosePng = require("../assets/icon/close.png");




export const ArrowRightWhite = ArrowRightWhiteSvg
export const ArrowRight = ArrowRightSvg
export const ActionIcon = ActionIonSvg
export const ArrowDown = ArrowDownPng
export const FilterIcon = FilterPng
export const CloseIcon = ClosePng
export const CloseIconSvg = CloseSvg
export const PersonIon = PersonIonSvg
export const PlusIon = PlusIonSvg

export const Icons = {
  home: {
    inActive: HomeIcon,
    active: ActiveHomeIcon,
  },
  selling: {
    inActive: SellingIcon,
    active: ActiveSellingIcon,
  },
  messages: {
    inActive: MessagesIcon,
    active: ActiveMessagesIcon,
  },
  buying: {
    inActive: BuyingIcon,
    active: ActiveBuyingIcon,
  },
};
