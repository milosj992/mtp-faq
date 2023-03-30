window.addEventListener('load', function () {
    let listOfSingleCategories = document.getElementsByClassName("faq-single-category-title");
    let textForHide = document.getElementsByClassName("faq-single-category-text");

    for (let i = 0; i < listOfSingleCategories.length; i++) {
        listOfSingleCategories[i].addEventListener("click", () => {

            if (textForHide[i].style.display == 'none') {
                textForHide[i].style.display = 'block';
            }
            else {
                textForHide[i].style.display = 'none';
            }

            for (let j = 0; j < listOfSingleCategories.length; j++) {
                if (i !== j) {
                    textForHide[j].style.display = 'none';
                }
            }
        })
    }
});