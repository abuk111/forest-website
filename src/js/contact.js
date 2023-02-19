const sendBtn = document.querySelector('.formbox__send')
const nameForm = document.querySelector('#name')
const mailForm = document.querySelector('#mail')
const phoneForm = document.querySelector('#phone')
const messageForm = document.querySelector('#message')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__window-close')

const showError = (input, msg) => {
	const inputBox = input.parentElement
	const errMsg = inputBox.querySelector('.error-text')

	errMsg.classList.add('show')
	errMsg.textContent = msg
}

const clearError = input => {
	const inputBox = input.parentElement
	const errMsg = inputBox.querySelector('.error-text')

	errMsg.classList.remove('show')
}

const checkInput = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Podaj poprawny email!')
	}
}

const checkPhone = phone => {
	const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

	if (re.test(phone.value)) {
		clearError(phone)
	} else {
		showError(phone, 'Podaj poprawny telefon!')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.error-text')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('show')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('popup-show')
	}
}

const closePopup = () => {
	popup.classList.remove('popup-show')
}


sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkInput([nameForm, mailForm, phoneForm, messageForm])
	checkMail(mailForm)
	checkErrors()
})

popupClose.addEventListener('click', closePopup)