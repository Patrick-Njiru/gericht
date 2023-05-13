import React from 'react'

import { SubHeading } from '../../components'
import './newsletter.css'

const Newsletter = () => (
	<div className='newsletter'>
		<div className="newsletter__heading">
			<SubHeading title='Newsletter' />
			<h1 className="head-text__cormorant"> Subscribe to our newsletter </h1>
			<p className="p__opensans"> And never miss latest updates! </p>
		</div>
		<div className="newsletter__input flex-center">
			<input type="email" placeholder='Enter your email address' />
			<button className="custom-button"> Subscribe </button>
		</div>
	</div>
)

export default Newsletter