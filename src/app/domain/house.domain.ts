export class House {
    name: String;
    region: string;
    words: String;
    currentLord: String;

    constructor(name, region, words, currentLord) {
        this.name = name;
        this.region = region;
        this.words = words;
        this.currentLord = currentLord;
    }
}