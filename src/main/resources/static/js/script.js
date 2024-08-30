document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let description = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;
    if (description && amount) {
        const expenseList = document.getElementById('expense-list');
        const newExpenseItem = document.createElement('li');
        newExpenseItem.innerHTML = `\${description} - \$\${parseFloat(amount).toFixed(2)}`;
        expenseList.appendChild(newExpenseItem);

        // Clear the input fields
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});