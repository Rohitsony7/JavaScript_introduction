// if(true){
//     console.log("I am inside if block");
//     console.log("Hi anush");

// }
// else if(true){
//     console.log("Hey tina");
// }
// else{
//     console.log("hey shree");
// }


// var whoISHere = ''

// if(whoISHere ==='user'){
//     console.log("Hey there");
//     console.log("Allow access to the user");
// }
// else if(whoISHere ==='teacher'){
//     console.log("Greeting to his teacher");
// }
// else{
//     console.log("No access")
// }


// && - AND Operator both need to be true
// || - or operation one side need to be true

let isVarified =false
let isLoggedToken = true
let isGuest = true
let hasPaymentToken = true

if(!isVarified && isLoggedToken && hasPaymentToken){

    console.log("Hello folk...");
}
else if(isVarified || isGuest ){
    console.log("Allow free preview");
}
else{
    console.log("Heyy there, contact admin");
}
