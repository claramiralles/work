document.addEventListener('DOMContentLoaded', (event) => {


    const scroll = window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        };

    const elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            } else {
                element.classList.remove('is-visible');
            }
        });
        scroll(loop);
    }

    loop();

    function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
                && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }


});

document.addEventListener('DOMContentLoaded', (event) => {
    

    const elementsMenuClose = document.getElementById('mobile-list')
    elementsMenuClose.style = 'display: none';

    const navLogoClose = document.getElementById('close-menu-icon')
    navLogoClose.style = 'display: none';
  

  
    // Function OPEN MENU
    
    function dropdownOpen () {
      const elementsMenuOpen = document.getElementById('mobile-list')
      elementsMenuOpen.style = 'display: block'
  
      const navLogoClose = document.getElementById('close-menu-icon')
      navLogoClose.style = 'display: block'
  
      const navLogoOpen = document.getElementById('open-menu-icon')
      navLogoOpen.style = 'display: none'
    }
  
    // Function CLOSE MENU
    function dropdownClose () {
      const dropdownElementOpen = document.getElementById('mobile-list')
      dropdownElementOpen.style = 'display: none'
  
      const dropdownCloseLogo = document.getElementById('close-menu-icon')
      dropdownCloseLogo.style = 'display: none'
  
      const dropdownOpen = document.getElementById('open-menu-icon')
      dropdownOpen.style = 'display: block'
    }
  
    
    const dropdownOpenClick = document.getElementById('open-menu-icon')
    dropdownOpenClick.addEventListener('click', dropdownOpen)
  
    const dropdownCloseClick = document.getElementById('close-menu-icon')
    dropdownCloseClick.addEventListener('click', dropdownClose)
    
  })

//# sourceMappingURL=main.js.map
