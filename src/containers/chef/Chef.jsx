import React from 'react'

import { images } from '../../constants'
import { SubHeading } from '../../components'
import './chef.css'

const Chef = () => {
	return (
		<div className='chef bg wrapper section-padding'>
			<div className='wrapper__img wrapper__img-reverse'>
				<img src={images.chef} alt='chef' />
			</div>
			<div className='wrapper__info'>
				<SubHeading title="Chef's Word" />
				<h1 className='head-text__cormorant'> What We Believe In </h1>
				<div className='chef__content'>
					<div className='chef__quote'>
						<img src={images.quote} alt='quote' />
						<p className='p__opensans'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquam cumque.
						</p>
					</div>
					<p className='p__opensans'>
						Voluptatibus laborum ipsum eos enim vitae culpa sequi, blanditiis placeat id atque aperiam maxime, doloremque, soluta ipsam tenetur repellat. Rem alias nihil doloremque.
					</p>
				</div>
				<div className='chef__sign'>
					<p> Kevin Luo </p>
					<p className='p__opensans'> Chef & Founder </p>
					<img src={images.sign} alt='sign' />
				</div>
			</div>
		</div>
	)
}

export default Chef