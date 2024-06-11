const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const numberValidator = input => {
    if (input === '') {
        alert('Please provide a phone number');
        return;
      }
      const countryCode = '^(1\\s?)?';
      const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
      const spacesDashes = '[\\s\\-]?';
      const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
      const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
      );

      const newResult = document.createElement('p');
      newResult.className = 'results-text';
      phoneRegex.test(input)
      ? (newResult.style.color = '#6FAF62')
      : (newResult.style.color = '#f6655a');
      newResult.appendChild(
        document.createTextNode(
            `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
        )
      );
      resultsDiv.appendChild(newResult);
}

checkBtn.addEventListener('click', () => {
    numberValidator(userInput.value);
    userInput.value = '';
    console.log('check pressed')
  });

  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      numberValidator(userInput.value);
      userInput.value = '';
    }
  });
  
  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    console.log('clear pressed')
  });
  