function tribonacci(signature,n){
    var newArr = []; // Create a new array for result to be kept in
    newArr.push((signature[0]), (signature[1]), (signature[2])); //Add the signature to the first 3 of the newArr
    var timer = n - 3; //How long the for loop will run
 for (var i = 0; i < timer; i++) { //Loop for as many ticks as n
    var next = newArr.slice(-3);    //Last 3
    var result = next[0] + next[1] + next[2]; //Add last 3 together
    newArr.push(result); // new number to newArr

    //Degug section
    console.log("Signature: " + signature);
    console.log("newArr: " + newArr);
    console.log("next: " + next);
  }

  if (n == 0) {
    return []; } else if (n == 1) {
    return [1];} else {
        return newArr; //Return result
  }
