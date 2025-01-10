function toggleModal() {
    const modal = document.getElementById('modal-nav');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }

  window.onclick = function (event) {
    const modal = document.getElementById('modal-nav');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Получаем все ссылки, начинающиеся с "#"
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const targetId = this.getAttribute('href').substring(1); // Получаем идентификатор элемента
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});