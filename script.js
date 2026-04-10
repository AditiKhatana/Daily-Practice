const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // 1. Toggle the class on the body
    document.body.classList.toggle('sanctuary-mode');
    
    // 2. Change the button text based on the mode
    if (document.body.classList.contains('sanctuary-mode')) {
        themeBtn.innerText = "☀️ Day Mode";
    } else {
        themeBtn.innerText = "🌙 Sanctuary Mode";
    }
});