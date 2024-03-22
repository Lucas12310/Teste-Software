import{describe, expect,test,it} from '@jest/globals';
import {soma,subtracao,multiplicacao,divisao,media} from "../index.js"

 describe("Testando valores positivos soma", () => {
    it("Deve retornar a soma de 2 mais 2 igual a 4",() => {
       const resultado = 4;
         const esperado = soma(2,2);
         expect(esperado).toBe(resultado);
     });
 });

 describe("Testando valores negativos soma", () => {
     it("Deve retornar a soma de 2 mais 2 igual a 4",() => {
         const resultado = -4;
         const esperado = soma(-2,-2)
        expect(esperado).toBe(resultado);
     });
});

 describe("Testando valores positivos subtracao", () => {
     it("Deve retornar a subtração de 2 menos 2 igual a 0",() => {
         const resultado = 0;
         const esperado = subtracao(2,2)
         expect(esperado).toBe(resultado);
     });
 });


 describe("Testando valores negativos multiplicacao", () => {    
    it("Deve retornar a multiplicação de 2 vezes 2 igual a 4",() => {
        const resultado = -4;
         const esperado = multiplicacao(-2,2)
        expect(esperado).toBe(resultado);
    });
});

 describe("Testando valores positivos divisao", () => {    
     it("Deve retornar a divisao de 2 mais 2 igual a 1",() => {
         expect(() => divisao(2,0)).toThrow();
     });
});

describe("Testando se os parametros são string", () => 
{    
    it("Deve retornar mensagem de erro",() => {
        expect(() => soma("o",0)).toThrow()
    });
});



