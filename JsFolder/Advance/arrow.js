// const sayHello = function(name){
//     return "hey there, " + name + " !"
// }


// const sayHello = (name) =>{
//     return "hey there, " + name + " !"
// }

// console.log(sayHello("Rohit"));



// const sayHello = (name) => `hey there, ${name}`


// console.log(sayHello("Ronny"));

// const test=(name) => `hey boy you have ${name} exam 2Morrow, Be prepared! `

// console.log(test("Physics"));



const todos = [{
    title: 'bread',
    isDone : true
},{
    title : 'Movie',
    isDone : false
},{
    title : 'Work',
    isDone: true
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

const tit = thingsDone.filter ((todo)=>console.log(todo.title))
// above line will print true  titles
