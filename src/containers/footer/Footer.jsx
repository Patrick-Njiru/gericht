import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

import { FooterOverlay, NewsLetter } from '../../components'
import { images } from '../../constants'
import './footer.css'

const Footer = () => (
	<div className='footer section-padding'>
		<FooterOverlay />
		<NewsLetter />
		<div className="footer__links">
			<div className="footer__contact">
				<h1 className="footer__head-text"> Contact Us </h1>
				<p className="p__opensans"> 9 w 53rd st, ew york, NY 10019, USA </p>
				<p className="p__opensans"> +1 212-344-1230 </p>
				<p className="p__opensans"> +1 212-555-1230 </p>
			</div>
			<div className="footer__logo">
				<img src={images.gericht} alt="footer logo" />
				<p className="p__opensans">
					<q> The best way to find yourself is to lose yourself in the service of others. </q>
				</p>
				<img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15}} />
				<div className="footer__icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="footer__work">
				<h1 className="footer__head-text"> Working Hours </h1>
				<p className="p__opensans"> Monday - Friday </p>
				<p className="p__opensans"> 08:00 am - 12:00 am </p>
				<p className="p__opensans"> Saturday - Sunday </p>
				<p className="p__opensans"> 07:00 am - 11:00 pm </p>
			</div>
		</div>
		<div className="footer__copyright">
			<p className="p__opensans"> 2023 Gericht. All Rights Reserved </p>
		</div>
	</div>
)

export default Footer