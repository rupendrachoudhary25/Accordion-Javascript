var icons = document.querySelectorAll('.accord h1 i');

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function (event) {
    var icon = this;
    var content = icon.parentElement.nextElementSibling;

    if (content.classList.contains('active')) {
      content.classList.remove('active');
      icon.classList.remove('fa-square-minus');
      icon.classList.add('fa-square-plus');
    } else {
      var activeContent = document.querySelector('.accord p.active');
      if (activeContent) {
        activeContent.classList.remove('active');
        var activeIcon = activeContent.previousElementSibling.querySelector('i');
        activeIcon.classList.remove('fa-square-minus');
        activeIcon.classList.add('fa-square-plus');
      }
      content.classList.add('active');
      icon.classList.remove('fa-square-plus');
      icon.classList.add('fa-square-minus');
    }
    event.stopPropagation();
  });
}