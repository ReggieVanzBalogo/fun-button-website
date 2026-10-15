
let totalClicks = 0;

const message = document.getElementById("message");
const clicks = document.getElementById("clicks");

const funButton = document.getElementById("funButton");
const colorButton = document.getElementById("colorButton");
const textButton = document.getElementById("textButton");
const countButton = document.getElementById("countButton");


funButton.addEventListener("click", function() {
    const jokes = [
        "What if naging kayo in another universe?",
        "Congrats you wasted your time here like you wasted your time with her",
        " roses are red , violets are blue hanggang friends lang naman kayo ",
        "Chat mo na. Para ma-seen ka ulit.",
        "JERIC THE GAOT",
        "Hindi ka niya pinagpalit. Hindi ka lang talaga niya pinili."
        
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    message.textContent = jokes[randomIndex];

    totalClicks++;
    clicks.textContent = totalClicks;
});

colorButton.addEventListener("click", function() {
    const colors = [
        "#ffd6e0",
        "#d0f4de",
        "#fcf6bd",
        "#a9def9",
        "#e4c1f9"
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];

    totalClicks++;
    clicks.textContent = totalClicks;
});

textButton.addEventListener("click", function() {
    if (textButton.textContent === "✨ Change My Text") {
        textButton.textContent = "😎 I'm Different Now!";
        message.textContent = "Wow you changed the button pero naging kayo ba?";
    } else {
        textButton.textContent = "✨ Change My Text";
        message.textContent = "Its back to normal now! you just wasted your time actually";
    }

    totalClicks++;
    clicks.textContent = totalClicks;
});


countButton.addEventListener("click", function() {
    totalClicks++;
    clicks.textContent = totalClicks;

    message.textContent = "You clicked a button " + totalClicks + " times! 🎉";
});
