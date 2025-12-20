import React, { useMemo } from 'react';
import './GlassyCircles.css';

const DEFAULT_COLORS = [
	'rgba(167, 139, 250, 0.35)',   
	'rgba(236, 201, 75, 0.25)',   
	'rgba(129, 230, 217, 0.25)',  
	'rgba(251, 182, 206, 0.3)',   
	'rgba(196, 181, 253, 0.28)',  
	'rgba(167, 243, 208, 0.28)'  
];

function generateCircles(count, colors) {
	const circles = [];
	for (let i = 0; i < count; i++) {
		const size = Math.floor(Math.random() * 180) + 80; 
		const top = Math.floor(Math.random() * 85); 
		const left = Math.floor(Math.random() * 85);
		const duration = Math.random() * 20 + 18; 
		const delay = Math.random() * -15; 
		const blur = Math.random() * 8 + 6; 
		const color = colors[i % colors.length];
		circles.push({ id: i, size, top, left, duration, delay, blur, color });
	}
	return circles;
}

const GlassyCircles = ({ count = 12, colors = DEFAULT_COLORS }) => {
	const circles = useMemo(() => generateCircles(count, colors), [count, colors]);
	return (
		<div className="glassy-circles-container" aria-hidden="true">
			{circles.map(c => (
				<div
					key={c.id}
					className="glassy-circle"
					style={{
						width: c.size,
						height: c.size,
						top: `${c.top}%`,
						left: `${c.left}%`,
						animationDuration: `${c.duration}s`,
						animationDelay: `${c.delay}s`,
						background: c.color,
						filter: `blur(${c.blur}px)`
					}}
				/>
			))}
		</div>
	);
};

export default GlassyCircles;


