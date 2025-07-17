console.log('Is the word a palindrome?')
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

const miaParola = prompt('type a word');

console.log(miaParola)


// scrivere la parola al contrario

function reverseword(rovescioParola) {

    let rovescioLettere = [];

    for (let i = miaParola.length - 1; i >= 0; i--) {
        rovescioLettere += miaParola[i]
    }
    return rovescioLettere
}

const arrayRevLetter = reverseword(miaParola)

if (arrayRevLetter === miaParola) {

    console.log('la parola è palindroma')


} else {

    console.log('la parola non è palindroma')
}




//Pari e dispari

//console.log('Odd or Even?')
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

//execution

// chiedere all'utente di inserire un numero da 1 a 5

//const typenumb = prompt ('Type a numeber between 1 and 5')

// generare un numero d 1 a 5



