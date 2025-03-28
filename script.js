document.getElementById("button1").addEventListener("click", function() {
    alert("Button 1 pressed!");
});

document.getElementById("button2").addEventListener("click", function() {
    alert("Button 2 pressed!");
});

document.getElementById("watch-face").addEventListener("touchstart", function(event) {
    console.log("Touch started!");
});
