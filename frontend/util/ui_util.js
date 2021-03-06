var closeOtherWindows = () => {
  document.getElementById("notebook-side").style.width = "0px";
  document.getElementById("favorite-index").style.width = "0px";
  document.getElementById("search-form").style.width = "0px";
  document.getElementById("books-side").classList.remove('selected');
  document.getElementById("favorite-side").classList.remove('selected');
  document.getElementById("search-side").classList.remove('selected');

}

export const toggleNavNotebook = () => {
  const sidebarWidth = document.getElementById("notebook-side").style.width;
  if (sidebarWidth === "0px") {
    closeOtherWindows();
    document.getElementById("notebook-side").style.width = "430px";
    document.getElementById("books-side").classList.add('selected');
  } else {
    document.getElementById("notebook-side").style.width = "0px";
    document.getElementById("books-side").classList.remove('selected');
  };
};

export const toggleFavorites = () => {
  const sidebarWidth = document.getElementById("favorite-index").style.width;
  if (sidebarWidth === "0px") {
    closeOtherWindows();
    document.getElementById("favorite-index").style.width = "430px";
    document.getElementById("favorite-side").classList.add('selected');
  } else {
    document.getElementById("favorite-index").style.width = "0px";
    document.getElementById("favorite-side").classList.remove('selected');
  };
};

export const toggleSearch = () => {
  const sidebarZ = document.getElementById("search-form").style.width;
  if (sidebarZ === "0px") {
    closeOtherWindows();
    document.getElementById("search-form").style.width = "calc(100% - 75px)";
    document.getElementById("search-side").classList.add('selected');
    // document.getElementById("search-form").style.visibility = "visible";
  } else {
    document.getElementById("search-form").style.width = "0px";
    document.getElementById("search-side").classList.remove('selected');
    // document.getElementById("search-form").style.visibility = "hidden";
  }
}
