
document.addEventListener("DOMContentLoaded", function() {
  var height = window.innerHeight;
 

  window.addEventListener("scroll", function(){
    var x;
    var difference;
    var topCoordinate = document.getElementById("home").getBoundingClientRect().top * (-1);
    
    difference = height - topCoordinate;
    x = 20/difference;

    width = 10 + x - topCoordinate;

    width += "%";
    
    //console.log(width)
    if (document.body.scrollTop < document.getElementById("home").getBoundingClientRect().height || document.documentElement.scrollTop < document.getElementById("home").getBoundingClientRect().height){
      console.log("works");
      document.getElementById("logo").style.width = width;  
    }
  });

  document.getElementById("logo").addEventListener("click", function(){
    if(document.getElementById("mySidenav").style.width == "0px"){
      document.getElementById("mySidenav").style.width = "30%";
    }
    else{
      document.getElementById("mySidenav").style.width = "0px";
    }
  });

  var animateLogo = function() {
      var logo;
      var windowHeight;
      function init() {
        logo = document.querySelector('#logo');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
      }
      function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
      }
      function checkPosition() {
          var positionFromTop = logo.getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= 0) {
            logo.className = logo.className.replace(
              'hidden',
              'zoomOut'
            );
          }
        }
      
      return {
        init: init
      }
    }
    
  animateLogo().init();

  
  
  var arrows = document.getElementsByClassName('down');
  
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(){
      window.scrollBy(0, height);
    });
  }

  function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("doodle1").innerHTML = this.responseText;
      
        }
      };
      xhttp.open("GET", "", true);
      xhttp.send();
  }


});