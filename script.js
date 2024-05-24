var totalAmount = 0;
var remainingAmount = 0;
var expenses = [];

function setTotalAmount() {
    var totalAmountInput = document.getElementById('total-amount').value;
    if (totalAmountInput !== '') {
        totalAmount = parseFloat(totalAmountInput);
        remainingAmount = totalAmount;
        document.getElementById('remaining-amount').innerText = remainingAmount.toFixed(2);
        document.getElementById('total-amount').value = '';
    }
}

function addExpense() {
    var expenseAmountInput = document.getElementById('expense-amount').value;
    if (expenseAmountInput !== '') {
        var expense = parseFloat(expenseAmountInput);
        if (expense <= remainingAmount) {
            expenses.push(expense);
            remainingAmount -= expense;
            updateDisplay();
            document.getElementById('expense-amount').value = '';
        } else {
            alert('Insufficent amount');
        }
    }
}

function updateDisplay() {
    document.getElementById('remaining-amount').innerText = remainingAmount.toFixed(2);
    var expenseHistory = document.getElementById('expense-history');
    expenseHistory.innerHTML = '';
    expenses.forEach((expense, index) => {
        var listItem = document.createElement('li');
        listItem.innerText = `Expense ${index + 1}: $${expense.toFixed(2)}`;
        expenseHistory.appendChild(listItem);
    });
}
