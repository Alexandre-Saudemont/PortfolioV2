import {useContext} from 'react';
import Particles from 'react-tsparticles';
import {useCallback} from 'react';

import {loadFull} from 'tsparticles'; // Important !
import {getParticlesOptions} from '../../assets/css/particlesjs-config-light';
import {DarkModeContext} from '../DarkMode/DarkModeContext/DarkModeContext';
function ParticlesBackground() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine); // Charge les plugins nécessaires
	}, []);

	const {backgroundColor, particlesColor} = useContext(DarkModeContext);

	return <Particles id='tsparticles' init={particlesInit} options={getParticlesOptions({backgroundColor, particlesColor})} />;
}

export default ParticlesBackground;
