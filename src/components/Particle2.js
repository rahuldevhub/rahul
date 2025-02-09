import React from 'react'
import Particles from 'react-particles-js';

function Particle2 () {
  return (
    <Particles
			params={{
				"particles": {
					"number": {
						"value": 50
					},
					"size": {
						"value": 3
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						}
					}
				}
			}} />
  );
}

export default Particle2