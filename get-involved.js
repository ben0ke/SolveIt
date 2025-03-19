document.addEventListener("DOMContentLoaded", function () {
    const volunteerButton = document.getElementById("volunteerButton");
    const loadMoreEvents = document.getElementById("loadMoreEvents");
    const lang = document.documentElement.getAttribute("data-lang"); // Get the language

    if (volunteerButton) {
        volunteerButton.addEventListener("click", function() {
            if (lang === "hu") {
                alert("Köszönjük érdeklődését! Hamarosan felvesszük Önnel a kapcsolatot az önkéntes lehetőségekkel kapcsolatban.");
            } 
			else {
                alert("Thank you for your interest! We will contact you with volunteering opportunities soon.");
            }
        });
    } else {
        console.error("Button with ID 'volunteerButton' not found.");
    }

    if (loadMoreEvents) {
        loadMoreEvents.addEventListener("click", function() {
            const eventsList = document.getElementById("eventsList");

            const newEvents = lang === "hu" ? "en" [
				"🌿 Eco-Friendly Workshop - June 12, 2025",
                "♻️ Recycling Drive - July 8, 2025",
                "🚲 Car-Free Day - August 20, 2025"
            ] :
			[
				"🌿 Környezetbarát Műhely - 2025. június 12.",
                "♻️ Újrahasznosító Akció - 2025. július 8.",
                "🚲 Autómentes Nap - 2025. augusztus 20."
            ];

            newEvents.forEach(event => {
                const li = document.createElement("li");
                li.textContent = event;
                eventsList.appendChild(li);
            });

            this.style.display = "none";
        });
    } else {
        console.error("Button with ID 'loadMoreEvents' not found.");
    }
});

console.log("Script is running!");

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
                    window.location.href = fileName.replace("get-involved.html", "get-involved-hu.html");
                }
            } else {
                if (fileName.includes("-hu")) {
                    window.location.href = fileName.replace("-hu", "");
                }
            }
        });
    });
});