
var input = numero
let numero = Number(input.question('Digite um número:'))
let contador = numero 
let result = 0



function fizzbuzz(numero){
   do{ if (numero % contador == 0){
        result++
     }
        contador--
    }while(contador > 0) {
        if(result == 2){
            console.log(`o número ${numero} é primo` )

        }else{
            console.log(`o número ${numero} não é primo`)
        }

    }

}
console.log(fizzbuzz(9))




//////////
let primo = numero =>{
    for(let i = 2; i < numero;i++){
        if ((numero % i) == 0) return false;
        return true;
    }

}