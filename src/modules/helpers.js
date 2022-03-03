const animation = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    let counter = 0;
    let idAnimationOpen;
    let idAnimationClose;

    const openAnimation = () => {
        counter += 0.05;
        idAnimationOpen = requestAnimationFrame(openAnimation);
        if (counter < 1) {
            modal.style.opacity = counter;
        } else {
            modal.style.opacity = 1;
            cancelAnimationFrame(idAnimationOpen);
        }
    };

    const closeAnimation = () => {
        counter -= 0.05;
        idAnimationClose = requestAnimationFrame(closeAnimation);

        if (counter > 0) {
            modal.style.opacity = counter;
            console.log(counter);
        } else {
            modal.style.opacity = 0;
            cancelAnimationFrame(idAnimationClose);
        }
    };
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            if (screen.width > 768) {
                openAnimation();
            }
        });

    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            closeAnimation();
            setTimeout(() => modal.style.display = "none", 1000);
        }
    })
};

export {animation};
