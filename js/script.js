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


const counters = document.querySelectorAll('.count');

        const animateCount = (el) => {
            const target = +el.dataset.target;
            let count = 0;
            const speed = 200; // adjust for speed

            const update = () => {
                const increment = target / speed;
                if (count < target) {
                    count += increment;
                    el.textContent = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    el.textContent = target;
                }
            };

            update();
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));