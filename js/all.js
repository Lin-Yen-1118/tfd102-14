"use strict";

var bgr_el = document.getElementById("bgr"); //宣告變數 漢堡選單id

var nav_el = document.getElementsByClassName("nav_bar")[0];
if (nav_el.style.display === "none") {
  bgr_el.style.display = "flex";
}
