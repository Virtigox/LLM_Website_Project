// Enhance logo scroller: duplicate track for seamless looping and add hover pause via JS
document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('.logo-scroll-container');
	containers.forEach(container => {
		const tracks = container.querySelectorAll('.logo-scroll');
		tracks.forEach(track => {
			// If the track doesn't already have a duplicated set, clone its children
			const children = Array.from(track.children);
			const alreadyDuplicated = track.dataset.duplicated === 'true';
			if (!alreadyDuplicated) {
				children.forEach(node => {
					const clone = node.cloneNode(true);
					clone.setAttribute('aria-hidden', 'true');
					track.appendChild(clone);
				});
				track.dataset.duplicated = 'true';
			}
		});

		// JS-controlled pause on hover for smoother control across browsers
		container.addEventListener('mouseenter', () => {
			tracks.forEach(track => {
				track.style.animationPlayState = 'paused';
			});
		});
		container.addEventListener('mouseleave', () => {
			tracks.forEach(track => {
				track.style.animationPlayState = 'running';
			});
		});
	});

	// Dropdown toggle behavior
	const dropdowns = document.querySelectorAll('.nav-dropdown');
	dropdowns.forEach(dd => {
		const trigger = dd.querySelector('.dropdown-trigger');
		const menu = dd.querySelector('.dropdown-menu');
		if (!trigger || !menu) return;

		const openMenu = () => {
			menu.classList.add('open');
			trigger.setAttribute('aria-expanded', 'true');
			// Focus first item for accessibility
			const firstItem = menu.querySelector('a');
			if (firstItem) firstItem.focus();
		};
		const closeMenu = () => {
			menu.classList.remove('open');
			trigger.setAttribute('aria-expanded', 'false');
			trigger.focus();
		};

		trigger.addEventListener('click', (e) => {
			e.stopPropagation();
			if (menu.classList.contains('open')) {
				closeMenu();
			} else {
				openMenu();
			}
		});
		// Close when clicking outside
		document.addEventListener('click', (e) => {
			if (!dd.contains(e.target)) closeMenu();
		});
		// Close on Escape
		document.addEventListener('keydown', (e) => {
			const items = Array.from(menu.querySelectorAll('a'));
			const currentIndex = items.indexOf(document.activeElement);
			if (e.key === 'Escape') closeMenu();
			if (menu.classList.contains('open')) {
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					const next = items[currentIndex + 1] || items[0];
					if (next) next.focus();
				}
				if (e.key === 'ArrowUp') {
					e.preventDefault();
					const prev = items[currentIndex - 1] || items[items.length - 1];
					if (prev) prev.focus();
				}
			}
		});
	});

});
