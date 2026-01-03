function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

function sendMessage(event) {
  event.preventDefault();
  alert("Pesan berhasil dikirim!");
}
