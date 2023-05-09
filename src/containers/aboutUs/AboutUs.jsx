import React from 'react'

import { images } from '../../constants'
import './aboutus.css'

const AboutUs = () => (
	<div className='about-us app__bg flex__center section__padding' id='about'>
		<div className='about-us__overlay flex__center'>
			<img src={images.G} alt='G overlay' />
		</div>
		<div className='about-us__content flex__center'>
			<div className='about-us__about'>
				<h1 className='headtext__cormorant'> About Us </h1>
				<img src={images.spoon} alt='about__spoon' className='spoon__image' />
				<p className='p__opensans'> 
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis 
					provident sit repudiandae nisi assumenda
				</p>
				<button type='button' className='custom__button'> Know More </button>
			</div>
			<div className='about-us__knife flex__center'>
				<img src={images.knife} alt='about knife' />
			</div>
			<div className='about-us__history'>
				<h1 className='headtext__cormorant'> Our History </h1>
				<img src={images.spoon} alt='about__spoon' className='spoon__image' />
				<p className='p__opensans'> 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia error 
					doloribus aperiam libero inventore necessitatibus 
				</p>
				<button type='button' className='custom__button'> Know More </button>
			</div>
		</div>
	</div>
)

export default AboutUs