import './App.css';
import WithVariants from './components/WithVariants';
import logo from './logo.svg';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

// * motion component is a wrapper that use to animate element
// * inital props is to define the base style as initial state before the animation made by animate props
// * animate props is to run the animation on the element
// * transition props is to define the timing of the animation, such as duration, delay, easing
function App() {
	// create a state to whether or not we wanna rotate the square
	const [rotate, setRotate] = useState(false);
	const [move, setMove] = useState(false);
	const constraintsRef = useRef(null);

	return (
		<>
			<div className="App">
				<main>
					<motion.div
						// initial={{ opacity: 0.25 }}
						// animate={{ rotate: 360, opacity: 1 }}
						animate={{ rotate: 360 }}
						transition={{
							repeat: Infinity,
							ease: 'linear',
							// repeatType: 'mirror',
							duration: 5
						}}
						// whileHover={{ scale: 1.25 }}
						// whileTap={{ scale: 0.5, duration: 0.5 }}
						// whileTap={{ duration: 0.5 }}
						drag
						dragConstraints={{
							top: -50,
							left: -50,
							right: 50,
							bottom: 50
						}}
						// dragConstraints={constraintsRef}
						// dragConstraints={{ left: 300, right: 200, bottom: 50, top: 200 }}
					>
						<img src={logo} className="App-logo" alt="logo" />
					</motion.div>
				</main>
				<h1>FM Second Example</h1>
				<WithVariants />
				<br />
				<motion.h1
					animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
					transition={{
						duration: 5,
						delay: 0.3,
						ease: [0.5, 0.71, 1, 1.5]
					}}
					initial={{ opacity: 0, scale: 0.5 }}
					whileHover={{ scale: 1.2 }}
				>
					Animation made easy with Framer Motion
				</motion.h1>
			</div>
		</>
	);
}

export default App;
