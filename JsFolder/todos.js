const myTodos = []

myTodos.push('need to learn Js')
myTodos.push('need to learn NodeJs')
myTodos.push('need to learn AngularJs')

myTodos.forEach(function(todo, i){
    console.log(`Your task no. ${i+1} is: ${todo}`);

})