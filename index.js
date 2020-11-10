function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length===0) {
   // console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!";
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + line.shift()+".";
  }
}

function currentLine(line){
  if(line.length===0) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
 // console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}