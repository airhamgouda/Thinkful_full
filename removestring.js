function removeExclamationMarks(s) {
  var answer = "";
  var click = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "!") {
    //click++;
    //console.log(click);
      } else if (i = 0) {
      answer = s[i];
     } else {
      answer = answer + " " + s[i];
      }
  }
  return answer;
}
