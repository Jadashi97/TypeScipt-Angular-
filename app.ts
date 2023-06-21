export {}; // we use to prevent any errorrs

let game: string;
game = "Rugby";



function typeOfGame(game: string, points: number){
    console.log(`I could have easily scored ${points} in my last ${game} game`)
}

// typeOfGame("soccer", 23);


let a: number = 1;
let b: string  = "string";
let c: boolean = true;
let d: null = null;
let e: object = { };
let f: undefined = undefined;
let h: any = "j";
let i: any[] = ["billy", 23];
let j: Array<string> = ["23"];
let k: Array<number> = [23, 44];


////////////////////////// Arrow functions ///////////

const aboutMe = (name: string, age:number, career:boolean )=>{
    console.log(`My name is ${name} and I am ${age}  years old i wonder if i am doing this life thing right, true or false?: ${career}`)
};

// aboutMe("lokose", 26, true);

//////////////////////////  Promises ///////////

const myFamo = async function(fam:number){
    return console.log(`Hello, the Natana family has over ${fam} members and trust me majority of us are not tuned to liking each other!`)
}

// myFamo(50);


//////////////////////////  Interfaces ///////////

let user = {
    name: "lokose",
    state: "MN",
    age: 26,
    city: "Bloomington"
};

interface UserData{
    name: string,
    state: string,
    age: number,
    city: string
}


let welcomePage = (user:UserData)=>{
    console.log(`Hey welcome ${user.name}, you are from ${user.state}, you are ${user.age} and live in ${user.city}`)
}

// welcomePage(user);

//////////////////////////  Classess ///////////
interface UserInterface {
    name: string;
    state: string;
    city: string;
    signedOff():any;
}

class userName{

    constructor(
        public name:string, 
        public state:string, 
        public age:number, 
        public employeed:boolean, 
        public city:string 
        ){
        this.name = name,
        this.age = age,
        this.employeed = employeed,
        this.state = state;
        this.city = city;
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

    get Age(){
        return this.age;
    }
}

// const userName1 = new userName("lokose", "MN", 26, true, "Bloomington");
const userName2 = new userName("Daniel", "VA", 20, false, "yei");