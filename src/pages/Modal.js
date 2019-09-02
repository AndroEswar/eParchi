import React from 'react';

export class Modal extends React.PureComponent {
	render() {
		const {children, onClose, isOpen} = this.props;
		const modalStyle = {display: 'block', zIndex: 1003, top: isOpen ? '10%' : '-9999px', opacity: isOpen ? 1 : 0, transition: 'opacity 0.5s'};
		const overlayStyle = {display: 'block', top: isOpen ? 0 : '-9999px', opacity: isOpen ? 0.5 : 0, transition: 'opacity 1s'};
		return <div>
			<div className='modal-overlay' style={overlayStyle} onClick={onClose}></div>
			<div className={`modal ${isOpen ? 'open fade fade-in' : 'fade-out'}`} style={modalStyle}>
				{isOpen && <div className='modal-content'>
					{children}
				</div>}
			</div>
		</div>;
	}
}
