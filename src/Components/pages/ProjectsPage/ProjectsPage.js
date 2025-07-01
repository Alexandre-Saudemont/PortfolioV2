import React, {forwardRef} from 'react';
import taiwan from '../../../assets/img/taiwan.gif';
import pokedeck from '../../../assets/img/pokemon.gif';
import hanzi from '../../../assets/img/hanzi.gif';
import {useTranslation} from 'react-i18next';
import './ProjectsPage.scss';

const ProjectsPage = forwardRef((props, ref) => {
	const {t} = useTranslation();

	// I made function for the button instead of "<a>"" because I had trouble with syle on darkmode, after several times looking for a solution
	// with the "<a>"" and no sucessfull result. I made myself something easier for the style.

	// function onClickTaiwan() {
	// 	window.open('https://taiwan.alexandre-saudemont.fr/', '_blank');
	// }

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
		window.open('https://pokedeckv2.alexandre-saudemont.fr/', '_blank');
	}

	function onClickGitHubHanzi() {
		window.open('https://github.com/Alexandre-Saudemont/LearningHSK', '_blank');
	}

	function onClickHanzi() {
		window.open('https://hskmatch.alexandre-saudemont.fr/', '_blank');
	}

	return (
		<div className='projectPage-container'>
			<div className={`projectPage`}>
				<section ref={ref} className='projectPage'>
					<div className='projectPage-projects'>
						<div className='projectPage-project'>
							<div className='projectPage-taiwan'>
								{t('projectsPage.title1')}
								<img src={taiwan} alt='taiwan gif' className='projectPage-taiwan-img' />
								<div className='projectPage-taiwan-button-container'>
									<button className='projectPage-button-github' onClick={onClickGitHubTaiwan}>
										{t('projectsPage.github')}
									</button>
								</div>
							</div>
						</div>

						<div className='projectPage-project'>
							<div className='projectPage-pokedeck'>
								{t('projectsPage.title2')}
								<img src={pokedeck} alt='pokedeck gif' className='projectPage-pokedeck-img' />

								<div className='projectPage-pokedeck-button-container'>
									<button className='projectPage-button-github' onClick={onClickGitHubPokedeckFront}>
										{t('projectsPage.githubFront')}
									</button>
									<button className='projectPage-button-github' onClick={onClickGitHubPokedeckBack}>
										{t('projectsPage.githubBack')}
									</button>
									<button
										className='projectPage-button-website'
										href='google.com'
										target='_blank'
										rel='noopener noreferrer'
										onClick={onClickPokedeck}>
										{t('projectsPage.website')}
									</button>
								</div>
							</div>
						</div>
						<div className='projectPage-project'>
							<div className='projectPage-hanzi'>
								{t('projectsPage.title3')}
								<img src={hanzi} alt='hanzi gif' className='projectPage-hanzi-img' />
								<div className='projectPage-hanzi-button-container'>
									<button className='projectPage-button-github' onClick={onClickGitHubHanzi}>
										{t('projectsPage.github')}
									</button>
									<button className='projectPage-button-website' onClick={onClickHanzi}>
										{t('projectsPage.website')}
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
});

export default ProjectsPage;
