const questionElements = document.querySelectorAll('.faq-accordion__question');

questionElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('selected');
        removeSelection(element, questionElements);
    });
    element.addEventListener('mouseover', () => {
    })
});

function removeSelection(selected, elements) {
    elements.forEach(element => {
        if (element != selected) {
            element.classList.remove('selected');
        }
    })
}