document.querySelector(".first").addEventListener('click', function(){
  Swal.fire("Our First Alert");
});

document.querySelector(".second").addEventListener('click', function(){
  Swal.fire("Our First Alert", "With some body text!");
});

document.querySelector(".third").addEventListener('click', function(){
  Swal.fire("Our First Alert", "With some body text and success icon!", "success");
});
