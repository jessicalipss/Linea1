  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      projectItems.forEach(i => i.classList.remove('expanded'));
      item.classList.add('expanded');
    });
  });

  document.querySelector('.project-column-gallery').addEventListener('mouseleave', () => {
    projectItems.forEach(i => i.classList.remove('expanded'));
    projectItems[0].classList.add('expanded');
  });


  const toggleBtn = document.getElementById('searchToggle');
  const searchForm = document.getElementById('searchForm');

  toggleBtn.addEventListener('click', () => {
    searchForm.classList.toggle('d-none');
  });

