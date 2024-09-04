// Get the modal
const modal = document.getElementById("modal");

// Get the image and insert it inside the modal
const images = document.querySelectorAll(".cs-picture");
const modalImg = document.getElementById("modal-img");

images.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Close the modal when clicking on the close button or outside of the modal
const closeBtn = document.getElementById("close");
window.addEventListener("click", function(event) {
  if (event.target === modal || event.target === closeBtn) {
    modal.style.display = "none";
  }
});
