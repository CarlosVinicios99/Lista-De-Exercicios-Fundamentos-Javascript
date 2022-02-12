const converterParaReal = (valor) => "R$" + valor.toFixed(2).toString().replace(".", ",")

console.log(converterParaReal(0.30000004))
console.log(converterParaReal(1.34534353))