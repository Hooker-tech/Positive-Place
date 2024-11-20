function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }



//This is for the overlay
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  
  //This is for the alert for music newsletter 
  $("#music-newsletter").on("click", function(){

    let subscriberName = $('#fname').val()
    alert (`Thank you ${subscriberName} you are now part of the A Positive Place Community newsletter`)
 })


   //This is for the alert of fashion subscribe
   $(".fashion-subscribe").on("click", function(){

    let subscriberName = $('#user').val()
    alert (`Thank you ${subscriberName} you are now part of the A Positive Place Community fashion family`)
 })


 
 
  //This is for the alert for log-in 
  $("#generate-alert").on("click", function(){

    let subscriberName = $('#fullName').val()

    let message = `Welcome ${subscriberName} to our family, we hope that we can provide you a happy place to hang out! Enjoy your journey!`
    document.getElementById("welcome").innerText = message
 })

