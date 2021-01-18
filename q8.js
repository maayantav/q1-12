let arr = [];
let num = 34;
let x, y;

while(num != 1 && arr[num] !== true) 
{
    arr[num] = true ;
    x = 0 ;
    while (num > 0) {
        y = num % 10 ;
        x += y * y ;
        num = (num  - y) / 10 ;
    }
    num = x;
}

for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
