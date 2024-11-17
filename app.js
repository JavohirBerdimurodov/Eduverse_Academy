// Example interactive functionality for the site

// Alert when a user clicks "Enroll Now" button
document.querySelectorAll('.enroll-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! Enrollment will open soon.');
  });
});
