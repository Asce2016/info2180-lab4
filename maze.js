window.onload = function(){


  
  var boundaryone = document.getElementById("boundary1");
   boundaryone.addEventListener("mouseover",changecolour);


    function changecolour(){
      document.getElementById("boundary1").setAttribute ("class","boundary youlose");
    }
}
