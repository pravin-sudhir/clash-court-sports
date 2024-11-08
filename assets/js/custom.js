const newsletterModal = document.getElementById("newsletterModal");
const declineBtn = document.getElementById("declineBtn");
const acceptBtn = document.getElementById("acceptBtn");

const showModal = () => {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled >= scrollableHeight) {
    // Show the modal when the user reaches the bottom
    newsletterModal.style.left = "0%";
  }
};

const hideModal = () => {
  newsletterModal.style.display = "none";
};

window.addEventListener("scroll", showModal);

declineBtn.addEventListener("click", hideModal);
acceptBtn.addEventListener("click", () => {
  hideModal();
  // Set a cookie to remember user action
  document.cookie =
    "newsletterSubscribed=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/";
});

window.addEventListener("DOMContentLoaded", () => {
  // Check if the cookie is set, and if so, do not show the modal
  if (document.cookie.includes("newsletterSubscribed=true")) {
    window.removeEventListener("scroll", showModal);
  }
});

function toggleFeatures() {
  var pricingContent = document.getElementById("pricingContent");
  var toggleButton = document.querySelector(".show_hide_button");
  var toggleIcon = toggleButton.querySelector("img");

  if (pricingContent.classList.contains("hide")) {
    pricingContent.classList.remove("hide");
    toggleButton.innerHTML =
      'Hide features <img src="https://d3ua9rt77rehgj.cloudfront.net/assets/images/chevron-up-outline-white.svg" alt="">';
  } else {
    pricingContent.classList.add("hide");
    toggleButton.innerHTML =
      'Show features <img src="https://d3ua9rt77rehgj.cloudfront.net/assets/images/chevron-down-outline-white.svg" alt="">';
  }
}

const videos = [
  "https://demo.arcade.software/51IJBfsPZGtZBilMHsZs?embed&amp;show_copy_link=true",
  "https://demo.arcade.software/X1XrzYUkvbBpkJkzcNkL?embed&show_copy_link=true",
  "https://demo.arcade.software/MLLaStFP61AkzAb9QOuL?embed&amp;show_copy_link=true",
  "https://demo.arcade.software/TyRM26jGqaCpbjHt1HK8?embed&show_copy_link=true",
  "https://demo.arcade.software/QDhtMn6OaJ6UzODBKMdM?embed&show_copy_link=true",
  "https://demo.arcade.software/TyRM26jGqaCpbjHt1HK8?embed&show_copy_link=true",
];

const sections = document.querySelectorAll(".scrollspy_box_left");
const iframe = document.getElementById("iframe");
let scrollTimeout;

function onScroll() {
  let current = "";

  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
      current = index;
    }
  });

  if (current !== "" && iframe.src !== videos[current]) {
    iframe.src = videos[current];
  }
}

function debounceScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(onScroll, 100); // Adjust the delay (in milliseconds) as needed
}

window.addEventListener("scroll", debounceScroll);


// Cookies Functionality 

document.addEventListener('DOMContentLoaded', () => {
  // Get modal and buttons
  const cookiesModal = document.getElementById('cookiesModal');
  const rejectButton = document.getElementById('rejectbtn');
  const acceptButton = document.getElementById('acceptbtn');

  // Show the modal if no cookie preference is set
  if (!getCookie('cookieConsent')) {
      cookiesModal.style.display = 'block';
  }

  // Handle the "Reject all" button click
  rejectButton.addEventListener('click', () => {
      setCookie('cookieConsent', 'rejected', 30);
      cookiesModal.style.display = 'none';
      // Optionally, add your logic here to disable non-essential cookies
      console.log('All cookies rejected');
  });

  // Handle the "Accept all" button click
  acceptButton.addEventListener('click', () => {
      setCookie('cookieConsent', 'accepted', 30);
      cookiesModal.style.display = 'none';
      // Optionally, add your logic here to enable all cookies
      console.log('All cookies accepted');
  });

  // Function to set a cookie
  function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i].trim();
          if (cookie.indexOf(name + "=") === 0) {
              return cookie.substring(name.length + 1);
          }
      }
      return "";
  }
});


document.addEventListener('DOMContentLoaded', () => {
    // List of valid routes/pages in your directory
    const validRoutes = ['/', '/index.html', '/about.html', '/contact.html'];

    // Get the current path from the URL
    const currentPath = window.location.pathname;

    // Check if the current path is not in the list of valid routes
    if (!validRoutes.includes(currentPath)) {
        // Redirect to the 404 page
        window.location.href = '/404.html';
    }
});
