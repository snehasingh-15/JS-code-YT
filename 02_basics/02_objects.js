// // Singleton
// // Object.create

// // Object Literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Sneha",
//     "full name": "Sneha Singh",
//     [mySym]: "mykey1", // [] refers symbol
//     age: 23,
//     location: "Kanpur",
//     email: "sneha@google.com",
//     isLoggedIn: true,
//     lastLoginDays: ["Monday", "Wednesday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"]);
// // console.log(JsUser[mySym]);
// // console.log(typeof(JsUser[mySym]));

// JsUser.email = "singsneha@google.com"
// // Object.freeze(JsUser)
// JsUser.email = "ssneha@gnmail.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js User!")
// }

// JsUser.greetingsTwo = function(){
//     console.log(`Hello JS User, ${this.name}`)
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingsTwo());

// ++++++++++++++++++++++++++++++++++++++ PART - 2 ++++++++++++++++++++++++++++++++++++++++++++++++++

const tinderUser = new Object() // SINGLETON
//const tinderUser = {} //NON SINGLETON
tinderUser.id = "124abc"
tinderUser.name = "Sneha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sneha",
            lastname: "Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} // SPREAD
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "ss@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +++++++++++++++++++++++++++++++++++++++++ PART - 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Sneha"
}

//course.courseInstructor

const {courseInstructor: instruct} = course

console.log(instruct);

// {
//     "name": "Sneha",
//     "coursename": "JS in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {},
]                 


                                        // JSON --- Json formater
                                        // random API me

