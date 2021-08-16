function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const AmountText = input.value;
    const AmountValue = parseFloat(AmountText);
    input.value = '';
    return AmountValue;
}

function updateTotalFeild(totalFeildId, AmountValue) {
    const TotalValue = document.getElementById(totalFeildId);
    const TotalText = TotalValue.innerText;
    const preivesTotal = parseFloat(TotalText)
    TotalValue.innerText = preivesTotal + AmountValue;
}

function curretBalence() {
    const balenceTotal = document.getElementById('balance-total');
    const balanceTotalText = balenceTotal.innerText;
    const currentbalenceAmount = parseFloat(balanceTotalText);
    return currentbalenceAmount;
}

function updaateValence(amount, IsAdd) {
    const balenceTotal = document.getElementById('balance-total');
    const balanceTotalText = balenceTotal.innerText;
    const currentbalenceAmount = parseFloat(balanceTotalText);
    balenceTotal.innerText = currentbalenceAmount + amount;

    if (IsAdd == true) {
        balenceTotal.innerText = currentbalenceAmount + amount;
    } else {
        balenceTotal.innerText = currentbalenceAmount - amount;
    }
}





document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalFeild('deposit-total', depositAmount)
        updaateValence(depositAmount, true);
    }


});

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const curentbalence = curretBalence();
    if (withdrawAmount > 0) {
        updateTotalFeild('withdraw-total', withdrawAmount);
        updaateValence(withdrawAmount, false);
    }
    if(withdrawAmount > curentbalence){
        alert('তোর কাছে ত টাকা এতো টাকা নেই শালার পোলা তুই উঠাইবি কেমনে ?');
    }

});