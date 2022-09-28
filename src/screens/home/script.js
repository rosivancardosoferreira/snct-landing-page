const fields = {
    header: document.getElementById("header")
}
 window.addEventListener("scroll", () => {
    const currentPositionScroll = window.pageYOffset;
    fields.header.classList.toggle("header--show", currentPositionScroll > 150)
 })