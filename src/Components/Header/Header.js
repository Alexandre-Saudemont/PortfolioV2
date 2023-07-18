import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import menuclose from '../../assets/img/menu-close.svg';
import menuburger from '../../assets/img/menu-open.svg';

function Header() {
	const [toggleMenu, setToggleMenu] = useState(false);

	// On crée une fonction car en React on ne peut pas appeler le state directement dans la balise "img"
	function onClickToggleMenu() {
		setToggleMenu(!toggleMenu);
	}
	// const device = window.navigator.userAgent;
	// console.log('wind', device);

	useEffect(() => {
		// if (window.screen.width >= 1024) {
		// 	setToggleMenu(true);
		// }
	}, [toggleMenu]);

	return (
		<>
			<header className='header'>
				<input type='checkbox' id='switch' />
				<label htmlFor='switch'></label>

				<h1 className='header-title'>Portfolio</h1>
				{/* Affichage conditionnel. Si j'ai cliqué, alors j'affiche la croix pas le burger, sinon j'affiche le burger, pas la croix. mon state  ? ma condition : l'autre condition */}

				{toggleMenu ? (
					<img src={menuclose} className='header-menuburger-open' alt='menu burger close' onClick={onClickToggleMenu} />
				) : (
					<img src={menuburger} className='header-menuburger-close' alt='menu burger' onClick={onClickToggleMenu} />
				)}
				{/*  J'apelle ma fonction onClickToggleMenu qui utilise le state toggleMenu. Ici setToggleMenu change la valeur de mon state (toggleMenu). Ici mon toggleMenu est initialisé a false, avec le onClick le setToggleMenu va changer ma 
            valeur en true graçe au "!" qui fait l'inverse du toggleMenu (donc l'inverse de false) */}
			</header>
			{/* Affichage conditionnel : Si  mon toggleMenu est true alors, j'affiche la NavBar */}

			{toggleMenu && <NavBar setToggleMenu={setToggleMenu} />}
		</>
	);
}

export default Header;
