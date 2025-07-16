console.log('Hi there')
//Palindroma 

/*
- chiedere di inserire una parola 
- capire sela parola è palindroma:
  . scrivi la parola al contrario 
  . confronta la parola al contrario con l'originale 

tools: 

- prompt
- (f) 

Execution:

*/
//

const word = prompt('Type a word')


function isPalindrome(str) {
    // 1. Normalizza la stringa: minuscolo e rimozione caratteri non alfanumerici
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 2. Inverti la stringa normalizzata
    const reversedStr = cleanedStr.split('').reverse().join('');

    // 3. Confronta la stringa originale normalizzata con la sua versione invertita
    return cleanedStr === reversedStr;
}

// Esempi di utilizzo:
console.log(isPalindrome('radar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('A man, a plan, a canal. Panama')); // Output: true
console.log(isPalindrome('Racecar')); // Output: true


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



//