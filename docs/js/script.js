document.addEventListener('DOMContentLoaded', function() {
    var drop = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(drop, {
        coverTrigger: false,
        hover: true
    })
})
