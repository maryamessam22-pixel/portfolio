import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
	useEffect(() => {
		if (title) document.title = title;
		if (description) {
			const existing = document.querySelector('meta[name="description"]');
			if (existing) {
				existing.setAttribute('content', description);
			} else {
				const meta = document.createElement('meta');
				meta.name = 'description';
				meta.content = description;
				document.head.appendChild(meta);
			}
		}
	}, [title, description]);

	return null;
};

export default SEO;