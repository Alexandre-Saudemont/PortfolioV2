import React from 'react';
import './News.scss';

function News({onCloseModal}) {
	return (
		<div className='news' role='dialog'>
			<div className='news-container'>
				<h1 className='news-title'>Welcome !</h1>
				<p className='news-text'> Site work on progress !</p>
				<p className='news-text'>The responsive for mobile is done. Next step will be for tablet and then desktop.</p>

				<button className='news-button' onClick={onCloseModal}>
					Close
				</button>
			</div>
		</div>
	);
}

export default News;
