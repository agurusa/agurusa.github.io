 // Design Basic Game Solo Challenge

// This is a solo challenge

// Mission description:
// Overall mission:
// You must keep your puppy alive long enough that it becomes a dog.

// Goals:
// -Feed the puppy enough times a day
// -Take the puppy on walks
// -Play with the puppy
// -Train the puppy
// -Do not let the puppy run away
// -Do not let the puppy get attacked by another puppy

// Characters:

// -Other puppy
// -Puppy

// Objects:

// -Other puppy
// -Puppy(full tummy, bathroom, happiness, intelligence, health)

// Functions:
// -feed
// -walk
// -play
// -train
// -yell

// // Pseudocode
// -declare a puppy object that has all the puppy properties.
// -have all of those properties decrease over time.
//   -IF health is all the way down
//     -puppy dies
//   -IF happiness is all the way down
//     -puppy runs away
//   -IF full tummy or bathroom is all the way down
//     -happiness goes down faster
//   -IF intelligence is all the way down
//     -puppy is too dumb to listen when you yell

// -when you yell at the puppy
//   -happiness goes down
//   -puppy won't run away

// -when you feed the puppy, have the full tummy go back up.
// -when you walk the puppy, have the bathroom go back up.
// -when you play with the puppy, have happiness go back up.
// -when you train the puppy, have intelligence go back up.


// -when the puppy plays with other puppy:
//   -IF other puppy attacks:
//     -make health go down
//   -ELSE:
//     -make happiness go up



// Initial solution:
// var puppy = {
//   full: 15,
//   bathroom: 15,
//   happiness: 100,
//   intelligence: 100,
//   health: 100,
// }

// var interval;

// function lifetime(){
//   puppy.full = 15;
//   puppy.bathroom =15;
//   puppy.happiness = 100;
//   puppy.intelligence = 100;
//   puppy.health = 100;
//   overTime();
// }

// function overTime(){
//   interval = setInterval(decreaseProps, 1000);
// }

// function decreaseProps(){
//   instructions();
//   saySomething();

//   puppy.full -= 1;
//   var elem = document.getElementById("full");
//   elem.style.width = ((puppy.full).toString()) + "px";

//   puppy.bathroom -=1;
//   var elem = document.getElementById("bathroom");
//   elem.style.width = ((puppy.bathroom).toString()) + "px";

//   puppy.happiness -=1;
//   var elem = document.getElementById("happiness");
//   elem.style.width = ((puppy.happiness).toString()) + "px";

//   puppy.intelligence -=1;
//   var elem = document.getElementById("intelligence");
//   elem.style.width = ((puppy.intelligence).toString()) + "px";

//   puppy.health -= 0.5;
//   var elem = document.getElementById("health");
//   elem.style.width = ((puppy.health).toString()) + "px";


//   if (puppy.happiness <= 0){
//     runAway();
//   }
//   else if (puppy.health <= 0){
//     death();
//   }
//   else if (puppy.full <= 0 || puppy.bathroom <= 0){
//     puppy.happiness -= 5;
//     puppy.health -= 8;
//   }
//   else if (puppy.intelligence <= 0){
//     var message = document.getElementById('message');
//   message.textContent = "Your puppy is too dumb to listen to you anymore.";
//   }

// }

// function pause(){
//   clearInterval(interval)
// }

// function instructions(){
//   var message = document.getElementById('message');
//   var feedback = document.getElementById('feedback');
//   message.textContent = "Take care of puppy. It loves you. Puppy will use this area to tell you what it needs.";
//   feedback.textContent = "But beware, puppy can be a little salty sometimes.";
// }

// function runAway(){
//   var message = document.getElementById('message');
//   message.textContent = "Your puppy ran away! Game over.";
//   pause();
// }

// function death(){
//   var message = document.getElementById('message');
//   message.textContent = "Your puppy's health was too low! It died :(";
//   pause();
// }


// function feed(food){
//   puppy.full +=5;
//   if (food === "treats"){
//     puppy.happiness +=5;
//     puppy.health -= 2;
//   }
// }

// function walk(){
//   puppy.bathroom +=5;
//   puppy.happiness +=5;
// }

// function play(){
//   puppy.happiness +=5;
// }

// function train(){
//   puppy.intelligence +=5;
// }

// function yell(){
//   puppy.happiness -=3;
//   if (puppy.happiness <=0){
//     runAway();
//   }
// }

// function vet(){
//   puppy.happiness -=5;
//   puppy.health += 5;
// }

// var otherPuppy = ["good mood", "bad mood"];

// function socialize(){
//   var message = document.getElementById('socialize');
//   var feedback = document.getElementById('socialize-feedback');
//   message.textContent = "So you want to play with neighborhood dog Gus? Beware, sometimes he's not in the best of moods..."
//   var index = (Math.round(Math.random()));
//   var puppyMood = otherPuppy[index];

//   if (puppyMood === "bad mood"){
//     puppy.happiness -=3;
//     puppy.health -=3;
//     feedback.textContent = "Gus was in the worst mood ever! He attacked me!!";
//     feedback.style.color = "#ff3399";
//   }

//   else{
//     puppy.happiness +=7;
//     feedback.textContent = "Gus was in such a good mood. We played all day.";
//     feedback.style.color = "#ff3399";
//   }

// }

// function saySomething(){
//   var message = document.getElementById('sub-feedback');

//   if (puppy.full <= 10){
//     message.textContent = "Feed me, you fool!";
//     message.style.color = "#ff3399";
//   }

//   else if (puppy.bathroom <=10){
//     message.textContent = "Walk me, or I will pee in your favorite shoe."
//     message.style.color = "#ff3399";
//   }

//   else if (puppy.happiness <=10){
//     message.textContent = "I'm going to run away soon...better try and stop me...";
//     message.style.color = "#ff3399";
//   }

//   else{
//     message.textContent = "I love you, human.";
//     message.style.color = "#339966";
//   }
// }


// Refactored Code
var puppy = {
  full: 15,
  bathroom: 15,
  happiness: 100,
  intelligence: 100,
  health: 100,
}

var interval;

function lifetime(){
  puppy.full = 15;
  puppy.bathroom =15;
  puppy.happiness = 100;
  puppy.intelligence = 100;
  puppy.health = 100;
  overTime();
}

function overTime(){
  interval = setInterval(decreaseProps, 1000);
}

function decreaseProps(){
  instructions();
  saySomething();

  puppy.full -= 1;
  var elem = document.getElementById("full");
  elem.style.width = ((puppy.full).toString()) + "px";

  puppy.bathroom -=1;
  var elem = document.getElementById("bathroom");
  elem.style.width = ((puppy.bathroom).toString()) + "px";

  puppy.happiness -=1;
  var elem = document.getElementById("happiness");
  elem.style.width = ((puppy.happiness).toString()) + "px";

  puppy.intelligence -=1;
  var elem = document.getElementById("intelligence");
  elem.style.width = ((puppy.intelligence).toString()) + "px";

  puppy.health -= 0.5;
  var elem = document.getElementById("health");
  elem.style.width = ((puppy.health).toString()) + "px";


  if (puppy.happiness <= 0){
    runAway();
  }
  else if (puppy.health <= 0){
    death();
  }
  else if (puppy.full <= 0 || puppy.bathroom <= 0){
    puppy.happiness -= 5;
    puppy.health -= 8;
  }
  else if (puppy.intelligence <= 0){
    var message = document.getElementById('message');
  message.textContent = "Your puppy is too dumb to listen to you anymore.";
  }

}

function pause(){
  clearInterval(interval)
}

function instructions(){
  var message = document.getElementById('message');
  var feedback = document.getElementById('feedback');
  message.textContent = "Take care of puppy. It loves you. Puppy will use this area to tell you what it needs.";
  feedback.textContent = "But beware, puppy can be a little salty sometimes.";
}

function runAway(){
  var message = document.getElementById('message');
  message.textContent = "Your puppy ran away! Game over.";
  pause();
}

function death(){
  var message = document.getElementById('message');
  message.textContent = "Your puppy's health was too low! It died :(";
  pause();
}


function feed(food){
  puppy.full +=5;
  if (food === "treats"){
    puppy.happiness +=5;
    puppy.health -= 2;
  }
}

function walk(){
  puppy.bathroom +=5;
  puppy.happiness +=5;
}

function play(){
  puppy.happiness +=5;
}

function train(){
  puppy.intelligence +=5;
}

function yell(){
  puppy.happiness -=3;
  if (puppy.happiness <=0){
    runAway();
  }
}

function vet(){
  puppy.happiness -=5;
  puppy.health += 5;
}

var otherPuppy = ["good mood", "bad mood"];

function socialize(){
  var message = document.getElementById('socialize');
  var feedback = document.getElementById('socialize-feedback');
  message.textContent = "So you want to play with neighborhood dog Gus? Beware, sometimes he's not in the best of moods..."
  var index = (Math.round(Math.random()));
  var puppyMood = otherPuppy[index];

  if (puppyMood === "bad mood"){
    puppy.happiness -=3;
    puppy.health -=3;
    feedback.textContent = "Gus was in the worst mood ever! He attacked me!!";
    feedback.style.color = "#ff3399";
  }

  else{
    puppy.happiness +=7;
    feedback.textContent = "Gus was in such a good mood. We played all day.";
    feedback.style.color = "#ff3399";
  }

}

function saySomething(){
  var message = document.getElementById('sub-feedback');

  if (puppy.full <= 10){
    message.textContent = "Feed me, you fool!";
    message.style.color = "#ff3399";
  }

  else if (puppy.bathroom <=10){
    message.textContent = "Walk me, or I will pee in your favorite shoe."
    message.style.color = "#ff3399";
  }

  else if (puppy.happiness <=10){
    message.textContent = "I'm going to run away soon...better try and stop me...";
    message.style.color = "#ff3399";
  }

  else{
    message.textContent = "I love you, human.";
    message.style.color = "#339966";
  }
}





// Reflection
//
//What was the most difficult part of this challenge?
// I had a ton of trouble figuring out how to use the setInterval function. It took a lot of time to understand that there was a separate function to start it, set the time, and end it.

// What did you learn about creating objects and functions that interact with one another?
// I actually didn't have too much trouble getting my objects to interact. I used conditionals to make sure they interacted under certain conditions. I also ran into some error messages that were cyclical (if one object called on the other, the other object would call back on the original...) because of errors in logic.

// Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?

// I had a lot of trouble refactoring because I couldln't figure out how to call on my html objects using anything other than .getElementById. I tried .getElementsByClassName, and it just wouldn't work. I couldn't figure out the intricacies of calling multiple elements at once, and that would have really helped the refactoring process.

// How can you access and manipulate properties of objects?
// I accessed and manipulated most of the properties using:
//  object.property = "Whatever it should equal"
//
//
//
//
//