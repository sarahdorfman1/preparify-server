import { HouseholdInfo } from './HouseholdInfo.js'
import { ChatGpt } from "./ChatGpt.js";


//the inputs from the website
const city = "Naples";
const country = "Italy";

const householdSize = 4;
const pets = 2;
const infant = 0;
const child = 0;
const elder = 1;
const disabled = 1;
const ill = 1;

let newHouseHoldInfo = new HouseholdInfo(householdSize,pets,infant,child,elder,disabled,ill);

let chat = new ChatGpt(city, country, newHouseHoldInfo);

chat.doEverything();


