document.addEventListener("DOMContentLoaded", () => {

    /* ====================================
       HIGHLIGHT CURRENT NAVIGATION LINK
    ==================================== */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        if (link.href === window.location.href) {

            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";

        }

    });

    /* ====================================
       FAQ ACCORDION
    ==================================== */

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            const panel = button.nextElementSibling;

            if (panel.style.display === "block") {

                panel.style.display = "none";

            } else {

                panel.style.display = "block";

            }

        });

    });

    /* ====================================
       SERVICES SEARCH
    ==================================== */

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const filter = searchInput.value.toLowerCase();

            const serviceCards =
                document.querySelectorAll(".services div");

            serviceCards.forEach(card => {

                const text =
                    card.textContent.toLowerCase();

                if (text.includes(filter)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    /* ====================================
       ENQUIRY FORM
    ==================================== */

    const enquiryForm =
        document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                service === "" ||
                message === ""
            ) {

                alert("Please complete all fields.");
                return;

            }

            if (!email.includes("@")) {

                alert("Please enter a valid email address.");
                return;

            }

            let responseText = "";

            switch (service) {

                case "Leadership":

                    responseText =
                        "Thank you " +
                        name +
                        ". You have enquired about our Leadership Programme. A Footsteps coordinator will contact you within 2 business days.";

                    break;

                case "Volunteer":

                    responseText =
                        "Thank you " +
                        name +
                        ". Volunteer opportunities are currently available and a coordinator will contact you soon.";

                    break;

                case "Strategy":

                    responseText =
                        "Thank you " +
                        name +
                        ". Our strategy consultations are available and a representative will contact 