function AnimalType(Name, Description) {
        this.Name = Name;
        this.Description = Description;
    }

AnimalType.prototype = {
        get animalName() {
            return this.Name;
        },

        set animalName(Name) {
            this.Name = Name;
        },
    get animalDesc(){
            return this.Description;
        },
    set animalDesc(description){
            this.Description=description;
        }
};