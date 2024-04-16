document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container img");
    let index = 0;

    function showImage() {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        index = (index + 1) % images.length;
    }

    setInterval(showImage, 2000); // Rotate every 3 seconds
});
