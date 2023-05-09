import React from 'react'

import './menuitem.css'

const MenuItem = ({ title, price, tags }) => (
	<div className='menu-item'>
		<div className='menu-item__head'>
			<div className='menu-item__name'>
				<p className='p__cormorant' style={{ color: '#DCCa87' }}> { title } </p>
			</div>
			<div className='menu-item__dash' />
			<div className='menu-item__price'>
				<p className='p__cormorant'> { price } </p>
			</div>
		</div>
		<div className='menu-item__sub'>
			<p className='p__opensans' style={{ color: '#AAA'}}> { tags } </p>
		</div>
	</div>
	)

export default MenuItem