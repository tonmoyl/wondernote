export const toggleNavNotebook = () => {
  const sidebarWidth = document.getElementById("notebook-side").style.width;
  if (sidebarWidth === "0px") {
    document.getElementById("notebook-side").style.width = "430px";
  } else {
    document.getElementById("notebook-side").style.width = "0px";
  };
};

export const toggleSearch = () => {
  const sidebarZ = document.getElementById("search-form").style.zIndex;
  if (sidebarZ === "0") {
    document.getElementById("search-form").style.zIndex = 4;
  } else {
    document.getElementById("search-form").style.zIndex = 0;
  }
}
