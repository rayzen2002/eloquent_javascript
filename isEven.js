function isEven( x ){
  
        if(x == 1) return false;
        else if (x == 0) return true;
        else if (x < 0) return isEven ( -x)
        else if (x > 1) return isEven(x - 2);
        
        
}

a = isEven(-1);
console.log(a);