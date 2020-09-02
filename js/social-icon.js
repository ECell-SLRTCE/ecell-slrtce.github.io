//Getting the cprevious position
const prevScrollpos = window.pageYOffset;

//scrolling function for social button
window.onscroll = ()=>{
    //Getting current position
    let currentPos = window.pageYOffset;

    if (currentPos == prevScrollpos){
      document.getElementById("social__scroll").style.display = "none";
    } else {
      document.getElementById("social__scroll").style.display = "flex";
    }
    prevScrollpos = currentPos;
  }