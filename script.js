console.log("HELLO");

const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnFour = document.getElementById("btn-four");

const btnWrapper = document.getElementsByClassName(
  "btn-menu-product-container"
);

// Add EventListener btn
// BTN 1
btnOne.addEventListener("click", function () {
  // Active Button 1
  const btn = btnWrapper[0].children[0];
  $(btn).addClass("active");

  // Remove class active in btn 2, 3, 4
  const btnTwo = btnWrapper[0].children[1],
    btnThree = btnWrapper[0].children[2],
    btnFour = btnWrapper[0].children[3];
  $(btnTwo).removeClass("active");
  $(btnThree).removeClass("active");
  $(btnFour).removeClass("active");
});

// BTN 2
btnTwo.addEventListener("click", function () {
  // Active Button 2
  const btn = btnWrapper[0].children[1];
  $(btn).addClass("active");

  // Remove class active in btn 1, 3, 4
  const btnOne = btnWrapper[0].children[0],
    btnThree = btnWrapper[0].children[2],
    btnFour = btnWrapper[0].children[3];
  $(btnOne).removeClass("active");
  $(btnThree).removeClass("active");
  $(btnFour).removeClass("active");
});

// BTN 3
btnThree.addEventListener("click", function () {
  // Active Button 3
  const btn = btnWrapper[0].children[2];
  $(btn).addClass("active");

  // Remove class active in btn 1, 2, 4
  const btnOne = btnWrapper[0].children[0],
    btnTwo = btnWrapper[0].children[1],
    btnFour = btnWrapper[0].children[3];
  $(btnOne).removeClass("active");
  $(btnTwo).removeClass("active");
  $(btnFour).removeClass("active");
});

// BTN 4
btnFour.addEventListener("click", function () {
  // Active Button 4
  const btn = btnWrapper[0].children[3];
  $(btn).addClass("active");

  // Remove class active in btn 1, 2, 3
  const btnOne = btnWrapper[0].children[0],
    btnTwo = btnWrapper[0].children[1],
    btnThree = btnWrapper[0].children[2];
  $(btnOne).removeClass("active");
  $(btnTwo).removeClass("active");
  $(btnThree).removeClass("active");
});
