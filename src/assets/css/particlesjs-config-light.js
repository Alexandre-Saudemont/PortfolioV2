// particlesOptions.js
export const getParticlesOptions = ({backgroundColor, particlesColor}) => ({
	background: {
		color: backgroundColor,
	},
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: particlesColor,
		},
		shape: {
			type: 'circle',
		},
		opacity: {
			value: 0.5,
			random: true,
		},
		size: {
			value: 5,
			random: true,
		},
		move: {
			enable: true,
			speed: 0.35,
			direction: 'none',
			out_mode: 'bounce',
		},
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: 'repulse',
			},
			onclick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			repulse: {
				distance: 100,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
		},
	},
	retina_detect: true,
});
