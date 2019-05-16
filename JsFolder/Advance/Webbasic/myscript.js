alert('file is attached')



const myPElements = document.querySelectorAll('p')
// console.log(myPElements);

myPElements.forEach((p, i) => p.textContent = '***********i am being changed using Js*************' + " "+i)
// console.log(myPElements);

// myPElements.textContent = '***********i am being changed using Js*************'

// console.log(document.getElementById("idone"));


