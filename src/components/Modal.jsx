import ReactDOM from "react-dom";

function Modal(props) {
	return ReactDOM.createPortal(
		<>
			<div className="modal-overlay" onClick={() => props.setShowModal(false)} />
			<div className="modal-container">
				<div className="modal-body">
					{props.children}
				</div>	
				<footer className="modal-footer">
					<button className="modal-close-btn" onClick={() => props.setShowModal(false)}>Close</button>
				</footer>
			</div>
		</>,
		document.getElementById('portal')
	);
};

export default Modal;