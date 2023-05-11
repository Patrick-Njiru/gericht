import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './specialmenu.css'

const SpecialMenu = () => (
	<div className='special-menu flex-center section-padding' id='menu'>
		<div className='special-menu__title'>
			<SubHeading title="Menu That Fits Your Palette" />
			<h1 className='head-text__cormorant'> Today's Special </h1>
		</div>
		<div className='special-menu__menu'>
			<div className='special-menu__wine flex-center'>
				<p className='special-menu__heading'> Wine & Beer </p>
				<div className='special-menu__items'>
					{ 
					data.wines.map((wine, index) => 
					<MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} /> )
					}
				</div>
			</div>
			<img src={images.menu} alt='menu img' className='special-menu__img' />
			<div className='special-menu__cocktails flex-center'>
				<p className='special-menu__heading'> Cocktails </p>
				<div className='special-menu__items'>
					{ 
					data.cocktails.map((cocktail, index) => 
					<MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} /> )
					}
				</div>
			</div>
		</div>
		<button className='custom-button'> View More </button>
	</div>
)

export default SpecialMenu