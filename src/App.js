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
				<h1>FM Second Example</h1>
			</div>
		</>
	);
}

export default App;
