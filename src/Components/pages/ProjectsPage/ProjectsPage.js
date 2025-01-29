import React, {useContext, forwardRef} from 'react';
import taiwan from '../../../assets/img/taiwan.gif';
import pokedeck from '../../../assets/img/pokemon.gif';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import {useTranslation} from 'react-i18next';
import './ProjectsPage.scss';

const ProjectsPage = forwardRef((props, ref) => {
	const {isDarkMode} = useContext(DarkModeContext);

	const {t} = useTranslation();

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
		<div className='projectPage-container'>
			<div className={`projectPage ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
				<section ref={ref} className='projectPage'>
					<div className='projectPage-taiwan'>
						{t('projectsPage.title1')}
						<img src={taiwan} alt='' className='projectPage-taiwan-img' />
					</div>
					<div className='projectPage-taiwan-button-container'>
						<button className='projectPage-github-taiwan' onClick={onClickGitHubTaiwan}>
							{t('projectsPage.github')}
						</button>
						<button className='projectPage-website-taiwan' onClick={onClickTaiwan}>
							{t('projectsPage.website')}
						</button>
					</div>
					<div className='projectPage-pokedeck'>
						{t('projectsPage.title2')}
						<img src={pokedeck} alt='' className='projectPage-pokedeck-img' />
					</div>
					<div className='projectPage-pokedeck-button-container'>
						<button className='projectPage-github-pokedeck' onClick={onClickGitHubPokedeckFront}>
							{t('projectsPage.githubFront')}
						</button>
						<button className='projectPage-github-pokedeck' onClick={onClickGitHubPokedeckBack}>
							{t('projectsPage.githubBack')}
						</button>
						<button
							className='projectPage-website-pokedeck'
							href='google.com'
							target='_blank'
							rel='noopener noreferrer'
							onClick={onClickPokedeck}>
							{t('projectsPage.website')}
						</button>
					</div>
				</section>
			</div>
		</div>
	);
});

export default ProjectsPage;
