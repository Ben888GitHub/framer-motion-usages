import './App.css';

import { motion } from 'framer-motion';
import { useState } from 'react';
// * motion component is a wrapper that use to animate element
// * inital props is to define the base style as initial state before the animation made by animate props
// * animate props is to run the animation on the element
// * transition props is to define the timing of the animation, such as duration, delay, easing
function App() {
	// create a state to whether or not we wanna rotate the square
	const [rotate, setRotate] = useState(false);
	const [move, setMove] = useState(false);

	return (
		<>
			<div className="App">
				<h1>Hello</h1>
				<div>
					<button onClick={() => setRotate(!rotate)}>Rotate</button>
					<button onClick={() => setMove(!move)}>Move</button>
				</div>

				{/* Basic Animation, with functional Controls */}
				<div className="square-parent">
					<motion.div
						animate={{
							y: 100,
							scale: 1, // scale is the size
							rotate: rotate ? 360 : 0,
							x: move ? 200 : 0
						}}
						initial={{
							// base style before animation
							scale: 0
						}}
						transition={{
							// delay: 1, // it takes each 1 second to run each animation
							// type is to specify type of animation transition or interpolation

							type: 'spring'
							// bounce: 5 // with 'spring' type and no duration
							// stiffness: 50 // with 'spring' type and no duration
							//duration: 0.1 // duration is the speed of animation
						}}
						className="square-object"
					></motion.div>
				</div>

				<br />
				<br />
				<br />

				{/* Animation on Hover */}
				<div className="square-parent">
					<motion.div
						animate={{
							y: 100,
							scale: 1 // scale is the size
							// rotate: rotate ? 360 : 0,
							// x: move ? 200 : 0
						}}
						initial={{
							// base style before animation
							scale: 0
						}}
						whileHover={{
							scale: 1.5
						}}
						// whileHover={{
						// 	scale: 2,
						// 	x: 200
						// }}
						className="square-object"
					></motion.div>
				</div>
				<br />
				<br />
				<br />

				{/* Animation on Drag */}
				<div className="square-parent">
					<motion.div
						animate={{
							y: 100,
							scale: 1 // scale is the size
							// rotate: rotate ? 360 : 0,
							// x: move ? 200 : 0
						}}
						initial={{
							// base style before animation
							scale: 0
						}}
						whileDrag={{
							scale: 1.5
						}}
						drag
						// drag="x"
						dragConstraints={{ left: 50, right: 300, bottom: 300, top: 0 }}
						className="square-object"
					></motion.div>
				</div>

				<br />
				<br />
				<br />

				{/* Keyframe Animation */}
				<div className="square-parent">
					<motion.div
						animate={{
							y: 100,
							scale: [1, 2, 2, 1, 1], // scale is the size
							rotate: [0, 200, 200, 200, 200, 0],
							borderRadius: ['0%', '0%', '50%', '50%', '20%'],
							x: [0, 200, 200, 200, 200, 0, -200, -200, 0]
						}}
						initial={{
							// base style before animation
							scale: 0
						}}
						transition={{
							duration: 2,
							ease: 'easeInOut'
							// repeat: 2,
							// times: [0, 0.2, 0.5, 0.8, 1]
							// repeat: Infinity,
							// repeatDelay: 1
						}}
						className="square-object"
					></motion.div>
				</div>

				<br />
				<br />
				<br />
				<div className="square-parent">
					<motion.div
						animate={{
							y: 100,
							borderRadius: '50%',
							opacity: 1
						}}
						initial={{
							opacity: 0
						}}
						transition={{
							repeat: Infinity,
							repeatType: 'reverse',
							duration: 2
						}}
						className="square-object"
					></motion.div>
				</div>
			</div>
		</>
	);
}

export default App;
