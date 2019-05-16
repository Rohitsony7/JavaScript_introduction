// datatype - Array


const superHeroes =['Iron man', 'Spiderman', 'captain America']

console.log(superHeroes[superHeroes.length - 1]);

console.log(`We have ${superHeroes.length} super heroes`);

const numbers =['one', 'two', 'three', 'four', 'five', 'six']

numbers[1] = 'somethings'

console.log(numbers);

numbers.shift();
console.log(numbers.shift())

numbers.pop();
console.log(numbers);
numbers.push('Seven');
console.log(numbers);

numbers.splice(2, 1, 'HereSplice');
console.log(numbers);