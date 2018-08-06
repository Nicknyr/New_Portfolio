import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import EuroGDP from './images/euro-medium.png';



class TestModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >

          <h2 className="modal-h2" ref={subtitle => this.subtitle = subtitle}>European GDP Choropleth Map</h2>
          <div className="modal-left">
            <img src={EuroGDP} className="project-image" />
          </div>
          <div className="modal-right">
            <p>A beautiful choropleth map of Europe that uses Leaflet.js and GeoJSON data to plot GDP by nation</p>
            <a href="/">Link to project</a>
            <button onClick={this.closeModal}>close</button>
          </div>

        </Modal>
      </div>
    );
  }
}

export default TestModal;
