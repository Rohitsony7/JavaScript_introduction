var tina = {
    name : 'I am Tina',
    age : 22,
    isActive : true,

}

var ronny ={
    name : 'I am Ronny',
    age : 23,
    isActive : true
}

var sam ={
    name : 'I am Sam',
    age : 29,
    isActive : false
}

let users = new Map()
users.set('Tina', tina)
users.set('ronny', ronny)
users.set('sam', sam)

console.log(users);

console.log(users.size);
// console.log(users.get('Tina'));


// to use for0f , just type #forof 
for (const value of users.values()) {

    console.log(value);
    
}

for (const [key, value] of users.entries()) {

    console.log(key + ' = ' + value.name +',' + value.age);
    
    
}

users.forEach((Value, key) => console.log(key + ' = ' + Value.name +',' + Value.age));




var arrofArr = [['one', 1], ['two', 2], ['three',3 ]]

var newMap = new Map(arrofArr)
console.log(newMap);

var first = new Map(users)
console.log(first);
