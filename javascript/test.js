function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
}

document.querySelector('button').addEventListener('click', function() {
    const icon = this.querySelector('i');
  
    if (icon.classList.contains('fa-sun')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });