import React, { useRef, useState } from 'react'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './intro.css'

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false)
	const vidRef = useRef()

	const handleVideo = () => {
		// set to false if it was true and vice versa
		setPlayVideo(prevPlayVideo => !prevPlayVideo)

		playVideo ? vidRef.current.pause() : vidRef.current.play()
	}

	return (
		<div className='video'>
			<video 
				src={meal}
				ref={vidRef}
				type='video/mp4'
				loop
				muted
			/>
			<div className='video__overlay flex-center'>
				<div className='video__circle flex-center' onClick={handleVideo}>
					{ playVideo 
						? <BsPauseFill color='#fff' fontSize={30}/> 
						: <BsFillPlayFill color='#fff' fontSize={30}/>
					}
				</div>
			</div>
		</div>
	)
}

export default Intro