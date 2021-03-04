let size = 8;
let draw = [];

for (let i = 1; i <= size; i++) 
{
    for (let j = 1; j <= size; j++) 
    {
        
        if((i + j) % 2 == 0 ){ 
            draw += " ";
        }else  {
            draw += "#";
        }
        
    }
    draw += "\n"; 
}

console.log(draw);