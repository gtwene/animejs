var onClickRedbox = document.getElementById("redbox");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

span.addEventListener("click", function () {
  anime({
    targets: "div.box.red",

    // left: "1000px",
    translateY: (-1000, 650),

    translateX: (-1000, 1200),

    scale: 0.5,
    backgroundColor: "#C23214 ",
    borderRadius: ["0", "50%"],
    easing: "easeInOutQuad",
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
