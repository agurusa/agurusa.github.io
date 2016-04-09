
$(document).ready(function(){

// mediaqueryresponse(mql);
// mql.addListener(mediaqueryresponse);

// var mql = window.matchMedia("screen and (max-device-width: 800px)");

// function mediaqueryresponse(mql){
//   if (mql.matches){
      $(".transition > li").each(function(index){
        $(this).delay(300*index).fadeIn("slow");
      });


      $("li").on("mouseover", function(){
        $(this).css("background-image", "none");
        $(this).children("a").css("color", "#1b1221");
      });


    var backgroundIcons = {
      first: "imgs/Logo_2.png",
      second: "imgs/icons/about.png",
      third: "imgs/icons/blog.png",
      fourth: "imgs/icons/projects.png",
      resume: "imgs/icons/resume.png",
      contact: "imgs/icons/contact.png",
      contact_main: "imgs/icons/contact.png",
      resume_main: "imgs/icons/resume.png",
      call:"imgs/icons/contact.png",
      email:"imgs/icons/email.png",
      linkedin:"imgs/icons/linkedin.png",
      github:"imgs/icons/projects.png"
    };


    $("li").on("mouseout", function(){
      $(this).css("background-image", "url("+ backgroundIcons[this.id]+")");
      $(this).children("a").css("color", "transparent") ;
    });


//     else{
//       $(".transition > li").each(function(index){
//       $(this).delay(300*index).fadeIn("slow");
//     });
//   }
// }

})