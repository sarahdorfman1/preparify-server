import OpenAI from "openai";
const openai = new OpenAI();
class ChatGpt{

constructor(city, country, houseHoldInfo){
    this.city = city;
    this.country = country;
    this.houseHoldInfo = houseHoldInfo;
}

async doEverything(){
    //we are limiting the list of disasters but it can be expanded to include things such as political upheavals, wars, famine etc
    const naturalDisasterOptions = ["Blizzard" , "Typhoon", "Hurricane", "Cyclone", "Tornado", "Drought", "Wildfire", "Flood", "Volcanic Eruption", "High Magnitude Earthquake", "Tsunami"];

    //the items that may be needed
    const itemList = [
    "Documentation", "Water purification tablets", "Personal Medication", "Disability aids", 
    "Feminine hygiene products", "Garbage bags for waste", "Extra Clothing", "Warm Coat", "Soap", 
    "First Aid Kit", "Rope", "Duck Tape", "Toilet Paper", "Flares", "Power Bank", "Swiss Army Knife", 
    "Tent", "Hand sanitizer", "Toothbrush and toothpaste", "Hand-crank radio", "Batteries", "Map", 
    "Fire extinguisher", "N95 Masks", "Contacts list", "Small children's toy", "Wet wipes", "Deck of Cards", 
    "Cash", "Pet food", "infant formula", "Flashlight", "Sleeping bags", "Tent", "Headlamp", "Whistle", 
    "Sunscreen", "Plastic sheeting", "Candles", "Crowbar", "Waterproof jacket", "Waterproof boots", 
    "Rain gear", "Tarps", "Sandbags", "Plywood", "Boots", "Heavy-duty gloves", "Hard hat", 
    "Emergency shelter access", "Safety goggles", "Face mask", "Water containers", "Water collection system", 
    "Portable fan", "Cool packs", "Electrolyte tablets", "Sunscreen", "Shade structures", "Bandanas", 
    "Fire-resistant clothing", "Heat-reflective blanket", "Portable air purifier", "Water sprayer", 
    "Shovel", "Waterproof clothing", "Waterproof bags", "Buckets", "PDFs", "Gas mask", "PFDs", 
    "Thermal socks", "Snow Boots", "Warm Gloves", "Warm Hats", "Thermal underwear", "Thermal blankets", 
    "Hand and foot warmers", "Portable heater", "Rock salt", "Ice scraper", "Heating packs", "Portable stove", 
    "Face shield", "Lighter", "Matches", "Bleach", "Non-perishable food items", "infant Diaper", "Adult Diapers", "Medical records"
    ];

    const locationPrompt = "I am in the city of" + this.city + " which is in " + this.country + ". Tell me the single disaster of this list " + naturalDisasterOptions + "that is most likely to occur. I want no additionally explanation just the item off of the list.";

    let message1 = [
        { role: "system", content: "You are an expert of geography and what natural disasters occur in each city, country and region of the world" },
        {
            role: "user",
            content: locationPrompt
        },
    
    ];
    
    const completion1 = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: message1,
        temperature: 0
    });
    
    let likelyDisaster = completion1.choices[0].message.content
    
    const naturalDisasterPrompt = "A " + likelyDisaster + " is likely to occur where I live. I have " + this.houseHoldInfo.getHouseholdSize() + " in my household." +
    this.houseHoldInfo.generatePetsPrompt() + this.houseHoldInfo.generateInfantPrompt() + this.houseHoldInfo.generateChildPrompt() + this.houseHoldInfo.generateElderPrompt() + this.houseHoldInfo.generateIllPrompt() + this.houseHoldInfo.generateDisabledPrompt()
     + "Choose from this list of items only " + itemList + ", provide a simple bullet point list of what is necessary for a preparedness kit that I should pack. I want nothing except for what I requested. ";
    
    let message2 = [
        { role: "system", content: "You are an expert of natural disaster preparedness" },
        {
            role: "user",
            content: naturalDisasterPrompt,
            temperature: 0
        },
    
    ];
    
    const completion2 = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: message2
    });
    
    let listOfItemsToPack = completion2.choices[0].message.content
    
    
    const listExplanation = "A " + likelyDisaster + " is likely to occur where I live. I have " + this.houseHoldInfo.getHouseholdSize() + " in my household." +
    this.houseHoldInfo.generatePetsPrompt() + this.houseHoldInfo.generateInfantPrompt() + this.houseHoldInfo.generateChildPrompt() + this.houseHoldInfo.generateElderPrompt() + this.houseHoldInfo.generateIllPrompt() + this.houseHoldInfo.generateDisabledPrompt()
    + " I think I should pack. Tell me that I should pack these items " + listOfItemsToPack + " in a list format where for every single item sentence explanation of why I should pack them. ";
    
    let message3 = [
        { role: "system", content: "You are an expert of natural disaster preparedness" },
        {
            role: "user",
            content: listExplanation,
            temperature: 0.2
        },
    
    ];
    
    const completion3 = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: message3
    });
    
    let listDetails = completion3.choices[0].message.content
    
    
    const householdPlan = "A " + likelyDisaster + " is likely to occur where I live. I have " + this.householdSize + " in my household." +
    this.houseHoldInfo.generatePetsPrompt() + this.houseHoldInfo.generateInfantPrompt() + this.houseHoldInfo.generateChildPrompt() + this.houseHoldInfo.generateElderPrompt() + this.houseHoldInfo.generateIllPrompt() + this.houseHoldInfo.generateDisabledPrompt()
    + "Assuming I already have a preparedness kit packed and ready. Write a short paragraph of a plan detailing survival of this natural disaster in the second person. ";
    
    let message4 = [
        { role: "system", content: "You are an expert of natural disaster preparedness" },
        {
            role: "user",
            content: householdPlan,
            temperature: 0.3
        },
    ];
    
    const completion4 = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: message4
    });
    
    let escapePlanParagraph = completion4.choices[0].message.content

    let items;

    //for (let i = 1; ) {

    //}
    


    let dictionary = 
        {
        mostLikelyDisaster: likelyDisaster, //one string
        disasterChecklist: items, //list of strings
        story: listDetails+escapePlanParagraph // text block as single string
        }
    
    //console.log(likelyDisaster+"\n" +  listOfItemsToPack +"\n"+listDetails+"\n" + escapePlanParagraph);
 
    return dictionary;
    }
}

export { ChatGpt };