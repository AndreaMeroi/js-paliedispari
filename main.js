console.log('Hi there')
//Palindroma 

/*
- chiedere di inserire una parola 
- capire sela parola è palindroma:
  . scrivere la parola al contrario
  . la parola al contrario è uguale all'originale ?

tools: 

- prompt
- (f) 

Execution:

*/


//chiedere di inserire una parola

const typeword = prompt('Type a word')




function isPalindrome() {

    // scrivere la parola al contrario
    const reverseword = typeword.split('').reverse().join('');

    // la parola al contrario è uguale all'originale ?
    return reverseword === typeword;
}


console.log(isPalindrome('radar'));



//Pari e dispari

/*
-chiedere all'utente di inserire un numero da 1 a 5
- generare un numero d 1 a 5
- sommare i due numeri
- dichiarare se il risultato è pari o dispari

Tools:

-prompt
-(f) per generare un numero random da 1 a 5
-(f) per sommare
-(f) per definire se il numero è pari o dispari
*/


//