function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}

document.querySelector('.nocturno').addEventListener('click', function () {
  const icon = this.querySelector('i');

  if (icon.classList.contains('fa-sun')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

function domicilio() {
  var x = document.getElementById("dom");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  