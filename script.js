document.getElementById('yesBtn').addEventListener('click', function() {
    this.classList.add('green');
});

document.getElementById('noBtn').addEventListener('click', function() {
    this.textContent = 'YES';
    this.id = 'yesBtn';
    this.classList.add('green');
});
