//01)Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

function valores(valor1, valor2) {
  console.log(
    `soma=${valor1 + valor2}\nsub=${valor1 - valor2}\nmult=${
      valor1 * valor2
    }\ndiv=${valor1 / valor2}`
  );
}
valores(8, 5);
