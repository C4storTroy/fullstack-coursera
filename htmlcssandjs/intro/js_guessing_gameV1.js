//declaration of global variables and array for colors - set initial values
var color_index;
var guesses = 1;
//An array of colors in out of alphabetical order
var colors = [ "gold", "cyan", "gray", "green", "magenta", "orange", "red", "white", "yellow", "blue"];
//Organize Colors in Alphabetical Order
var colors = colors.sort();

var colors_message = colors.join();
var guess_input_text = "none";
var guess_input;
var finished = false;

function do_game() {
  var random_number = Math.random() * (colors.length - 1);
  var random_number_integer = Math.floor(random_number);
  color_index = random_number_integer;
  var color_answer = String(colors[random_number_integer]);
  //Correct answer
  alert("The correct answer is: " + color_answer);

  while (!finished) {
    guess_input_text = prompt("I am thinking of one of these colors:\n\n" +
    colors_message + "\n\n What color am I thinking of?").toLowerCase();
    guess_input = colors.indexOf(guess_input_text);
    if(guess_input == color_index)
      finished = true;
  }
}
