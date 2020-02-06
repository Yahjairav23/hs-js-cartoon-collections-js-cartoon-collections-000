
function dwarfRollCall(dwarves) {
  var line = []
  for (var x = 0; x < dwarves.length; x++) {
    line.push([x+1] + `. ` + dwarves[x] + ` `);
  }
  line = line.join('')
  /* .join(), with nothing in parenthesis automatically puts comma between each string. the way I wrote it puts no space between the strings, but I put the space within the .push code*/
  return line
}




function summonCaptainPlanet(planeteerCalls) {
  var strong = [] ;
  //strong had to be within the function to not mess up the order. scope.
  var i = 0 ;
  while (i < planeteerCalls.length) {
    strong.push(planeteerCalls[i].toUpperCase() + `!`);
    i++
  }
  return strong
}


function longPlaneteerCalls(words) {
   return words.length > 4
 /* this is a boolean, therefore it will return "true" if statement is true 
 and false if statement is false*/
}


function findTheCheese (foods) {
  var cheeseTypes = ["cheddar", "gouda", "camambert"]
  if (foods.includes(cheeseTypes[0])) {
    return cheeseTypes[0]
  }
  else if (foods.includes(cheeseTypes[1])) {
    return cheeseTypes[1]
  }
  else if (foods.includes(cheeseTypes[2])) {
    return cheeseTypes[2]
  }
  else {
    return "no cheese!"
  }
}
