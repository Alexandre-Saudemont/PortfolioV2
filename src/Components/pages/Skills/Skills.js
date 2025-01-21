import React, {useState, useContext, forwardRef} from 'react';
import {DarkModeContext} from '../../DarkMode/DarkModeContext/DarkModeContext';
import reactIcon from '../../../assets/img/react.svg';
import reactIconDark from '../../../assets/img/react-dark.svg';
import javascriptIcon from '../../../assets/img/js.svg';
import javascriptIconDark from '../../../assets/img/js-dark.svg';
import htmlIcon from '../../../assets/img/html5.svg';
import htmlIconDark from '../../../assets/img/html5-dark.svg';
import cssIcon from '../../../assets/img/css3.svg';
import cssIconDark from '../../../assets/img/css3-dark.svg';
import nodejs from '../../../assets/img/node-js-dark.svg';
import nodejsDark from '../../../assets/img/node-js.svg';
import expressJs from '../../../assets/img/expressjs.svg';
import expressjsDark from '../../../assets/img/expressjs-dark.svg';
import psql from '../../../assets/img/psql.svg';
import psqlDark from '../../../assets/img/psql-dark.svg';

import './Skills.scss';

const Skills = forwardRef((props, ref) => {
	const {isDarkMode} = useContext(DarkModeContext);

	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<React.Fragment>
			<section ref={ref}>
				<div class='container text-center align-items-center justify-content-center mt-5 h-100'>
					<div class='row w-a d-flex flex-wrap flip-card' onClick={handleFlip}>
						<div
							class={`col d-flex flex-wrap justify-content-center align-item-center rounded-5 flip-card-inner ${
								isFlipped ? 'flipped' : ''
							} ${isDarkMode ? 'lightMode' : 'darkMode'} `}>
							{/* Carte qui se retourne */}
							<div class='p-3 d-flex flex-column align-items-center flip-card-front '>
								<img src={isDarkMode ? reactIconDark : reactIcon} alt='icon react' class='skills-front-icon-react' />
							</div>
							{/* Face arrière de la carte */}
							<div class='p-3 d-flex flex-column align-items-center flip-card-back'>
								<div class='card-body'>
									<span>ReactJs</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='row w-a d-flex flex-wrap flip-card' onClick={handleFlip}>
					{/* <div
						class={`col d-flex flex-wrap justify-content-center flip-card-inner ${isFlipped ? 'flipped' : ''} ${
							isDarkMode ? 'text-bg-dark' : 'text-bg-light'
						}`}>
						<img src={isDarkMode ? javascriptIconDark : javascriptIcon} alt='icon javaScript' class='skills-front-icon-js card-img-top' />
						<div class={`p-3 d-flex flex-column align-items-center card  }`}>
							<span>JavaScript</span>
						</div>
						<div class='p-3 d-flex flex-column align-items-center'>
							<img src={isDarkMode ? htmlIconDark : htmlIcon} alt='icon html' class='skills-front-icon-html' />
							<span>HTML 5</span>
						</div>
						<div class='p-3 d-flex flex-column align-items-center'>
							<img src={isDarkMode ? cssIconDark : cssIcon} alt='icon css' class='skills-front-icon-css' />
							<span>CSS 3</span>
						</div>
						<div class='p-3 d-flex flex-column align-items-center'>
							<img src={isDarkMode ? nodejsDark : nodejs} alt='icon nodejs' class='skills-back-icon-nodejs' />
							<span>NodeJs</span>
						</div>
						<div class='p-3 d-flex flex-column align-items-center'>
							<img src={isDarkMode ? expressjsDark : expressJs} alt='icon expressjs' class='skills-back-icon-expressjs' />
							<span>ExpressJs</span>
						</div>
						<div class='p-3 d-flex flex-column align-items-center'>
							<img src={isDarkMode ? psqlDark : psql} alt='icon psql' class='skills-back-icon-psql' />
							<span>PostgreSQL</span>
						</div>
					</div> */}
					{/* <div class='row w-a d-flex flex-wrap'>
						<div class='flip-card d-flex flex-wrap m-3 ' onClick={handleFlip}>
							<div class={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
							
								<div class='flip-card-front p-3'>
									<img src={isDarkMode ? reactIconDark : reactIcon} alt='icon react' class='skills-back-icon-react' />
								</div>
							
								<div class='flip-card-back'>
									<div class='card-body'>
										<span>ReactJs</span>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</section>
		</React.Fragment>
	);
});

export default Skills;
