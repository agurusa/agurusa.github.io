
$(document).ready(function(){

      $(".transition > li").each(function(index){
        $(this).delay(300*index).fadeIn("slow");
      });

      $(".transition > li").on("mouseover", function(){
        $(this).css("background-image", "none");
        $(this).children("a").css("color", "#1b1221");
      });

      $(".project > li").on("mouseover", function(){
        $(this).css("background-image", "none");
        $(this).children("a").css("color", "#1b1221");
      });


    var backgroundIcons = {
      first: "../imgs/Logo_2.png",
      second: "../imgs/icons/about.png",
      third: "../imgs/icons/blog.png",
      fourth: "../imgs/icons/projects.png",
      resume: "../imgs/icons/resume.png",
      contact: "../imgs/icons/contact.png",
      contact_main: "../imgs/icons/contact.png",
      resume_main: "../imgs/icons/resume.png",
      // projects
      game: "../projects/game/pup.png",
      cheetsheet: "../projects/javascript.jpg",
      grocery: "../projects/grocery_list/screenshot.png",
      github: "../imgs/icons/projects.png",
      // blog
      git: "imgs/github-cat.png",
      css: "imgs/ohhaielements.png",
      hash: "imgs/feelthebern.png",
      enumerable: "imgs/money.png",
      classes: "imgs/unicorn.png"

    };

    $(".transition > li").on("mouseout", function(){
      $(this).css("background-image", "url("+ backgroundIcons[this.id]+")");
      $(this).children("a").css("color", "transparent") ;
    });

    $(".project > li").on("mouseout", function(){
      $(this).css("background-image", "url("+ backgroundIcons[this.id]+")");
      $(this).children("a").css("color", "transparent") ;
    });

})