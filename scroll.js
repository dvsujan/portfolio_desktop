// get position of the scroll bar
function getScrollXY() {
  var scrOfX = 0,
    scrOfY = 0;
  if (typeof window.pageYOffset == "number") {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if (
    document.body &&
    (document.body.scrollLeft || document.body.scrollTop)
  ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if (
    document.documentElement &&
    (document.documentElement.scrollLeft || document.documentElement.scrollTop)
  ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return [scrOfX, scrOfY];
}

function getMousePosition(e) {
  var x = e.clientX;
  var y = e.clientY;
  return [x, y];
}

// print position of scroll bar
const text = `Hey I'm Sujan. Through this website  I hope to showcase my skills, projects, and achievements, and provide you with a glimpse of what I can offer as a professional. Whether you're an employer, a potential client, or simply someone who's interested in my work, I invite you to explore my portfolio and learn more about what I do.`;
const texts = text.split(" ");

window.addEventListener("scroll", function () {
  // if getScrollXY()[0] is in between 1000 and 5000 insert text into the div from the arra
  // change uppler and lower limit according to screen lower limit is after 100% of the screen and upper limit is 500% of screen
  var lowerLimit = window.innerWidth;
  var upperLimit = window.innerWidth * 4;
  // console.log("lowerLimit: ", lowerLimit, " upperLimit: ", upperLimit);

  if (getScrollXY()[0] < lowerLimit || getScrollXY()[0] > upperLimit) {
    document.getElementById("sec2text").innerHTML = "";
    document.getElementById("sec2text").style.backgroundColor = "transparent";
  }

  if (getScrollXY()[0] > lowerLimit && getScrollXY()[0] < upperLimit) {
    var index = Math.floor(getScrollXY()[0] / 100);
    // console.log(index%texts.length);
    // append text to the div
    // console.log(texts);
    var str = "";
    for (var i = 0; i < index; i++) {
      if (text[i] != undefined) {
        console.log(text[i]);
        str += texts[i] + " ";
      }
    }
    // background color
    this.document.getElementById("sec2text").style.backgroundColor = "#4F200D";
    // remove all undefined from str
    str = str.replace(/undefined/g, "");
    document.getElementById("sec2text").innerHTML = str;
  }

  // code for section 3 hiding and showing according page posittion

  var proj1lowerLimit = window.innerWidth * 6.5;
  var proj1upperLimit = window.innerWidth * 8;
  var proj1Content = this.document.getElementById("project1");
  if (getScrollXY()[0] < proj1lowerLimit || getScrollXY()[0] > proj1upperLimit) {
    proj1Content.style.display = "none";
    proj1Content.style.opacity = "0";
    proj1Content.style.backgroundColor = "transparent";
  }
  if (getScrollXY()[0] > proj1lowerLimit && getScrollXY()[0] < proj1upperLimit) {
    proj1Content.style.display = "flex";
    proj1Content.style.opacity = "1";
    proj1Content.style.background = " linear-gradient(135deg, white 10%, #4b6bfb 350%)";
    // proj1Content.style.backgroundColor = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)";
    // get mouse position and change the background color of the div according to the mouse position
    // console.log(getMousePosition()[0], getMousePosition()[1]) ; 
    // proj1Content.style.backgroundColor = "rgb(" + getMousePosition()[0] + "," + getMousePosition()[1] + ", 0)";

  }

  var proj2lowerLimit = window.innerWidth * 8;
  var proj2upperLimit = window.innerWidth * 9;
  var proj2Content = this.document.getElementById("project2");
  if (getScrollXY()[0] < proj2lowerLimit || getScrollXY()[0] > proj2upperLimit) {
    proj2Content.style.display = "none";
    proj2Content.style.opacity = "0";
    proj2Content.style.backgroundColor = "transparent";
  }
  if (getScrollXY()[0] > proj2lowerLimit && getScrollXY()[0] < proj2upperLimit) {
    proj2Content.style.display = "flex";
    proj2Content.style.opacity = "1";
    // proj2Content.style.backgroundColor = "orange";
    proj2Content.style.background = " linear-gradient(135deg, white 10%, orange 250%)";
  }

  var proj3lowerLimit = window.innerWidth * 9;
  var proj3upperLimit = window.innerWidth * 10;
  var proj3Content = this.document.getElementById("project3");
  if (getScrollXY()[0] < proj3lowerLimit || getScrollXY()[0] > proj3upperLimit) {
    proj3Content.style.display = "none";
    proj3Content.style.opacity = "0";
    proj3Content.style.backgroundColor = "transparent";
    // make proj3Content animate please 
    proj3Content.style.animation = "slideIn 1s ease-in-out";

  }
  if (getScrollXY()[0] > proj3lowerLimit && getScrollXY()[0] < proj3upperLimit) {
    proj3Content.style.display = "flex";
    proj3Content.style.opacity = "1";
    // proj3Content.style.backgroundColor="#7289da"; 
    proj3Content.style.animation = "slideIn 1s ease-in-out";
    proj3Content.style.background = " linear-gradient(135deg, white 10%, #7289da 250%)";
  }

  var proj4lowerLimit = window.innerWidth * 10;
  var proj4upperLimit = window.innerWidth * 11;
  var proj4Content = this.document.getElementById("project4");
  if (getScrollXY()[0] < proj4lowerLimit || getScrollXY()[0] > proj4upperLimit) {
    proj4Content.style.display = "none";
    proj4Content.style.opacity = "0";
    proj4Content.style.backgroundColor = "transparent";
  }
  if (getScrollXY()[0] > proj4lowerLimit && getScrollXY()[0] < proj4upperLimit) {
    proj4Content.style.display = "flex";
    proj4Content.style.opacity = "1";
    // proj4Content.style.backgroundColor = "#FFD93D";
    proj4Content.style.background = " linear-gradient(135deg, white 10%, #FFD93D 250%)";
  }

  var proj5lowerLimit = window.innerWidth * 11;
  var proj5upperLimit = window.innerWidth * 12;
  var proj5Content = this.document.getElementById("project5");
  if (getScrollXY()[0] < proj5lowerLimit || getScrollXY()[0] > proj5upperLimit) {
    proj5Content.style.display = "none";
    proj5Content.style.opacity = "0";
    proj5Content.style.backgroundColor = "transparent";
  }
  if (getScrollXY()[0] > proj5lowerLimit && getScrollXY()[0] < proj5upperLimit) {
    proj5Content.style.display = "flex";
    proj5Content.style.opacity = "1";
    // proj5Content.style.backgroundColor = "white";

    proj5Content.style.background = " linear-gradient(135deg, white 10%, red 350%)";
  }
  
  var arrowupperLimit = window.innerWidth * 12;
  var arrowContent = this.document.getElementById("down-arrow");
  
  if (getScrollXY()[0] > arrowupperLimit) {
    arrowContent.style.position = "absolute";
  }
  else{ 
    arrowContent.style.position = "fixed";

  }
  

});
