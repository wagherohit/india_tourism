
const previewImage = document.getElementById('previewImage');
const hoverItems = document.querySelectorAll('.hover-preview');

hoverItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const imgSrc = item.getAttribute('data-img');
    previewImage.setAttribute('src', imgSrc);
  });
});
  // Toggle 'View Packages' ↔ 'Hide Packages' for capsule buttons
  document.querySelectorAll('.capsule-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Find the next sibling element (if it's an info box to show/hide)
      const info = button.nextElementSibling;
      if (info) {
        const isVisible = info.classList.contains('show-info');
        info.classList.toggle('show-info');
        info.classList.toggle('hidden-info');
        button.textContent = isVisible ? 'View Packages' : 'Hide Packages';
      }
    });
  });

  // Optional: Add plus/minus symbol for FAQ accordion if desired
  document.querySelectorAll('.accordion-button').forEach(button => {
    const span = document.createElement('span');
    span.classList.add('faq-icon');
    span.innerHTML = '+'; // default symbol
    span.style.marginLeft = '10px';
    span.style.fontWeight = 'bold';

    button.appendChild(span);

    button.addEventListener('click', function () {
      // Remove '+' from all other buttons
      document.querySelectorAll('.faq-icon').forEach(icon => {
        icon.innerHTML = '+';
      });

      // If the current is expanded, show '-' otherwise '+'
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      span.innerHTML = isExpanded ? '+' : '-';
    });
  });