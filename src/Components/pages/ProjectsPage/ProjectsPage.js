import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import taiwan from '../../../assets/img/taiwan.gif';
import pokedeck from '../../../assets/img/pokemon.gif';
import house from '../../../assets/img/house.svg';
import houseDark from '../../../assets/img/house-dark.svg';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';

import './ProjectsPage.scss';

function ProjectsPage() {
	const {isDarkMode} = useContext(DarkModeContext);
	const navigate = useNavigate();

	function navigateHome() {
		navigate('/');
	}

	// I made function for the button instead of "<a>"" because I had trouble with syle on darkmode, after several times looking for a solution
	// with the "<a>"" and no sucessfull result. I made myself something easier for the style.

	function onClickTaiwan() {
		window.open('https://taiwan.alexandre-saudemont.fr/', '_blank');
	}

	function onClickGitHubTaiwan() {
		window.open('https://github.com/Alexandre-Saudemont/Taiwan', '_blank');
	}

	function onClickGitHubPokedeckFront() {
		window.open('https://github.com/Alexandre-Saudemont/pokedeck-front', '_blank');
	}

	function onClickGitHubPokedeckBack() {
		window.open('https://github.com/Alexandre-Saudemont/pokedeck-back', '_blank');
	}

	function onClickPokedeck() {
		window.open('https://pokedeck.alexandre-saudemont.fr/', '_blank');
	}

	return (
		<div className='projectPage'>
			<img src={!isDarkMode ? house : houseDark} alt='icon house' className='projectPage-iconHome' onClick={navigateHome} />
			<div className='projectPage-taiwan'>
				Taiwan Website
				<img src={taiwan} alt='' className='projectPage-taiwan-img' />
			</div>
			<div className='projectPage-taiwan-button-container'>
				<button className='projectPage-github-taiwan' onClick={onClickGitHubTaiwan}>
					GitHub
				</button>
				<button className='projectPage-website-taiwan' onClick={onClickTaiwan}>
					Website
				</button>
			</div>
			<div className='projectPage-pokedeck'>
				Pokedeck Website
				<img src={pokedeck} alt='' className='projectPage-pokedeck-img' />
			</div>
			<div className='projectPage-pokedeck-button-container'>
				<button className='projectPage-github-pokedeck' onClick={onClickGitHubPokedeckFront}>
					GitHub Front
				</button>
				<button className='projectPage-github-pokedeck' onClick={onClickGitHubPokedeckBack}>
					GitHub Back
				</button>
				<button
					href='google.com'
					target='_blank'
					rel='noopener noreferrer'
					className='projectPage-website-pokedeck'
					onClick={onClickPokedeck}>
					Website
				</button>
			</div>
		</div>
	);
}

export default ProjectsPage;
