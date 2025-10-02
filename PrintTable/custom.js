// Print the table till 20;

// var number = prompt("Enter a number from 1 to 10:");

// for(var i =1; i<=10; i++){

//     console.log(number + " x " + i + " = " + (number*i));

// }

// Limit will be given by User
// Print tables of different numbers till 20

// var limitNumer = prompt("Enter a number to print table till:");

// for (var j=1; j<=limitNumer; j++){

//     console.log("Table of " + j);

//     for(var k=1; k<=20; k++){

//         console.log(j + " x " + k + " = " + (j*k));
//     }       

// }


// Check number if prime or not?

// var checkNumber = prompt("Enter a number to check if it's prime or not: ");

// var isPrime = true;

// if(checkNumber == 1){
//     console.log("1 is not a prime number.");
// }
// else if(checkNumber > 1){   
//     for(var i=2; i<=checkNumber/2; i++){

//         if(checkNumber % i == 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(checkNumber + " is a prime number.");
//     }
//     else{
//         console.log(checkNumber + " is not a prime number.");
//     }

// }
// else{
//     console.log("The number is not prime.");
// }

// Print all the prime numbers from 1 to 100

for (var num = 1; num <= 100; num++) {

    var isPrime = true;

    if (num == 1) {
        isPrime = false;
    }
    else if (num > 1) {
        for (var j = 2; j <= num / 2; j++) {   

            if (num % j == 0) {
                isPrime = false;
                break;
            }       

        }
    }       

    if (isPrime) {
        console.log(num);
    }

}