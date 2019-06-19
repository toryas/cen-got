export class Character {
    name: string;
    gender: String;
    culture: String
    born: String;
    died: String;
    titles: String[];
    aliases: String[]
    father: String;
    mother: String;
    spouse: String;
    allegiances: String[];

    constructor(name, gender, culture, born, died, titles, aliases, father, mother, spouse, allegiances) {
        this.name = name;
        this.gender = gender;
        this.culture = culture;
        this.born = born;
        this.died = died;
        this.titles = titles;
        this.aliases = aliases;
        this.father = father;
        this.mother = mother;
        this.spouse = spouse;
        this.allegiances = allegiances;
    }
}