var body = document.querySelector("body");
body.addEventListener("wheel", function (e) {
    // e.preventDefault(); 
  if (e.deltaY > 0) {
    window.scrollBy(100, 0);
} else {
    window.scrollBy(-100, 0);
  }
});


