const myTodos = ['Buy', 'Gym', 'food']

console.log(myTodos.indexOf('food'));


const newTodos = [{
    title : 'Buy bread',
    isDone : false,
}, {
    title : 'Go to Gym',
    isDone: false,
}, {
    title : 'Record thigs',
    isDone : true,
}]

const index = newTodos.findIndex(function(todo, index)
{
    console.log(todo);
    return todo.title ==='Go to Gym'
})

console.log(index);

 