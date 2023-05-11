import React from 'react'

import { images } from '../../constants'
import './aboutus.css'

const AboutUs = () => (
	<div className='about-us bg flex-center section-padding' id='about'>
		<img src={images.G} alt='G overlay' className='about-us__overlay flex-center' />
		<div className='about-us__content flex-center'>
			<div className='about-us__about'>
				<h1 className='head-text__cormorant'> About Us </h1>
				<img src={images.spoon} alt='spoon' className='spoon__image' />
				<p className='p__opensans'> 
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis 
					provident sit repudiandae nisi assumenda
				</p>
				<button type='button' className='custom-button'> Know More </button>
			</div>
			<img src={images.knife} alt='knife' className='about-us__knife flex-center' />
			<div className='about-us__history'>
				<h1 className='head-text__cormorant'> Our History </h1>
				<img src={images.spoon} alt='spoon' className='spoon__image' />
				<p className='p__opensans'> 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia error 
					doloribus aperiam libero inventore necessitatibus 
				</p>
				<button type='button' className='custom-button'> Know More </button>
			</div>
		</div>
	</div>
)

export default AboutUs