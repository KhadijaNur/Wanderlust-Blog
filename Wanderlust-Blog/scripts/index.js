// Get all the elements with the class "count"
const countElements = document.querySelectorAll('.counter');

// Create an Intersection Observer instance
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('counted')) {
        // Add the "counted" class to the element so that it doesn't count up again
        entry.target.classList.add('counted');

        // Determine whether to start counting from 100 or from half the number
        const countTarget = parseInt(entry.target.textContent);
        let countStart;
        if (countTarget > 150) {
          countStart = countTarget - 100;
        } else {
          countStart = countTarget / 2;
        }

        // Count up from the start value to the full number
        let count = countStart;
        const countInterval = setInterval(() => {
          if (count < countTarget) {
            count += 1;
            entry.target.textContent = Math.floor(count).toString();
          } else {
            clearInterval(countInterval);
          }
        }, 50);

        // Store the count interval ID on the element
        entry.target.dataset.countIntervalId = countInterval.toString();
      } else {
        // Get the stored count interval ID and restart the count from the current value
        const countIntervalId = entry.target.dataset.countIntervalId;
        let count = parseInt(entry.target.textContent);
        const countTarget = parseInt(entry.target.textContent);
        const countInterval = setInterval(() => {
          if (count < countTarget) {
            count += 1;
            entry.target.textContent = Math.floor(count).toString();
          } else {
            clearInterval(countInterval);
          }
        }, 50);

        // Update the stored count interval ID on the element
        entry.target.dataset.countIntervalId = countInterval.toString();
      }
    } else {
      // Remove the "counted" class and clear the count interval when the element is no longer visible
      entry.target.classList.remove('counted');
      clearInterval(parseInt(entry.target.dataset.countIntervalId));
    }
  });
});

// Observe all the elements with the class "count"
countElements.forEach(countElement => {
  observer.observe(countElement);
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});