export const toggleNav = () => {
  const sidebarWidth = document.getElementById("notebook-side").style.width;
  if (sidebarWidth === "0px") {
    document.getElementById("notebook-side").style.width = "430px";
  } else {
    document.getElementById("notebook-side").style.width = "0px";
  };
};
