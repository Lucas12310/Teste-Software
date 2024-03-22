const soma = (a,b) => {
    if(isNaN(a) || isNaN(b)){
        throw new Error("valor de a ou b deve ser um numero")
    }
    return a+b;
}
const subtracao = (a,b) => a - b;
const multiplicacao = (a,b) => a * b;
const divisao = (dividendo,divisor) => {
    if(divisor == 0){throw new Error("Divisor invalido"+" "+divisor)}
    return dividendo/divisor
}

const media = (var1,var2,var3) => {
    if(isNaN(var1) ||isNaN(var2) ||isNaN(var3)){
        throw new Error("Valor Invalido")
    }
    return (var1 + var2 + var3)/3
};
export {soma,subtracao,multiplicacao,divisao,media}