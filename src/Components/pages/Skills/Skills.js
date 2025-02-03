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

	const handleFlip = (id) => {
		setIsFlipped((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<div className='skills'>
			<section ref={ref}>
				<div
					className={`skills-container d-flex flex-wrap justify-content-center align-items-center my-3 mx-auto pt-4 ${
						isDarkMode ? 'darkMode' : 'lightMode'
					}`}
					style={{width: '90%', borderRadius: '1rem'}}>
					<div className=' d-flex flex-wrap flip-card' onClick={() => handleFlip(1)}>
						<div
							className={` raw d-flex flex-wrap justify-content-center align-item-center flip-card-inner  ${
								isFlipped[1] ? 'flipped' : ''
							}  `}>
							{/* Carte qui se retourne */}
							<div className={'d-flex flex-column align-items-center flip-card-front '}>
								<img src={isDarkMode ? reactIconDark : reactIcon} alt='icon react' className='skills-front-react' />
							</div>
							{/* Face arrière de la carte */}
							<div className={`d-flex flex-column align-items-center flip-card-back`}>
								<div className='card-body'>
									<span className='skills-front-react-text'>ReactJs</span>
								</div>
							</div>
						</div>
					</div>
					<div className='  d-flex flex-wrap flip-card' onClick={() => handleFlip(2)}>
						<div
							className={`raw d-flex flex-wrap justify-content-center align-item-center  flip-card-inner ${
								isFlipped[2] ? 'flipped' : ''
							} `}>
							<div className=' d-flex align-items-center flip-card-front'>
								<img src={isDarkMode ? javascriptIconDark : javascriptIcon} alt='icon js' className='skills-front-js' />
							</div>
							<div className=' d-flex  align-items-center flip-card-back'>
								<div className='card-body'>
									<span className='skills-front-js-text'>JavaScript</span>
								</div>
							</div>
						</div>
					</div>
					<div className='  d-flex flex-wrap flip-card' onClick={() => handleFlip(3)}>
						<div
							className={`raw d-flex flex-wrap justify-content-center align-item-center rounded-5 flip-card-inner ${
								isFlipped[3] ? 'flipped' : ''
							} `}>
							<div className=' d-flex align-items-center flip-card-front'>
								<img src={isDarkMode ? htmlIconDark : htmlIcon} alt='icon html' className='skills-front-html' />
							</div>
							<div className=' d-flex  align-items-center flip-card-back'>
								<div className='card-body'>
									<span className='skills-front-html-text'>HTML 5</span>
								</div>
							</div>
						</div>
					</div>
					<div className='  d-flex flex-wrap flip-card' onClick={() => handleFlip(4)}>
						<div
							className={`raw d-flex flex-wrap justify-content-center align-item-center rounded-5 flip-card-inner ${
								isFlipped[4] ? 'flipped' : ''
							} `}>
							<div className=' d-flex align-items-center flip-card-front'>
								<img src={isDarkMode ? cssIconDark : cssIcon} alt='icon css' className='skills-front-css' />
							</div>
							<div className=' d-flex  align-items-center flip-card-back'>
								<div className='card-body'>
									<span className='skills-front-css-text'>CSS 3</span>
								</div>
							</div>
						</div>
					</div>
					<div className='  d-flex flex-wrap flip-card' onClick={() => handleFlip(5)}>
						<div
							className={`raw d-flex flex-wrap justify-content-center align-item-center rounded-5 flip-card-inner ${
								isFlipped[5] ? 'flipped' : ''
							} `}>
							<div className=' d-flex align-items-center flip-card-front'>
								<img src={isDarkMode ? nodejsDark : nodejs} alt='icon nodejs' className='skills-back-nodejs' />
							</div>
							<div className=' d-flex  align-items-center flip-card-back'>
								<div className='card-body'>
									<span className='skills-back-nodejs-text'>NodeJs</span>
								</div>
							</div>
						</div>
					</div>
					<div className='  d-flex flex-wrap flip-card' onClick={() => handleFlip(6)}>
						<div
							className={`raw d-flex flex-wrap justify-content-center align-item-center rounded-5 flip-card-inner ${
								isFlipped[6] ? 'flipped' : ''
							} `}>
							<div className=' d-flex align-items-center flip-card-front'>
								<img src={isDarkMode ? expressjsDark : expressJs} alt='icon expressJs' className='skills-back-expressjs' />
							</div>
							<div className=' d-flex  align-items-center flip-card-back'>
								<div className='card-body'>
									<span className='skills-back-expressjs-text'>ExpressJs</span>
								</div>
							</div>
						</div>
					</div>
					<div className='  d-flex flex-wrap flip-card' onClick={() => handleFlip(7)}>
						<div
							className={`raw d-flex flex-wrap justify-content-center align-item-center rounded-5 flip-card-inner ${
								isFlipped[7] ? 'flipped' : ''
							} `}>
							<div className=' d-flex align-items-center flip-card-front'>
								<img src={isDarkMode ? psqlDark : psql} alt='icon expressJs' className='skills-back-psql' />
							</div>
							<div className=' d-flex  align-items-center flip-card-back'>
								<div className='card-body'>
									<span className='skills-back-psql-text'>PostgreSQL</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div class='row  d-flex flex-wrap flip-card' onClick={handleFlip}> */}
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
				{/* </div> */}
			</section>
		</div>
	);
});

export default Skills;
