document.querySelector('.locations__create-location-btn').onclick = function() {
  document.getElementById('createModal').style.display = 'flex';
}

let editButtons = document.querySelectorAll('.locations__action-edit');
editButtons.forEach(function(btn) {
  btn.onclick = function(e) {
    e.preventDefault(); 
    document.getElementById('editModal').style.display = 'flex';
  };
});

let cancelButtons = document.querySelectorAll('.modal__cancel-btn');
cancelButtons.forEach(function(btn) {
  btn.onclick = function() {
    this.closest('.modal').style.display = 'none';
  };
});
