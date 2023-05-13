import React from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './gallery.css'

const galleryImages = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04 ]

const Gallery = () => {
	const scrollRef = React.useRef(null)

	const scroll = (direction) => {
		const { current } = scrollRef
		direction === 'left' ? current.scrollLeft -= 300 : current.scrollLeft += 300
	}

	return (
		<div className='gallery flex-center'>
			<div className='gallery__content'>
				<SubHeading title='Instagram' />
				<h1 className='head-text__cormorant'> Photo Gallery </h1>
				<p className='p__opensans' style={{ color: "#aaa", marginTop: '2rem'}}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta exercitationem cupiditate aspernatur, neque non perspiciatis dignissimos.
				</p>
				<button type='button' className='custom-button'> View More </button>
			</div>
			<div className='gallery__images'>
				<div className='gallery__images-container' ref={scrollRef}>
					{
						galleryImages.map((image, index) => 
							<div className='gallery__images-card flex-center' key={index}>
								<img src={image} alt="gallery" /> 
								<BsInstagram className='gallery__image-icon' />
							</div> 
					)}
				</div>
				<div className='gallery__images-arrows'>
					<BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
					<BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
				</div>
			</div>

		</div>
	)
}

export default Gallery