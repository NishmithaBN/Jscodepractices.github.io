
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The search() Method</h2>

<p>The search() method returns the position of the first occurrence of a string in a string.</p>
<p>The position of the first occurrence of "locate" is:</p>
<p id="demo"></p>

<script>
let text = "Please locate where 'locate' occurs!";
let index = text.search("locate");
document.getElementById("demo").innerHTML = index; 
</script>

</body>
</html>