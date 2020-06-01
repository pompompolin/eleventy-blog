var nav = document.getElementById('navbar');

window.onscroll = function() {navOnScroll()};

function navOnScroll() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").style.backgroundColor = "#fff";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}