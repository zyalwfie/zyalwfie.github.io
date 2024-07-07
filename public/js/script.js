const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-icon');
const listBtn = document.getElementById('list-icon');
const menuItems = document.querySelectorAll('#menu-item');

function toggleMenu() {
	if (sidebar.classList.contains('translate-x-[-100%]')) {
		sidebar.classList.remove('translate-x-[-100%]');
		closeBtn.style.display = 'block';
		listBtn.style.display = 'none';
	} else {
		sidebar.classList.add('translate-x-[-100%]');
		closeBtn.style.display = 'none';
		listBtn.style.display = 'block';
	}
}

hamburgerBtn.addEventListener('click', toggleMenu);
menuItems.forEach(function (menuItem) {
	menuItem.addEventListener('click', toggleMenu);
});
