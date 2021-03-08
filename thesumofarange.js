function Sequence(start, end, step) {
    let sequence = [];
        let array = [];
        if(step > 0){
            for(let i = start ; i <= end ; i += step) array.push(i);
        } else{
            for(let i = start ; i >= end ; i += step) array.push(i);
        }


        return array;
    }


function Sum(array) {
    var sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}

v=[1,2,3,4,5,6,7,8,9,10]
console.log(Sequence(5, 2, -1));
console.log(Sum(v));