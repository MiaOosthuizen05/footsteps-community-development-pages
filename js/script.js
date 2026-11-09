document.addEventListener("DOMContentLoaded", () => {

    /* ==================================
       ACTIVE NAVIGATION LINK
    ================================== */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        if (link.href === window.location.href) {

            link.style.fontWeight = "700";
            link.style.textDecoration = "underline";

        }

    });

    /* ==================================
       FAQ ACCORDION
    ================================== */

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(button => {

        button.addEventListener("click", () => {

            const panel = button.nextElementSibling;

            if (panel.style.display === "block") {

                panel.style.display = "none";

            } else {

                panel.style.display = "block";

            }

        });

    });

    /* ==================================
       SERVICES SEARCH
    ================================== */

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const value = searchInput.value.toLowerCase();

            const cards = document.querySelectorAll(".services div");

            cards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (text.includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    /* ==================================
       GALLERY SEARCH
    ================================== */

    const gallerySearch = document.getElementById("gallerySearch");

    if (gallerySearch) {

        gallerySearch.addEventListener("keyup", () => {

            const searchTerm = gallerySearch.value.toLowerCase();

            const images = document.querySelectorAll(".gallery a");

            images.forEach(image => {

                const altText = image.querySelector("img").alt.toLowerCase();

                if (altText.includes(searchTerm)) {

                    image.style.display = "block";

                } else {

                    image.style.display = "none";

                }

            });

        });

    }

    /* ==================================
       ENQUIRY FORM
    ================================== */

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

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

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");
                return;

            }

            let responseText = "";

            switch (service) {

                case "Leadership":

                    responseText =
                        "Thank you for your interest in our Leadership Development Programme. A Footsteps representative will contact you within 2 business days.";
                    break;

                case "Volunteer":

                    responseText =
                        "Thank you for your interest in volunteering with Footsteps. Our volunteer coordinator will contact you shortly.";
                    break;

                case "Strategy":

                    responseText =
                        "Thank you for enquiring about our Strategic Planning services. A consultant will contact you soon.";
                    break;

                case "Sponsorship":

                    responseText =
                        "Thank you for your interest in sponsorship opportunities. A team member will provide additional information shortly.";
                    break;

                default:

                    responseText =
                        "Thank you for your enquiry. We will contact you soon.";

            }

            const response = document.getElementById("response");

            response.innerHTML = `
                <h3>Enquiry Submitted Successfully</h3>
                <p>${responseText}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Selected Service:</strong> ${service}</p>
            `;

            enquiryForm.reset();

            response.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

    /* ==================================
       CONTACT FORM
    ================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const subject = document.getElementById("contactSubject").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please complete all fields.");
                return;

            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");
                return;

            }

            const body =
                "Name: " + name +
                "%0D%0A" +
                "Email: " + email +
                "%0D%0A%0D%0A" +
                message;

            window.location.href =
                "mailto:info@footsteps.org" +
                "?subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                body;

        });

    }

    /* ==================================
       SMOOTH SCROLL EFFECT
    ================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            });

        });

    /* ==================================
       FADE-IN ANIMATION
    ================================== */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.1

    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease";

        observer.observe(section);

    });

});