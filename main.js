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

hidebtn.onclick = function () {
  modal.style.display = modal;
};

// close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

var hideShow;
hidebtn.addEventListener("click", function () {
  if (hideShow == 1) {
    modal.style.display = "inline";

    return (hideShow = 0);
  } else {
    modal.style.display = "none";

    return (hideShow = 1);
  }
});

// modalID.addEventListener("click", show());

span.addEventListener("click", function () {
  anime({
    targets: "div.modal.box",

    // left: "1000px",
    translateY: (-100, 60),

    translateX: (-100, 150),

    scale: 0.25,
    backgroundColor: "#aba5a4 ",
    // borderRadius: ["0", "50%"],
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
