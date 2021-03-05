function countBs(string){
    let c = 0;
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] === "B") c++
    }

    return c;
}

function countChar(string , char){
    let c = 0;
    for (let i = 0 ; i < string.length  ; i++){
        
        if (string[i] === char) c++;
       
    }

    return c;
}


console.log(countChar("kakkerlak", "k"));