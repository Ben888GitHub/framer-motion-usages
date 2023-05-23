import { useState } from 'react';
import { motion } from 'framer-motion';

// * Variants define reusable set of animation props that can be applied to different elements or states
// * Useful when you have animations involving multiple elements such as list items

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '-100%' }
};

const WithVariants = () => {
	const [isOpen, setIsOpen] = useState(false);
	const options = ['Option 1', 'Option 2', 'Option 3'];

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="select-menu">
			<motion.div
				className="select-header"
				onClick={handleToggle}
				initial={{ backgroundColor: 'white' }}
				animate={{ backgroundColor: isOpen ? 'gray' : 'white' }}
			>
				Select an option
			</motion.div>
			{isOpen && (
				<motion.ul
					className="select-options"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
				>
					{options.map((option) => (
						<motion.li
							key={option}
							onClick={handleToggle}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							{option}
						</motion.li>
					))}
				</motion.ul>
			)}
		</div>
	);
};

export default WithVariants;
