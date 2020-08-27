  chefe ( )

function  chefe ( ) {
    var  vetor  =  [] // declara vetor
    exe7 ( vetor ) // estamos passando o vetor como parâmetro - escopo global
    console . log ( vetor )
    calculaMedia ( vetor )
}
// entrada de dados
function  exe7 (vet) {// vet representa o vetor -> o que fizermos com vet será feito em vetor
    var  numero  =  Number (prompt("Insira um número:"))
    do{ // coloca o número em vet
        veterinário.push(numero)
        numero  =  Number (prompt("Insira um número negativo para encerrar"))
    }
    while (numero >= 0 )
}

function  calculaMedia (vet) {
    var  soma  =  0
    for (var i=  0 ;  i  <  veterinário . comprimento ;  i ++ ) {
        soma=soma + vet [i]
    }
    console.log ( `A media é ${soma/vet.length} `)
}