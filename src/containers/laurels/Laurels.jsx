import React from 'react'

import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './laurels.css'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
	<div className='awards-card'>
		<img src={imgUrl} alt='award' />
		<div className='awards__content'>
			<p className='p__cormorant' style={{ color: '#dcca87' }}> { title } </p>
			<p className='p__cormorant'> { subtitle } </p>
		</div>
	</div>
)

const Laurels = () => {
	return (
		<div className='bg wrapper section-padding' id='awards'>
			<div className='wrapper__info'>
				<SubHeading title="Awards & Recognition" />
				<h1 className='head-text__cormorant'> Our Laurels </h1>
			</div>
			<div className='laurels__awards'>
				{data.awards.map(award => <AwardCard key={award.title} award={award} />)}
			</div>
			<div className='wrapper__img'>
				<img src={images.laurels} alt='laurels' />
			</div>
		</div>
	)
}

export default Laurels