let num1 = 24, num2 = 16;
let gcd;

if (num1 < num2){
    for (let i = 1; i < num1; i++)
    {
        if (num1 % i === 0)
        {
            if (num2 % i === 0)
            {
                gcd = i;
            }
        }
    }
}

else
{
    for (let i = 1; i < num2; i++)
    {
        if (num2 % i === 0)
        {
            if (num1 % i === 0)
            {
                gcd = i;
            }
        }
    }
}

console.log(gcd);