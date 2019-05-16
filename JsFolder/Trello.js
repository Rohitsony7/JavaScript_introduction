// let myTodos = {
//     day : 'Monday',
//     meetings : 0,
//     meetDone : 0
// }

// let addMeeting = function (todo, meet =0){
//     todo.meetings = todo.meetings + meet
// }
// let meetDone = function(todo, meet =0){
//     todo.meetDone = todo.meetDone -meet

// }

// let resetDay = function(todo){
//     todo.meetings =0;
//     todo.meetDone = 0;
// }

// let getSummeryOfDay = function(todo){
//     let meetLeft = todo.meetings + todo.meetDone

//     return  `you have ${meetLeft} meetings today!`
// }

// addMeeting(myTodos, 4)
// addMeeting(myTodos, 3)

// meetDone(myTodos, 5)


// console.log(getSummeryOfDay(myTodos));



let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,

    addMeeting : function(){
        console.log(this)
    }
}

let myTodos1 = {
    day : 'Monday',
    meetings : 12,
    meetDone : 3,

    addMeeting : function(){
        console.log(this)
    }
}

let myTodos2 = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,

    addMeeting : function(num){
        this.meetings+=num
        
    },
    summary : function(){
        return  `you  have ${this.meetings} meetings today!`

    }
}

myTodos2.addMeeting(4);
myTodos2.summary();



myTodos.addMeeting();
myTodos1.addMeeting();


