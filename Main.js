const togglebtn = document.querySelectorAll('.toggle_btn');
 const togglebtIcon = document.querySelectorAll('.toggle_btn i'); 
const dropdown = document.querySelectorAll('.dropdown_menu');

togglebtn.onclick=function (){
    dropdown.classList.contains('open')

    togglebtIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown_menu');
    dropdownMenu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle_btn');
    toggleButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up
        toggleDropdown();
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        var dropdownMenu = document.querySelector('.dropdown_menu');
        if (!dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('open');
        }
    });
});
