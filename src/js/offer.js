const offerBtns = document.querySelectorAll('.btn-details')

const detailBox = document.querySelector('.offer__detailbox')
const detailBoxCloseBtn = document.querySelector('.offer__detailbox-close')
const allOfferDetailCard = document.querySelectorAll('.offer__detail')
const firstOfferDetailCard = document.querySelector('.offer__detail-first')
const secondOfferDetailCard = document.querySelector('.offer__detail-second')
const thirdOfferDetailCard = document.querySelector('.offer__detail-third')

const allOptionBtns = document.querySelectorAll('.fa-caret-square-down')

const showOfferDetails = el => {
	detailBox.classList.add('offer__detailbox--active')
	detailBox.classList.add('show-detail')
	detailBox.classList.remove('hide-detail')
	detailBox.style.overflow = 'hidden'

	if (el.classList.contains('offer-first')) {
		firstOfferDetailCard.classList.add('offer__detail-show')
	} else if (el.classList.contains('offer-second')) {
		secondOfferDetailCard.classList.add('offer__detail-show')
	} else if (el.classList.contains('offer-third')) {
		thirdOfferDetailCard.classList.add('offer__detail-show')
	}

	matchSectionPosition()
}

const closeDetailBox = () => {
	detailBox.classList.add('hide-detail')
	setTimeout(() => {
		detailBox.classList.remove('offer__detailbox--active')
		allOfferDetailCard.forEach(card => {
			card.classList.remove('offer__detail-show')
		})
	}, 500)
}

const matchSectionPosition = () => {
	const currentPosition = window.scrollY
	detailBox.style.top = `${currentPosition + 45}px`
}

const showOptionDescription = el => {
	const elementHead = el.closest('.offer__detail__content-optionhead')
	const elementDescription = elementHead.nextSibling.nextSibling

	elementHead.classList.toggle('option-show-head')

	setTimeout(() => {
		elementDescription.classList.toggle('option-show')
	}, 500)

	if (el.style.transform === 'rotate(180deg)') {
		el.style.transform = 'rotate(0)'
		elementHead.classList.add('hide-option-h')
		elementDescription.classList.add('hide-option-d')
		elementHead.classList.remove('show-option-h')
		elementDescription.classList.remove('show-option-d')
	} else {
		el.style.transform = 'rotate(180deg)'
		elementHead.classList.add('show-option-h')
		elementDescription.classList.add('show-option-d')
		elementHead.classList.remove('hide-option-h')
		elementDescription.classList.remove('hide-option-d')
	}
}

offerBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		showOfferDetails(e.target)
	})
})

allOptionBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		showOptionDescription(e.target)
	})
})

detailBoxCloseBtn.addEventListener('click', closeDetailBox)
