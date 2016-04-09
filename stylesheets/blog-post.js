$(document).ready(function(){

  var backgroundIcons = {
    previous: "../imgs/icons/previous.png",
    next: "../imgs/icons/next.png"
  }

  var posts = [
     "git.html",

    "css-concepts.html",

    "arrays-hashes.html",

    "enumerable-methods.html",

    "ruby-classes.html",

     "javascript.html",

    "tech.html",

    "blogging.html",
  ];


var size = Object.keys(posts).length;

  var current_page = window.location.pathname
    for(var i = 0; i < size; i++){
      if(current_page === ("/blog/" + posts[0])){
        $("#previous").css("display","none");
      }
      if(current_page === "/blog/"+ posts[size-1]){
        $("#next").css("display","none");
        var previous = posts[i-1];
      }
      else if (current_page === ("/blog/"+ posts[i])){
        var next = posts[i+1];
        var previous = posts[i-1];
      }
    };

$("#next").children("a").attr("href", next);
$("#previous").children("a").attr("href", previous);

});