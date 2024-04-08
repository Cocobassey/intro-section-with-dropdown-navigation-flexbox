const menuPanel = document.querySelector('.hamburger')
const menuSlide = document.querySelector('.mob-nav')
const closeBtn = document.querySelector(".close-btn")
const openBtn = document.querySelector(".open-btn")
const featureAreas = document.querySelectorAll('.feature-area')
const companyAreas = document.querySelectorAll('.comp-area')

let toggleUp;
let toggleDown;


function toggleMenu() {
    if (menuSlide.classList.contains("showMenu")) {
        menuSlide.classList.remove("showMenu");
        closeBtn.style.display = "block";
        openBtn.style.display = "none";
    } else {
        menuSlide.classList.add("showMenu");
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    }
}

menuPanel.addEventListener("click", toggleMenu);

featureAreas.forEach(featureArea => {
    featureArea.addEventListener('click', () => {
        const toggleUp = featureArea.querySelectorAll('.arrowup');
        const toggleDown = featureArea.querySelectorAll('.arrowdown');
        const dropdownBox = featureArea.querySelector('.dropdown');

        toggleUp.forEach(upArrow => {
            upArrow.style.visibility = upArrow.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });

        toggleDown.forEach(downArrow => {
            downArrow.style.visibility = downArrow.style.visibility === 'visible' ? 'hidden' : 'visible';
        });

        if (dropdownBox.style.display === 'none') {
            dropdownBox.style.display = 'block';
        } else {
            dropdownBox.style.display = 'none';
        }
    });
});

companyAreas.forEach(companyArea => {
    companyArea.addEventListener('click', () => {
        const toggleUp = companyArea.querySelectorAll('.arrowup');
        const toggleDown = companyArea.querySelectorAll('.arrowdown');
        const dropdownBox = companyArea.querySelector('.dropdown');

        toggleUp.forEach(upArrow => {
            upArrow.style.visibility = upArrow.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });

        toggleDown.forEach(downArrow => {
            downArrow.style.visibility = downArrow.style.visibility === 'visible' ? 'hidden' : 'visible';
        });

        if (dropdownBox.style.display === 'none') {
            dropdownBox.style.display = 'block';
        } else {
            dropdownBox.style.display = 'none';
        }
    });
});