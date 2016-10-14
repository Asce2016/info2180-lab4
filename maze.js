window.onload = function(){



  var boundaryone = document.getElementById("boundary1");
   boundaryone.addEventListener("mouseover",changecolour);


    function changecolour(){
      document.getElementById("boundary1").setAttribute ("class","boundary youlose");
    }







var boundaries = document.querySelectorAll(".boundary");
  for (var i = 0; i < boundaries.length; i++){
  boundaries[i].onmouseover = overBoundary;

}


function overBoundary(){
  var boundaries = document.querySelectorAll(".boundary");
  for (var i = 0; i < boundaries.length; i++){
    boundaries[i].setAttribute("class", "boundary youlose");
  }

}


}
