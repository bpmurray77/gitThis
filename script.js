document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const persistenceTime = 3000;
    let activeSubmenu = null;

    function closeAllSubmenus() {
        navItems.forEach(item => {
            const subMenu = item.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.classList.remove('persist');
            }
        });
    }

    navItems.forEach(item => {
        const subMenu = item.querySelector('.sub-menu');
        let timeoutId;
        
        function showSubMenu() {
            clearTimeout(timeoutId);
            if (activeSubmenu && activeSubmenu !== subMenu) {
                activeSubmenu.classList.remove('persist');
            }
            subMenu.classList.add('persist');
            activeSubmenu = subMenu;
        }

        function hideSubMenu() {
            timeoutId = setTimeout(() => {
                subMenu.classList.remove('persist');
                if (activeSubmenu === subMenu) {
                    activeSubmenu = null;
                }
            }, persistenceTime);
        }

        item.addEventListener('mouseenter', showSubMenu);
        item.addEventListener('mouseleave', hideSubMenu);
        
        if (subMenu) {
            subMenu.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
            });
            subMenu.addEventListener('mouseleave', hideSubMenu);
        }
    });

    // Close all submenus when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-item')) {
            closeAllSubmenus();
            activeSubmenu = null;
        }
    });
});