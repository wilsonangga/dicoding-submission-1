const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown-menu");
const dropdown_menu = document.querySelectorAll("#dropdown-menu-item");
menu.addEventListener("click", function () {
  if (dropdown.classList.contains("active"))
    dropdown.classList.remove("active");
  else {
    dropdown.classList.add("active");
  }
});
for (i = 0; i < dropdown_menu.length; i++) {
  dropdown_menu[i].addEventListener("click", function () {
    dropdown.classList.remove("active");
  });
}
