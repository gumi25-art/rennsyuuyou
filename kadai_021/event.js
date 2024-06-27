const btn = document.getElementById('btn');

const text = document.getElementById('text');

function handleclick() {
setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
 }, 2000);
    }
    
 btn.addEventListener('click', handleclick);
    