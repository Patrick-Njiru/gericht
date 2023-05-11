import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './header.css'

const Header = () => (
	<div className='header wrapper section-padding' id='home'>
		<div className='wrapper__info'>
			<SubHeading title='Chase the new flavour' />
			<h1 className='header__h1'> The Key to Fine Dining </h1>
			<p className='p__opensans'> 
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
				Corrupti quos inventore voluptates quibusdam dolorem cumque 
				repellendus maiores eligendi eos voluptas 
			</p>
			<button type='button' className='custom-button'> Explore Menu </button>
		</div>
		<div className='wrapper__img'> <img src={images.welcome} alt='header img' /> </div>
	</div>
)

export default Header