var onClickRedbox = document.getElementById("redbox");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("minimize")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

var modalID = document.getElementById("modalId");

var hidebtn = document.getElementById("hidden");
hidebtn.style.display = "none";

// hidebtn.onclick = function () {
//   modal.style.display = modal;
// };

// close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

span.addEventListener("click", function () {
  anime({
    targets: "div.modal.box",

    // left: "1000px",
    translateY: (-500, 400),

    translateX: (-500, 300),

    scale: 0.25,
    backgroundColor: "#aba5a4 ",

    easing: "easeInOutQuad",
  });

  anime({
    targets: "div.modal.box",
    width: "130%",

    loop: false,
  });
  console.log("active");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
