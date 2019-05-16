let getMyGreade = function(curretMarks, totalMarks){

    let myPercent = (curretMarks/totalMarks)*100;

    let MyGreade=''

    if(myPercent >=90){
        MyGreade = 'A'
    }
    else if(myPercent >=80 ){
        MyGreade = 'B'
    }
    else if(myPercent >=70){
        MyGreade = 'C'
    }
    else{
        MyGreade = 'F'
    }

    return `Your grade is ${MyGreade}`

}

console.log(getMyGreade(90, 100));