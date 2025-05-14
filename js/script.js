const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const galleryImages = document.querySelectorAll(".gallery-image");

if (modal && modalImg && galleryImages.length > 0) {
    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = image.src;
            document.body.style.overflow = "hidden"; // 🔒 Disable scroll
        });
    });

    modal.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = ""; // 🔓 Enable scroll again
    });
}
