import React from 'react'

import './menuitem.css'

const MenuItem = ({ title, price, tags }) => (
	<div className='menu-item'>
		<div className='menu-item__head'>
			<p className='menu-item__name p__cormorant' style={{ color: '#DCCa87' }}> { title } </p>
			<div className='menu-item__dash' />
			<p className='p__cormorant menu-item__price'> { price } </p>
		</div>
		<p className='menu-item__sub p__opensans' style={{ color: '#AAA'}}> { tags } </p>
	</div>
	)

export default MenuItem