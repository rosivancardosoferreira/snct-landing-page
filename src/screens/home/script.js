const fields = {
    header: document.getElementById("header"),
    headerNavigation: document.getElementById("header-navigation"),
    headerMenu: document.getElementById("header-menu"),
    headerItems: document.getElementById("header-items"),
}
 window.addEventListener("scroll", () => {
    const currentPositionScroll = window.pageYOffset;
    fields.header.classList.toggle("header--show", currentPositionScroll > 150)
 })

 function onOpenMenu() {
    const isCloseMenu = !fields.headerNavigation.classList.contains("header__navigation--open");
    fields.headerNavigation.classList.toggle("header__navigation--open", isCloseMenu);
    fields.headerMenu.classList.toggle("header__menu--active", isCloseMenu);
    fields.headerItems.classList.toggle("header__items--open", isCloseMenu);
 }

 function onCloseMenu() {
    const isOpenMenu = fields.headerNavigation.classList.contains("header__navigation--open");
    if(isOpenMenu) {
        fields.headerNavigation.classList.remove("header__navigation--open");
        fields.headerNavigation.classList.remove("header__navigation--open");
        fields.headerMenu.classList.remove("header__menu--active");
        fields.headerItems.classList.remove("header__items--open");
    }
 }