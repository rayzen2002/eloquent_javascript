function revarray(array){
    let newArray = [];
    for (let i = array.length - 1; i >= 0 ; i--){
        newArray.push(array[i]); 
    }
    return newArray;
}

function reverseArrayInPlace(array){
    let tmp = [];

    for (let i = 0; i < Math.floor(array.length/2) ; i++){
        tmp[i] = array[array.length - i -1];
        array[array.length -i -1] = array[i];
        array[i] = tmp[i];
    }
      
    return array;
}
v = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,22222];
//reverseArrayInPlace(v);

console.log(reverseArrayInPlace(v))

//console.log(revarray(["A", "B", "C"]));