const loader = document.getElementById('loader');
const errorMessage = document.getElementById('errorMessage');
const retryButton = document.getElementById('retryButton');
const loadingContainer = document.getElementById('loadingContainer');

let errorTimeout = setTimeout(showError, 60000); // 1 minuto

function showError() {
  loader.style.display = 'none';
  errorMessage.style.display = 'flex';
  setTimeout(() => {
    errorMessage.style.opacity = 1;
  }, 100);
}

retryButton.addEventListener('click', () => {
  errorMessage.style.opacity = 0;
  setTimeout(() => {
    errorMessage.style.display = 'none';
    loader.style.display = 'block';
    errorTimeout = setTimeout(showError, 60000);
  }, 500);
});
