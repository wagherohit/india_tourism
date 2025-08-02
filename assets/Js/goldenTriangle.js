
  const readMoreBtn = document.getElementById('readMore');
  const readLessBtn = document.getElementById('readLess');
  const hiddenContent = document.getElementById('hiddenContent');

  readMoreBtn.addEventListener('click', () => {
    hiddenContent.style.display = 'block';
    readMoreBtn.style.display = 'none';
  });

  readLessBtn.addEventListener('click', () => {
    hiddenContent.style.display = 'none';
    readMoreBtn.style.display = 'block';
  });

