window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  var navbar_style = document.getElementById("nav-bar").style;
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    navbar_style.top = "0";
    navbar_style.backgroundColor = "#2196F3";
  } else if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navbar_style.top = "-82px";
  } else {
    navbar_style.backgroundColor = "rgba(255,255,255,0)";
    navbar_style.top = "0";
  }
}
