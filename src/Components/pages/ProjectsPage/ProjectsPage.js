import React from 'react';
//{useContext} from 'react';
import taiwan from '../../../assets/img/taiwan.jpg';
import pokedeck from '../../../assets/img/pokedeck.png';
//import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import './ProjectsPage.scss';

function ProjectsPage() {
	//const {isDarkMode} = useContext(DarkModeContext);
	//${isDarkMode ? 'lightMode' : 'darkMode'}`}

	// I made function instead of <a> because I had trouble with syle & darkmode, after several time looking for a solution
	// with the <a> and no solution. I made something easier for the style.

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

	return (
		<div className='projects'>
			<div className='projects-taiwan'>
				Taiwan Website
				<img src={taiwan} alt='' className='projects-taiwan-img' />
			</div>
			<div className='projects-taiwan-button-container'>
				<button className='projects-github-taiwan' onClick={onClickGitHubTaiwan}>
					GitHub
				</button>
				<button className='projects-website-taiwan' onClick={onClickTaiwan}>
					Website
				</button>
			</div>
			<div className='projects-pokedeck'>
				Pokedeck Website
				<img src={pokedeck} alt='' className='projects-pokedeck-img' />
			</div>
			<div className='projects-pokedeck-button-container'>
				<button className='projects-github-pokedeck' onClick={onClickGitHubPokedeckFront}>
					GitHub Front
				</button>
				<button className='projects-github-pokedeck' onClick={onClickGitHubPokedeckBack}>
					GitHub Back
				</button>
				<button href='google.com' target='_blank' rel='noopener noreferrer' className='projects-website-pokedeck'>
					Demonstration
				</button>
			</div>
		</div>
	);
}

export default ProjectsPage;
