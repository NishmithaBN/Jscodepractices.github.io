//<!DOCTYPE html>
//<html>
//<body>

//<h1>JavaScript Strings</h1>
//<p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string.</p>

//<p id="demo"></p>

<script>
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

document.getElementById("demo").innerHTML =
answer1 + "" + answer2 + "" + answer3; 
</script>
