import React from 'react'


export const MoviePoster = ({img, title, rate, id, styles}) => {
	// const image = img
	const image = `http://image.tmdb.org/t/p/w220_and_h330_face/${img}`
	const {box, titleclass, boxCover} = styles
	return (
		<div className={box}>
			<img src={image} title={title} alt={title}/>
			<div className={boxCover}></div>
			<div className={titleclass}>
				<p>{rate}/10</p>
				<p>{title}</p>
			</div>
		</div>

	)
}

export const MovieImage = ({styles, img, title}) => {
	const image = `http://image.tmdb.org/t/p/w220_and_h330_face/${img}`
	return (
		<div className={styles}>
			<img src={image} alt={title}/>
		</div>
	)
}

