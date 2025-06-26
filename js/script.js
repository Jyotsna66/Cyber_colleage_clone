// flag animation
// window.addEventListener('load', () => {
//     const flag = document.querySelector('.flag-icon');
//     flag.style.animation = 'wave 1.5s ease-in-out';
    
//     // Optional: remove animation after it's done
//     setTimeout(() => {
//       flag.style.animation = '';
//     }, 1500);
//   });

//  <!-- Live Date and Time Script -->

function updateDateTime() {
  const now = new Date();
  const day = now.toLocaleDateString("en-GB", { weekday: 'long' });
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB", { hour12: false });

  document.getElementById("dateTime").innerHTML =
    `${day}, ${date} ${time} IST`;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call


// slide
const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');

  slides[current].querySelectorAll('.slice').forEach(slice => {
    slice.style.animation = 'none';
    slice.offsetHeight; // force reflow
    slice.style.animation = '';
  });

  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// alert
  const messages = [
    "📢 Admission Open for 2025 – Apply Now!",
    "💼 100% Placement Assistance Available!",
    "🚀 New Batches Starting July 1st!",
    "🎓 Join India’s Best Cyber Law College",
    "📝 Register Early & Get Free Study Material!",
    "📅 Free Demo Class Every Saturday",
    "🎁 Special Discount for Early Enrollments"
  ];

  const track = document.getElementById("marqueeTrack");

  // Add messages twice for seamless loop
  for (let i = 0; i < 2; i++) {
    messages.forEach(msg => {
      const div = document.createElement("div");
      div.className = "marquee-message";
      div.textContent = msg;
      track.appendChild(div);
    });
  }
