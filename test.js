var c = '';
for (i = 1; i <= 7; i++) {
    c = c + '#';
    console.log(c)
}


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i% 5 > 0) {
        console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 > 0) {
            console.log("Buzz");
        }else if (i % 3 ==0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }else console.log(i);
    }


    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      }  

      