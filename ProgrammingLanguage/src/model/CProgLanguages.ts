export class CProgLanguages {
    constructor(private name?: string, private founded?: number, private founder?: string, private description?: string){

    }

    
    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
    getFounded(){
        return this.founded;
    }
    setFounded(founded: number){
        this.founded = founded;
    }
    getFounder(){
        return this.founder
    }
    setFounder(founder: string){
        this.founder = founder;
    }
    getDescription(){
        return this.description;
    }
    setDescription(desc: string){
        this.description = desc;
    }

}