"use strict";

var imageCounter= 1;

showDiv(imageCounter);

function changeImage(m) {

    ShowDiv(imageCounter = imageCounter + m);

}

function ShowDiv (n) {

    var i;

    var imageArray = document.getElementsByClassName ("mySlides");

    if (n > imageArray.length) { 

        imageCounter = 1;

}

if (n < 1) {

    imageCounter = imageArray.length;

}

for (i = 0; i < imageArray.length; i++) {

    imageArray[i].style.display = "none";

}

imageArray[imageCounter - 1].style.display = "block";

}
  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }


  document.getElementById(pageName).style.display = "block";


  elmnt.style.backgroundColor = color;



document.getElementById("defaultOpen").click();