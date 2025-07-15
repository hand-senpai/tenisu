const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultArea = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const num = Number(numberInput.value);

    if (!Number.isInteger(num) || num <= 0) {
        resultArea.textContent = '正の整数を入力してください。';
        resultArea.className = 'error';
        return;
    }

    if (num === 1) {
        resultArea.textContent = '1 は素数ではありません。';
        resultArea.className = 'not-prime';
        return;
    }

    if (isPrime(num)) {
        resultArea.textContent = `${num} は素数です。`;
        resultArea.className = 'prime';
    } else {
        const divisor = findSmallestDivisor(num);
        resultArea.textContent = `${num} は素数ではありません。（${divisor} で割り切れます）`;
        resultArea.className = 'not-prime';
    }
});

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function findSmallestDivisor(n) {
    if (n % 2 === 0) return 2;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return i;
    }
    return n;
}

numberInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkButton.click();
    }
});
