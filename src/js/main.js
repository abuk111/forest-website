const burgerBtn = document.querySelector('.burger-btn')
const burgerBars = document.querySelector('.burger-bar')
const navbar = document.querySelector('.navbar')
const navbarListItem = document.querySelectorAll('.navbar__listitem')
const footerYear = document.querySelector('#date')

const allSections = document.querySelectorAll('.section')
const navItemHome = document.querySelector('.navitem-home')
const navItemAboutus = document.querySelector('.navitem-aboutus')
const navItemOffer = document.querySelector('.navitem-offer')
const navItemContact = document.querySelector('.navitem-contact')



const showNav = () => {
	navbar.classList.add('navbar-active')
	navbar.classList.remove('navbar-hide')
	burgerBars.classList.add('burger-active')
	burgerBars.classList.remove('burger-back')
}
const hideNav = () => {
	navbar.classList.remove('navbar-active')
	navbar.classList.add('navbar-hide')
	burgerBars.classList.remove('burger-active')
	burgerBars.classList.add('burger-back')
}

const navbarItemEntry = () => {
	let delayTime = 0

	navbarListItem.forEach(item => {
		item.classList.toggle('nav-entry')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const navHandling = () => {
	if (!navbar.classList.contains('navbar-active')) {
		showNav()
	} else {
		hideNav()
	}
	navbarItemEntry()
	navbarListItem.forEach(item => {
		item.addEventListener('click', hideNav)
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const activePageObserver = () => {
	const currentPage = window.location.pathname

	if (currentPage === '/contact.html') {
		navItemContact.classList.add('nav-item-active')
		navItemContact.children[0].classList.add('nav-item-active')
	} else if (currentPage === '/offer.html') {
		navItemOffer.classList.add('nav-item-active')
		navItemOffer.children[0].classList.add('nav-item-active')
	} else if (currentPage === '/index.html') {
		navItemHome.classList.add('nav-item-active')
		navItemHome.children[0].classList.add('nav-item-active')
		window.addEventListener('scroll', activeSectionObserver)
	}
}

const activeSectionObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('about-us') && section.offsetTop <= currentSection + 72) {
			navSectionClear()
			navItemAboutus.classList.add('nav-item-active')
			navItemAboutus.children[0].classList.add('nav-item-active')
		} else if (section.classList.contains('offer') && section.offsetTop <= currentSection + 72) {
			navSectionClear()
			navItemOffer.classList.add('nav-item-active')
			navItemOffer.children[0].classList.add('nav-item-active')
		} else if (section.classList.contains('header') && section.offsetTop <= currentSection + 72) {
			navSectionClear()
			navItemHome.classList.add('nav-item-active')
			navItemHome.children[0].classList.add('nav-item-active')
		}
	})
}

const navSectionClear = () => {
	navbarListItem.forEach(section => {
		section.classList.remove('nav-item-active')
		section.children[0].classList.remove('nav-item-active')
	})
}





handleCurrentYear()
activePageObserver()
burgerBtn.addEventListener('click', navHandling)

