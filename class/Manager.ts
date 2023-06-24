import { userName } from "./UserName";

export class Manager extends userName {
    constructor(name: string | undefined, state: string | undefined, age: number | undefined, city: string | undefined){
        super(name, state, age, city)
    }

    giveOrders(){
        console.log("To employee");
    }
};