// const score = 30;


// if (score >= 80) {
//         console.log('You are really genius man')
// } else if (score <= 40) {
//         console.log('Not Good')
// } else {
//         console.log('You should learn more')
// }




// score >= 90 ? console.log('You are talented man') : console.log('You should learn more and more');


// const number = 11;
// if (number % 2 === 0) {
//         console.log('this number is even',number)
// } else {
//         console.log('this number is odd', number)
// }



// 

// switch (4) {
//         case 1:
//                 console.log('this is one')
//                 break;

//         case 2:
//                 console.log('this is two')
//                 break;

//         default:
//                 console.log('nothing')
// };

// const score = 80;
// switch (true) {
//         case score >= 80:
//                 console.log('you are brilliant man')
//                 break;

//         case score <= 40:
//                 console.log('you are so lazy')
//                 break;

//         default:
//                 console.log('you are not passed')
//                 break;

// }



// for (let i = 1; i <= 100; i++) {
//         console.log(i);
// }


// let i = 1;
// while (i <= 10) {
//         console.log(i)
//         i++;
// }


const defaultPin = 0000;
const guessMessage = 'Please make your guess:';
const wrongMessage = 'Sorry that was wrong';
const correctMessage = 'That was correct';
const maxAttempts = 4;
let currentAttempts = 1;

for (let i = 1; i <= maxAttempts; i++) {
        const userInput = parseInt(prompt(`Attempt remaining: ${maxAttempts-currentAttempts} \n ${guessMessage}`));



        if (userInput === defaultPin) {
                console.log(correctMessage);
                break;
        } else {
                console.log(wrongMessage);
        }

        currentAttempts++;
}