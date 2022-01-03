/* Значение из текстовых инпутов:*/
const anInitialFee = document.getElementById('an-initial-fee'), // первоначальный взнос
      creditTerm = document.getElementById('credit-term'); // срок кредита

/* Значение из range инпутов:*/
const anInitialFeeRange = document.getElementById('an-initial-fee-range'), // range для первоначального взноса
      anInitialTermRange = document.getElementById('credit-term-range'); 

const totalAmountOfCredit = document.getElementById('amount-of-credit'), 
      totalMonthlyPayment = document.getElementById('monthly-payment'); 

const inputsRange = document.querySelectorAll('.input-range'); 

/* Мапинг range + input[text]*/
const assignValue = () => {
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = anInitialTermRange.value;
}


for(let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(anInitialFee.value, creditTerm.value)
    })
}

assignValue();


calculation();









