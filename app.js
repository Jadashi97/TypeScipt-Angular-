"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager_1 = require("./class/Manager");
var Worker_1 = require("./class/Worker");
// let game: string;
// game = "Rugby";
// function typeOfGame(game: string, points: number){
//     console.log(`I could have easily scored ${points} in my last ${game} game`)
// }
// // typeOfGame("soccer", 23);
// let a: number = 1;
// let b: string  = "string";
// let c: boolean = true;
// let d: null = null;
// let e: object = { };
// let f: undefined = undefined;
// let h: any = "j";
// let i: any[] = ["billy", 23];
// let j: Array<string> = ["23"];
// let k: Array<number> = [23, 44];
// ////////////////////////// Arrow functions ///////////
// const aboutMe = (name: string, age:number, career:boolean )=>{
//     console.log(`My name is ${name} and I am ${age}  years old i wonder if i am doing this life thing right, true or false?: ${career}`)
// };
// // aboutMe("lokose", 26, true);
// //////////////////////////  Promises ///////////
// const myFamo = async function(fam:number){
//     return console.log(`Hello, the Natana family has over ${fam} members and trust me majority of us are not tuned to liking each other!`)
// }
// // myFamo(50);
// //////////////////////////  Interfaces ///////////
// let user = {
//     name: "lokose",
//     state: "MN",
//     age: 26,
//     city: "Bloomington"
// };
// interface UserData{
//     name: string,
//     state: string,
//     age: number,
//     city: string
// }
// let welcomePage = (user:UserData)=>{
//     console.log(`Hey welcome ${user.name}, you are from ${user.state}, you are ${user.age} and live in ${user.city}`)
// }
// // welcomePage(user);
// const userName1 = new userName("lokose", "MN", 26, true, "Bloomington");
// const userName2 = new userName("Daniel", "VA", 20, false, "yei");
var lokose = new Manager_1.Manager("Lokose Dan", "CT", 26, "city");
var Nyarji = new Worker_1.Worker("Nyarji", "Minnesota", 22, "Juba");
lokose.giveOrders();
Nyarji.doesTask();
