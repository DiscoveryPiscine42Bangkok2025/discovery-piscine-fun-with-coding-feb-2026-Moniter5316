//start
let size_balloon = 200;
let colors = ['red', 'green', 'blue'];
let color_index = 0;

const balloon = document.getElementById('balloon');

balloon.addEventListener("click", 
    function() {
  size_balloon += 10; 
  if (size_balloon > 420) {
    size_balloon = 200; 
  }
  balloon.style.width = size_balloon + "px";
  balloon.style.height = size_balloon + "px";

  
  color_index = (color_index + 1) % colors.length;
  balloon.style.backgroundColor = colors[color_index];
});

balloon.addEventListener("mouseleave", function() {
  size_balloon -= 5; 
  if (size_balloon < 200) {
    size_balloon = 200; 
  }
  balloon.style.width = size_balloon + "px";
  balloon.style.height = size_balloon + "px";

  
  color_index = (color_index - 1 + colors.length) % colors.length;
  balloon.style.backgroundColor = colors[color_index];
});

