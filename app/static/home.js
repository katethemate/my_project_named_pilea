document.addEventListener("DOMContentLoaded", function() {

  window.addEventListener("scroll", function(){
    var height = window.innerHeight;
    var fromtop = document.getElementById("scenario1").getBoundingClientRect().top * (-1);
    
    var difference = height - fromtop;
    var x = (difference/height*100)-70 ;
    var y = (difference/height*100)-75;
    var z = (difference/height*100)-65;

    var top = y + "vh";
    var width = x + "vw";
    var left = z + "vw";
    


    
    if (fromtop <= height){
      if (x>10){
        document.getElementById("logo").style.width = width;
      }else{
        document.getElementById("logo").style.width = "10vw";
      }
      if (y>3){
        document.getElementById("logo").style.top = top;
      }else{
        document.getElementById("logo").style.top = "3vh";
      }
      if (z>3){
        document.getElementById("logo").style.left = left;
      }else{
        document.getElementById("logo").style.left = "3vw";
      }
    }else if(fromtop == height){
      document.getElementById("logo").style.width = "30vw";
      document.getElementById("logo").style.top = "25vh";
      document.getElementById("logo").style.left = "35vw";
    }
    else{
      document.getElementById("logo").style.width = "10vw";
      document.getElementById("logo").style.top = "3vh";
      document.getElementById("logo").style.left = "3vw";
    }
  });

  document.getElementById("logo").addEventListener("click", function(){
    if(document.getElementById("mySidenav").style.width == "0px"){

      if (window.innerWidth<=500){
        document.getElementById("mySidenav").style.width = "50vw";
        document.getElementById("slidedownright").style.height = "0%";
        document.getElementById("slidedownleft").style.height = "0%";
        document.querySelector("body").classList.remove("stop-scrolling");
      }else{
        document.getElementById("mySidenav").style.width = "30vw";
        document.getElementById("slidedownright").style.height = "0%";
        document.getElementById("slidedownleft").style.height = "0%";
        document.querySelector("body").classList.remove("stop-scrolling");
      }
    }
    else{
      document.getElementById("mySidenav").style.width = "0px";
    }
  });


  var doodleones = document.getElementsByClassName("doodle1");
  for (var i = 0; i < doodleones.length; i++) {
    doodleones[i].addEventListener('click', function(){
      document.getElementById("slidedownleft").style.height = "100%";
      document.getElementById("slidedownright").style.height = "0%";
      document.getElementById("mySidenav").style.width = "0px";
      document.querySelector("body").classList.add('stop-scrolling');
    });
  }

  var leftlines = document.getElementsByClassName("leftlines");
  for (var i = 0; i < leftlines.length; i++) {
    leftlines[i].addEventListener("click", function(){
      document.getElementById("slidedownleft").style.height = "0%";
      document.querySelector("body").classList.remove("stop-scrolling");
    });
  }

  var doodletwos = document.getElementsByClassName("doodle2");
  for (var i = 0; i < doodletwos.length; i++) {
    doodletwos[i].addEventListener("click", function(){
      document.getElementById("slidedownright").style.height = "100%";
      document.getElementById("slidedownleft").style.height = "0%";
      document.getElementById("mySidenav").style.width = "0px";
      document.querySelector("body").classList.add('stop-scrolling');
  });
  }

  var rightlines = document.getElementsByClassName("rightlines");
  for (var i = 0; i < rightlines.length; i++) {
    rightlines[i].addEventListener("click", function(){
      document.getElementById("slidedownright").style.height = "0%";
      document.querySelector("body").classList.remove("stop-scrolling");
  });
  }

  var arrows = document.getElementsByClassName('down');
  
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(){
      var height = window.innerHeight;
      var fromtop = document.getElementById("scenario1").getBoundingClientRect().top * (-1);
      if (fromtop%height==0){
        window.scrollBy(0, height);
      }else{
        var x = Math.ceil(fromtop/height)+1;
        var id = "scenario"+x;
        document.getElementById(id).scrollIntoView();
      }
    });
  }

  var uparrows = document.getElementsByClassName('up');
  for (var i = 0; i < uparrows.length; i++) {
    uparrows[i].addEventListener('click', function(){
      var height = window.innerHeight;
      var fromtop = document.getElementById("scenario1").getBoundingClientRect().top * (-1);
      if (fromtop%height==0){
        window.scrollBy(0, -height);
      }else{
        var x = Math.ceil(fromtop/height);
        var id = "scenario"+x;
        document.getElementById(id).scrollIntoView();
      }
    });
  }


  //i tried out to load my pictures with ajax however it doesn't make sense together with the macro structure i have 

  /*if(fromtop%height!=0){
    var height = window.innerHeight;
    var fromtop = document.getElementById("scenario1").getBoundingClientRect().top * (-1);
    var section = Math.ceil(fromtop/height)+1;
    var doodlenum = section-2;
    var doodleones = document.getElementsByClassName("doodle1")
    if(section==3){
      $('#doole11').html('<img class="doodle doodle1" width="10%"  alt="a doodle" onmouseover="this.src='/static/off1.png'" onmouseout="this.src='/static/off2.png'" src="/static/off1.png">');

    }
  }*/

});