// não posso delegar para uma função algo que ela não pode fazer
chefe()
function chefe(){
    var  numero =  Number ( prompt ( `Informe um número:` ) )
    
    ex9 ( numero )
}

// versaõ final

function ex9 (numero) { //supondo que num seja 6
    
    var  soma  =  0
    for ( var  divisor = num ;  divisor >=1 ;  divisor--) {  // divisor começa em 6 e vai até 1
        if ( num % divisor  ==  0){
            soma  =  soma  +  divisor
        }
    }
    console.log ( `A soma dos divisores de ${num} é ${soma}`)
}