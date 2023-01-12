const burgerBtn = document.querySelector('.burger-btn')
const burgerBars = document.querySelector('.burger-bar')
const navbar = document.querySelector('.navbar')
const navbarListItem = document.querySelectorAll('.navbar__listitem')

// let root = document.documentElement
let delay = 0.2

const showNav = () => {
	if (!navbar.classList.contains('navbar-active')) {
		navbar.classList.add('navbar-active')
		navbar.classList.remove('navbar-hide')
	} else {
		navbar.classList.remove('navbar-active')
		navbar.classList.add('navbar-hide')
	}
}

const swapBurger = () => {
	// burgerBars.classList.toggle('burger-active')
	if (!burgerBars.classList.contains('burger-active')) {
		burgerBars.classList.add('burger-active')
		burgerBars.classList.remove('burger-back')
	} else {
		burgerBars.classList.remove('burger-active')
		burgerBars.classList.add('burger-back')
	}
}

// const navbarItemEntry = () => {
// 	navbarListItem.forEach(item => {
//       setTimeout(() => {
//         item.classList.add('nav-entry')
//        }, delay); 
//        delay += 0.2
// 	})
// }

burgerBtn.addEventListener('click', () => {
	showNav()
	swapBurger()
	// navbarItemEntry()
})

// const navbarItemEntry = () => {
// 	navbarListItem.forEach(item => {
//         root.style.setProperty('--delay', `${delay}s`)
// 		delay += 0.2
// 		item.classList.add('nav-entry')
// 	})
// }