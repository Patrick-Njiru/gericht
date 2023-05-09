import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './header.css'

const Header = () => (
	<div className='header app__wrapper section__padding' id='home'>
		<div className='app__wrapper_info'>
			<SubHeading title='Chase the new flavour' />
			<h1 className='header__h1'> The Key to Fine Dining </h1>
			<p className='p__opensans' style={{ margin: '2rem 0' }}> 
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
				Corrupti quos inventore voluptates quibusdam dolorem cumque 
				repellendus maiores eligendi eos voluptas 
			</p>
			<button type='button' className='custom__button'> Explore Menu </button>
		</div>
		<div className='app__wrapper_img'>
			<img src={images.welcome} alt='header img' />
		</div>
	</div>
)

export default Header