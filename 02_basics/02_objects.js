// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sneha",
    "full name": "Sneha Singh",
    [mySym]: "mykey1", // [] refers symbol
    age: 23,
    location: "Kanpur",
    email: "sneha@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof(JsUser[mySym]));

JsUser.email = "singsneha@google.com"
// Object.freeze(JsUser)
JsUser.email = "ssneha@gnmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User!")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingsTwo());