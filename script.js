const form = document.getElementById("donation-form");
const thankYou = document.getElementById("thankyou-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = form.querySelector('input[type="text"]').value;
    const amount = form.querySelector('input[type="number"]').value;

    thankYou.textContent = `Thank you, ${name}, for your donation of $${amount}! ❤️`;

    form.reset();
});