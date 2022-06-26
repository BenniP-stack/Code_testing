// Get modal element
var modal = document.getElementById('simpleModal');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);


// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

document.documentElement.addEventListener("mouseleave", () =>
    modal.style.display = "block"
);