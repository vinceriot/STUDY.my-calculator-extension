// Заполнение выпадающего списка
function populateSelect(selectElement) {
    for (let i = 2; i <= 16; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectElement.appendChild(option);
    }
}

window.onload = function() {
    const fromBaseSelect = document.getElementById('fromBase');
    const toBaseSelect = document.getElementById('toBase');
    populateSelect(fromBaseSelect);
    populateSelect(toBaseSelect);
    
    fromBaseSelect.value = 10;
    toBaseSelect.value = 10;
}

// Конвертация чисел
document.getElementById('convertBtn').addEventListener('click', function() {
    const inputNumber = document.getElementById('inputNumber').value.trim().toUpperCase();
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    
    // Проверка корректности ввода
    const validCharacters = '0123456789ABCDEF'.slice(0, fromBase);
    const isValid = [...inputNumber].every(char => validCharacters.includes(char));

    if (!isValid) {
        alert(`Пожалуйста, введите корректное число для системы счисления ${fromBase}.`);
        return;
    }
    
    try {
        // Преобразование введённого числа из системы счисления "fromBase" в десятичную
        const decimalNumber = parseInt(inputNumber, fromBase);
        
        if (isNaN(decimalNumber)) {
            alert('Ошибка! Некорректный ввод числа.');
            return;
        }
        
        // Преобразование из десятичной системы в систему "toBase"
        const result = decimalNumber.toString(toBase).toUpperCase();
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Произошла ошибка при конвертации числа. Пожалуйста, проверьте ввод.');
    }
});



