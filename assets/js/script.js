document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("open");
      navMenu.classList.toggle("active");
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuBtn.classList.remove("open");
      navMenu.classList.remove("active");
    });
  });

  // Film Filtering on Films Page
  const filterBtns = document.querySelectorAll(".filter-btn");
  const filmCards = document.querySelectorAll(".film-card");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        // Show/hide films based on filter
        filmCards.forEach((card) => {
          if (filterValue === "all") {
            card.style.display = "block";
          } else {
            if (card.getAttribute("data-category") === filterValue) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          }
        });
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Simple validation
      if (name && email && subject && message) {
        // In a real application, this would send the form data to a server
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      } else {
        alert("Please fill out all fields in the form.");
      }
    });
  }

  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = newsletterForm.querySelector('input[type="email"]').value;

      if (email) {
        // In a real application, this would send the email to a server
        alert("Thank you for subscribing to our newsletter!");
        newsletterForm.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Add animation to elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".film-card, .news-card, .team-member, .upcoming-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (elementPosition < screenPosition) {
        element.classList.add("animate");
      }
    });
  };

  // Run animation check on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Run once on page load
  animateOnScroll();

  // Footer scroll animation
  function handleFooterAnimation() {
    const footer = document.querySelector('footer');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY + windowHeight;

    // Check if we're near the bottom of the page (within 100px)
    if (scrollPosition >= documentHeight - 100) {
      footer.classList.add('visible');
      // Remove the scroll event listener once the footer is visible
      window.removeEventListener('scroll', handleFooterAnimation);
    }
  }

  // Add scroll event listener for footer animation
  window.addEventListener('scroll', handleFooterAnimation);
  // Initial check for footer animation
  handleFooterAnimation();
});
