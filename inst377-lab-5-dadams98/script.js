document.addEventListener('DOMContentLoaded', () => {
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const amountInput = document.getElementById('amount');
    const resultDiv = document.getElementById('result');
    const currencyForm = document.getElementById('currency-form');
  
    fetch('https://api.frankfurter.app/currencies')
      .then(response => response.json())
      .then(data => {
        const currencies = Object.entries(data);
        currencies.forEach(([code, name]) => {
          const option = document.createElement('option');
          option.value = code;
          option.text = `${code} - ${name}`;
          fromCurrencySelect.add(option);
          toCurrencySelect.add(option.cloneNode(true));
        });
      })
      .catch(error => console.error('Error fetching currency data:', error));
  
    currencyForm.addEventListener('submit', event => {
      event.preventDefault();
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
      const amount = parseFloat(amountInput.value);
  
      if (fromCurrency === toCurrency) {
        alert('You cannot convert the same currency.');
        return;
      }
  
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        .then(response => response.json())
        .then(data => {
          const convertedAmount = data.rates[toCurrency];
          resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
    });
  });