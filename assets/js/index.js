const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
const scrollInterval = 2000; // Time in milliseconds for auto-scroll
let autoScroll;

// Function to activate sliding
function activate(e) {
  if (e.target.matches('.next')) {
    slider.append(items[0]); // Move first item to end
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]); // Move last item to start
  }
  resetAutoScroll(); // Reset auto-scroll on user interaction
}

// Function to auto-scroll
function autoScrollItems() {
  slider.append(slider.firstElementChild); // Move the first item to the end
}

// Function to reset auto-scroll
function resetAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(autoScrollItems, scrollInterval);
}

// Start auto-scroll on page load
autoScroll = setInterval(autoScrollItems, scrollInterval);

// Event listener for clicks
document.addEventListener('click', activate, false);
