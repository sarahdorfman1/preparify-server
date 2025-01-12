class HouseholdInfo{
    constructor(householdSize, pets, infant, child, elder, disabled, ill){
        this.householdSize = householdSize;
        this.pets = pets;
        this.infant = infant;
        this.child = child;
        this.elder = elder;
        this.disabled = disabled;
        this.ill = ill;
    }

    getHouseholdSize(){
        return this.householdSize
    }

    generatePetsPrompt(){
        let petsPrompt = "";
        if (this.pets == 1){
            petsPrompt = "I have one pet. ";
        }else if (this.pets > 1){
            petsPrompt = "I have multiple pets";
        }else{
            petsPrompt = "I don't have any pets. ";
        }
        return petsPrompt;
    }

    generateInfantPrompt(){
        let infantPrompt = "";
        if (this.infant == 1){
            infantPrompt = "There is one infant in my household. ";
        }else if (this.infant > 1){
            infantPrompt = "There are multiple infants in my household. ";
        }else{
            infantPrompt = "There are no infants in my household. ";
        }
        return infantPrompt;
    }

    generateChildPrompt(){
        let childPrompt = "";
        if (this.child == 1){
            childPrompt = "There is one child in my household. ";
        }else if (this.child > 1){
            childPrompt = "There are multiple children in my household. ";
        }else{
            childPrompt = "There are no children in my household. ";
        }
        
        return childPrompt;
    }

    generateElderPrompt(){
        let elderPrompt = "";
        if (this.elder == 1){
            elderPrompt = "There is one elderly person in my household. ";
        }else if (this.elder > 1){
            elderPrompt = "There are multiple elderly people in my household. ";
        }else{
            elderPrompt = "There are no elderly people in my household. ";
        }
        
        return elderPrompt;
    }

    generateDisabledPrompt(){
        let disabledPrompt = "";
        if (this.disabled == 1){
            disabledPrompt = "There is one person with a disability in my household. ";
        }else if (this.disabled > 1){
            disabledPrompt = "There are multiple people with a disability in my household. ";
        }else{
            disabledPrompt = "There are no people with disabilities in my household. ";
        }
        return disabledPrompt;
    }

    generateIllPrompt(){
        let illPrompt = "";
        if (this.ill == 1){
            illPrompt = "There is one sick person in my household. ";
        }else if (this.ill > 1){
            illPrompt = "There are multiple sick people in my household. ";
        }else{
            illPrompt = "There are no sick people in my household. ";
        }
        return illPrompt;
    }
}

export { HouseholdInfo };