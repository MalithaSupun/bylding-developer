document.addEventListener('DOMContentLoaded', function() {
    // Handle clicks on menu items to show/hide dropdowns
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Toggle dropdown visibility
            var dropdown = this.querySelector('.dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            // Change arrow direction
            var arrowIcon = this.querySelector('.fa-angle-down');
            if (arrowIcon) {
                arrowIcon.classList.toggle('active');
            }
            // Prevent default anchor click behavior
            event.preventDefault();
        });
    });

    // Close the dropdowns if the user clicks outside of them
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-link')) {
            var dropdowns = document.getElementsByClassName('dropdown');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                    // Reset arrow direction
                    var activeArrows = openDropdown.parentElement.querySelectorAll('.fa-angle-down.active');
                    activeArrows.forEach(function(arrow) {
                        arrow.classList.remove('active');
                    });
                }
            }
        }
    });
});



// user dropdown
// JavaScript
function toggleProfileDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("show");
  }
  
  // Close dropdown when clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.user')) {
      var dropdown = document.getElementById("profileDropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }

