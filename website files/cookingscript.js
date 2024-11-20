function openRecipe(evt, recipeName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("recipes");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" selected-tab", "");
    }
    document.getElementById(recipeName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " selected-tab";
  }
  document.getElementById("myLink").click();

  $("p").addClass("para-text")
  $("h1").addClass("para-text")


  $("#generate").on("click", function(){

   let subscriberName = $('#fullName').val()
   alert (`Thank you ${subscriberName} you are now part of the A Positive Place Community`)
    

})