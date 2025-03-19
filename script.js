document.addEventListener("DOMContentLoaded", function () {
    const tipButton = document.getElementById("generateTips");
    
    if (tipButton) {
        tipButton.addEventListener("click", function() {
            const tips = [
                "Switch to reusable bags and bottles.",
                "Support local farmers to reduce carbon footprint.",
                "Reduce energy use by unplugging devices when not in use.",
                "Plant more trees in your neighborhood.",
                "Use bicycles or public transport instead of cars.",
                "Participate in local cleanup campaigns.",
                "Install solar panels to generate renewable energy.",
                "Harvest rainwater to conserve water resources."
            ];

            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            document.getElementById("tipText").innerText = randomTip;
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.querySelectorAll("#languageSwitcher a");

    languageSwitcher.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute("data-lang");
            let currentURL = window.location.pathname;

            let fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);

            if (selectedLang === "hu") {
                if (fileName.includes("")) {
                    window.location.href = fileName.replace("index.html", "index-hu.html");
                }
            } else {
                if (fileName.includes("-hu")) {
                    window.location.href = fileName.replace("index-hu.html", "index.html");
                }
            }
        });
    });
});



