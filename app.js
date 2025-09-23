// cards sliding logic
document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const left = wrapper.querySelector(".left-btn");
    const right = wrapper.querySelector(".right-btn");
    const slider = wrapper.querySelector(".cards-container");
    const images = slider.querySelectorAll(".card"); // each card inside this slider
    let counter = 1;
    const length = images.length;

    const updateSliderPosition = () => {
        slider.style.transform = `translateX(-${(counter - 1) * 75}px)`;
        toggleButtons(); // Call to update button visibility
    };
    const toggleButtons = () => {
        left.style.display = counter > 1 ? 'block' : 'none'; // Show left button if not on the first card
        right.style.display = counter < length ? 'block' : 'none'; // Show right button if not on the last card
    };
    const nextslide = () => {
        if (counter < length) { // Check if we are not at the last card
            counter++;
            updateSliderPosition();
        }
    };
    const prevslide = () => {
        if (counter > 1) { // Check if we are not at the first card
            counter--;
            updateSliderPosition();
        }
    };
    right.addEventListener("click", nextslide);
    left.addEventListener("click", prevslide);
    // Initial button visibility
    toggleButtons();
});


//Changing background color of category-bar to black when page scroll
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector(".main-content");
    const btnWrapper = document.querySelector(".category-bar");
    if (mainContent && btnWrapper) {
        mainContent.addEventListener("scroll", () => {
            if (mainContent.scrollTop > 0) {
                btnWrapper.classList.add("scrolled");
            } else {
                btnWrapper.classList.remove("scrolled");
            }
        });
    }
});


