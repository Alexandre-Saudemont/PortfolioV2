import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar({setToggleMenu}) {
	// const toggleTrad = useOutletContext();

	useEffect(() => {}, []);
	// const [testCondition, setTestCondition] = useState();

	// function responsive() {
	// 	if (window.screen.width >= 1024) {
	// 		setTestCondition(window.screen.width >= 1024);
	// 	} else {
	// 		setTestCondition(!toggleMenu);
	// 	}
	// }

	return (
		<div className='navbar'>
			<nav className='navbar-container'>
				<ul className='navbar-items'>
					<NavLink
						className='navbar-navlink'
						to='/'
						onClick={() => {
							setToggleMenu(false);
						}}></NavLink>
					<NavLink
						className='navbar-navlink'
						to='/Projects'
						onClick={() => {
							setToggleMenu(false);
						}}></NavLink>
					<NavLink
						className='navbar-navlink'
						to='/AboutMe'
						onClick={() => {
							setToggleMenu(false);
						}}></NavLink>
					<NavLink
						className='navbar-navlink'
						to='/Contact'
						onClick={() => {
							setToggleMenu(false);
						}}>
						Contact
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/CV'
						onClick={() => {
							setToggleMenu(false);
						}}>
						CV
					</NavLink>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
