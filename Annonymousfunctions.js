console.log("-----------Without Input without Return-------------")
// Annonymous function:WithOut Input and Without Return.
// Display a welcome message.
let welcome = function(){
    console.log("welcome to javascript")
};
welcome()

// 2.print Odd Numbers from 1 to 15.
let oddNumbers = function(){
    for(let i = 1;i <= 15; i = i + 1){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
oddNumbers()

// 3.Print Armstrong Numbers from 1 to 500.
let Armstrong = function(){
    for(let n = 1;n<=500;n=n+1){
        let temp = n;
        let sum = 0;
        while(temp > 0){
            let digit = temp % 10;
            sum = sum + (digit * digit * digit);
            temp = Math.floor(temp / 10);
        }
        if(sum == n){
            console.log(n)
        }
    }

};
Armstrong ()

console.log("-------With Input and without return---------------")
// Annonymous function :with Input and Without Return.
// 4.Convert Kilometers to Meters.
let KilometerToMeter = function(km){
    let meter = km * 1000;
    console.log("Meters =",meter)
};
KilometerToMeter(5)

// 5.Calculate Discount Price.
let discountPrice = function(price, discount){
    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;
    console.log("Discount Amount =", discountAmount);
    console.log("Final Price =", finalPrice);
}
discountPrice(2000, 15)

// 6.Find the Middle Number Among Three Numbers.
let middleNumber = function(a,b,c){
    if((a > b && a < c) || (a < b && a > c)){
        console.log("Middle Number =",a)

    } else if ((b > a && b < c) || (b < a && b > c)){
        console.log("Middle Number =",b)

    }else{
        console.log("Middle Number =",c)
    }
};
middleNumber(25,10,18)

console.log("--------------Without input and with Return----------------")
// Annomynous function: without input and with Return.
//7. Return a Fixed Salary.
let salary = function(){
    return 25000;
}
let result = salary();
console.log("salary =",result)

// 8.return sum of odd numbers from 1 to 20.
let oddsum = function(){
    let sum = 0;
    for(let i = 1; i <= 20; i = i + 1){
        if(i%2 != 0){
            sum = sum + i
        }
    }
    return sum;

}
let ans = oddsum()
console.log("Sum of Odd Numbers =",ans)

// 9.Return largest Digit of a Number.
let LargestDigit = function(){
    let n = 987654;
    let largest = 0;

    while(n > 0){
        let digit = n % 10;
        if(digit > largest){
            largest = digit;
        }
        n = Math.floor(n / 10);
    }
    return largest;
}
let answer = LargestDigit();
console.log("Largest Digit =",answer)


console.log("---------------With input and with input-------------------")
// Annonymous function:With Input and With Input.
//10.Convert Minutes to Seconds.
let minutesToSeconds = function(minutes){
    return minutes = 60;
}
let res = minutesToSeconds(5);
console.log("Seconds =",res)

//11.Calculate the Area of a Traingle.
let traingleArea = function(base,height){
    return (base * height) / 2;
}
let area = traingleArea(10,8);
console.log("Area of Traingle =",area) 

//12.Find the LCM of Two Numbers.
let lcm = function(a,b){
    let max = a > b ? a : b;
    while(true){
        if(max % a == 0 && max % b == 0){
            return max;
        }
        max = max + 1;
    }
};
let twoNumbers = lcm(12,18)
console.log("LCM =",twoNumbers) 