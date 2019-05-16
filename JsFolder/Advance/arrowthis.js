const camreras = {
    price : 600,
    weight : 2000,
    // myDes: ()=>`hey there, my worth ${this.price} nd ${this.weight}`,
    myDesc :function (name){
        return  `hey there i'm camera and my worth ${this.price} nd ${this.weight}`

    }
    // dont use arrow in method or constructor
}
console.log(camreras.myDes());

// arrow can be use for key and value pair too
const func = () =>({ key: 'value'}) 