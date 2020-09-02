//Getting the intiail Y offset
const initialYOffset = window.pageYOffset;

//scrolling function for social button
window.onscroll = () => {
  //Getting current position
  let currentPos = window.pageYOffset;

  if (currentPos == initialYOffset) {
    document.getElementById("social__scroll").style.display = "none";
  } else {
    document.getElementById("social__scroll").style.display = "flex";
  }
};
