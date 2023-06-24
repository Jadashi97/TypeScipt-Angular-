

interface UserInterface {
    name?: string;
    state?: string;
    city?: string;
    signedOff():any;
}

 export class userName{

    constructor(
        public name?:string, 
        public state?:string, 
        public age?:number, 
        public city?:string 
        ){
        this.name = name == undefined ? "(Missing Name)" : name;
        this.age = age === undefined ? 0 : age;
        this.state = state === undefined ? "(Missing state)" : state;
        this.city = city === undefined ? "(Missing City)" : city;
        // console.log(`Created a new User named ${this.name
        // } who is ${this.age} and ${this.employeed} he is employeed, plus he stays in ${this.state}`)

        this.welcomePage();
        this.signedOff();
    }

    private welcomePage(){
        console.log(`Hey welcome ${this.name}, you are from ${this.state}, you are ${this.age} and live in ${this.city}`
        )
    }

    signedOff(){
        console.log(
            `${this.name} who is ${this.age} years olf from ${this.city}, ${this.state} just signed out`
        );
    }

    //////// setters and getters ///////
    set Age(value: number){
        this.age =value;
    }

    // get Age(){
    //     return this.age;
    // }
}