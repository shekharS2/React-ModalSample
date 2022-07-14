import { useState } from 'react';
import Modal from './components/Modal';

import './App.css';

function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className='app-container'>
			<div className='app-content'>
				<h1>Modal</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>			
			</div>
			<div className='app-btn-container'>
				<button onClick={() => setShowModal(true)}>Show Modal</button>
				{showModal && (
					<Modal setShowModal={setShowModal}>
						<h1>Modal</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</Modal>
				)}
			</div>
		</div>
	);
}

export default App;
