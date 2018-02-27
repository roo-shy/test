// Loops

for(var i = "#"; i.length <= 7; i+="#")
  console.log(i);
  /*
  #
  ##
  ###
  ####
  #####
  ######
  #######
  */
  
  for(var i=1; i <= 100; i++) {
    var word = "";
    if(i % 3 == 0)
     word += "Fizz"; 
    if (i % 5 == 0)
      word += "Buzz";
    console.log(word || i);
    else
     word += "FizzBuzz";
  };