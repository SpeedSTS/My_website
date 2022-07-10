const LINKS = document.querySelectorAll("a");
const SECTION = document.querySelectorAll("section");
function none_section() {
    for(i=0; i<SECTION.length; i++) {
        SECTION[i].style.display = "none"
    }
}
none_section();
LINKS.forEach((link, index) => {
    link.addEventListener("click", () => {
        for(i=0; i<SECTION.length; i++) {
            SECTION[i].style.display = "none"
        }
        SECTION[index].style.display = "block";
    });
})