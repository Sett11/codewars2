Function.prototype.wrap=function(func){
   let x=this
   return function(a,b){
      return func(x,a,b)
   }
}

function speak(name){
   return "Hello " + name;
}

speak = speak.wrap(function(original, yourName, myName){
   let greeting = original(yourName);
   return greeting + ", my name is " + myName;
})

let greeting = speak("Mary", "Kate");

console.log(greeting)