var closeOtherWindows = () => {
  document.getElementById("notebook-side").style.width = "0px";
  document.getElementById("favorite-index").style.width = "0px";
  document.getElementById("search-form").style.width = "0px";
}

export const toggleNavNotebook = () => {
  const sidebarWidth = document.getElementById("notebook-side").style.width;
  if (sidebarWidth === "0px") {
    closeOtherWindows();
    document.getElementById("notebook-side").style.width = "430px";
  } else {
    document.getElementById("notebook-side").style.width = "0px";
  };
};

export const toggleFavorites = () => {
  const sidebarWidth = document.getElementById("favorite-index").style.width;
  if (sidebarWidth === "0px") {
    closeOtherWindows();
    document.getElementById("favorite-index").style.width = "430px";
  } else {
    document.getElementById("favorite-index").style.width = "0px";
  };
};

export const toggleSearch = () => {
  const sidebarZ = document.getElementById("search-form").style.width;
  if (sidebarZ === "0px") {
    closeOtherWindows();
    document.getElementById("search-form").style.width = "100%";
    // document.getElementById("search-form").style.visibility = "visible";
  } else {
    document.getElementById("search-form").style.width = "0px";
    // document.getElementById("search-form").style.visibility = "hidden";
  }
}
