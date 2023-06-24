import { userName } from "./UserName";

 export class Worker extends userName {
    constructor(name: string | undefined, state: string | undefined, age: number | undefined, city: string | undefined){
        super(name, state, age, city)
    }

    doesTask(){
        console.log("Lets get this Job done!");
    }
};