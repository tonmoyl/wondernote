export const toggleNavNotebook = () => {
  const sidebarWidth = document.getElementById("notebook-side").style.width;
  if (sidebarWidth === "0px") {
    document.getElementById("notebook-side").style.width = "430px";
  } else {
    document.getElementById("notebook-side").style.width = "0px";
  };
};

export const toggleSearch = () => {
  const sidebarZ = document.getElementById("search-form").style.width;
  if (sidebarZ === "0px") {
    document.getElementById("search-form").style.width = "100%";
    // document.getElementById("search-form").style.visibility = "visible";
  } else {
    document.getElementById("search-form").style.width = "0px";
    // document.getElementById("search-form").style.visibility = "hidden";
  }
}
