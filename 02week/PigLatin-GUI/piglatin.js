var pigLatin = function(input) {

  var firstLetter = input.slice(0, 1);
  var firstTwoLetters = input.slice(0, 2);
  var firstThreeLetters = input.slice(0, 3);
  var vowels = ["a", "e", "i", "o", "u"];
  var digraphs = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
  var trigraphs = ["nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];

  if (vowels.indexOf(firstLetter) > -1) {

    input = input + "ay";

  } else if (trigraphs.indexOf(firstThreeLetters) > -1) {

    input = input.slice(3) + firstThreeLetters + "ay";

  } else if (digraphs.indexOf(firstTwoLetters) > -1) {

    input = input.slice(2) + firstTwoLetters + "ay";

  } else {

    input = input.slice(1) + firstLetter + "ay";
  }

  return input;
};

var sentenceMill = function(input) {

  var splitString = input.split(/\s*\b\s*/);
  var output = "";
  var punctuation = [",", ".", "!", "?", ";", ":", "'", '"'];
  for (var string of splitString) {
    if (!(punctuation.indexOf(string) > -1)) {

      var pigString = pigLatin(string);
      output = output + pigString + " ";
    } else {
      output = output.slice(0, -1) + string + " ";
    }
  }
  var finOutput = output.slice(0, -1);

  return finOutput;

};

$(document).ready(function() {

  $("form#pigLatin").submit(function(event) {

    var phrase = $("input#phrase").val();

    var result = sentenceMill(phrase);

    $("#result p").text(result);

    $("#result").show();
    event.preventDefault();
  });
  

});