import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './specialmenu.css'

const SpecialMenu = () => (
	<div className='special-menu flex__center section__padding' id='menu'>
		<div className='special-menu__title'>
			<SubHeading title="Menu That Fits Your Palette" />
			<h1 className='headtext__cormorant'> Today's Special </h1>
		</div>
		<div className='special-menu__menu'>
			<div className='special-menu__wine flex__center'>
				<p className='special-menu__heading'> Wine & Beer </p>
				<div className='special-menu__items'>
					{ 
					data.wines.map((wine, index) => 
					<MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} /> )
					}
				</div>
			</div>
			<div className='special-menu__img'>
				<img src={images.menu} alt='menu img' />
			</div>
			<div className='special-menu__cocktails flex__center'>
				<p className='special-menu__heading'> Cocktails </p>
				<div className='special-menu__items'>
					{ 
					data.cocktails.map((cocktail, index) => 
					<MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} /> )
					}
				</div>
			</div>
		</div>
		<button style={{marginTop: '15px'}} className='custom__button'> View More </button>
	</div>
)

export default SpecialMenu