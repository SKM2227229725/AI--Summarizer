// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  let start = 0;
  let end = counter.getAttribute('data-target');
  let speed = 50;

  let update = () => {
    start++;
    counter.innerText = start;
    if (start < end) setTimeout(update, speed);
  };
  update();
});

// FAQ toggle
function toggleFaq(el) {
  const p = el.nextElementSibling;
  p.style.display = p.style.display === "block" ? "none" : "block";
}
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  answer.style.display =
    answer.style.display === "block" ? "none" : "block";
}
