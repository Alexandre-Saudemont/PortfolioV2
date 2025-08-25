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
			<section ref={ref} id='projects' className='container'>
				<h2 style={{textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem'}}>Featured Projects</h2>
				<div className='project-grid'>
					<div className='project-card'>
						<div className='project-image'></div>
						<div className='project-content'>
							<h3 className='project-title'>E-commerce Platform</h3>
							<p>A modern e-commerce solution built with React and Node.js</p>
							<div className='project-tech'>
								<span className='tech-tag'>React</span>
								<span className='tech-tag'>Node.js</span>
								<span className='tech-tag'>MongoDB</span>
							</div>
						</div>
					</div>
					<div className='project-card'>
						<div className='project-image'></div>
						<div className='project-content'>
							<h3 className='project-title'>Task Management App</h3>
							<p>Collaborative task management with real-time updates</p>
							<div className='project-tech'>
								<span className='tech-tag'>Vue.js</span>
								<span className='tech-tag'>Express</span>
								<span className='tech-tag'>Socket.io</span>
							</div>
						</div>
					</div>
					<div className='project-card'>
						<div className='project-image'></div>
						<div className='project-content'>
							<h3 className='project-title'>Analytics Dashboard</h3>
							<p>Data visualization dashboard with interactive charts</p>
							<div className='project-tech'>
								<span className='tech-tag'>D3.js</span>
								<span className='tech-tag'>Python</span>
								<span className='tech-tag'>FastAPI</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export default ProjectsPage;
