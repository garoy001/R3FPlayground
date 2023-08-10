import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import '/_styling.scss';
import { Modal } from './assets/components/modal.jsx';
import { Instructions } from './assets/components/instructions.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		{/* <Modal /> */}

		<App />
	</>
);
