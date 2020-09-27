import React from 'react'

const MoviePoster = ({img, title, rate}) => {
	const image = `http://image.tmdb.org/t/p/w220_and_h330_face/${img}`
	// const image = img
	return (
		<div>
			<img src={image}/>
			<h3>{rate}/10</h3>
			<h2>{title}</h2>
		</div>
	)
}

export default MoviePoster;