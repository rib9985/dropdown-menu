const menuIcon = document.getElementById("menu-icon");

function toggleMenuElements() {
  const menuElementsContainer = document.getElementById(
    "menu-elements-div-container",
  );
  menuElementsContainer.classList.toggle("visible");
  menuElementsContainer.classList.toggle("not-visible");
}

menuIcon.addEventListener("click", toggleMenuElements);
