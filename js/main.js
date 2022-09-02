const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');

const handleNav = () => {
	nav.classList.toggle('nav--active');
};

navBtn.addEventListener('click', handleNav);
