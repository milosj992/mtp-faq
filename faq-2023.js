window.addEventListener('load', function () {
    let listOfSingleCategories = document.getElementsByClassName("faq-single-category-title");
    let textForHide = document.getElementsByClassName("faq-single-category-text");
    let navBar=document.querySelectorAll(".faq-navbar > div");
    let mainContent = document.getElementsByClassName("faq-main-content");

    const toggleShowHide=(list,text)=>{
        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener("click", () => {
    
                if (text[i].style.display == 'none') {
                    text[i].style.display = 'block';
                }
                else {
                    text[i].style.display = 'none';
                }
    
                for (let j = 0; j < list.length; j++) {
                    if (i !== j) {
                        text[j].style.display = 'none';
                    }
                }
            })
        }
    }

    toggleShowHide(listOfSingleCategories,textForHide)
    toggleShowHide(navBar,mainContent)

    
});