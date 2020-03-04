import React, { Component } from 'react'
import './Product.css';
import Modal from 'react-modal';
import ProductOverview from './ProductOverview';

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
      this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  render() {

    const { name, text, cost } = this.props.item;

    return (
      <div className="product col-xs-12 col-sm-6 col-md-3">
        <span className="product-name">{name}</span>
        <span className="divider"></span>
        <span className="product-text">{text}</span>
        <span className="product-price">£ {cost}</span>
        <button className="btn" onClick={this.openModal}>See Product</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Product Modal"
          onRequestClose={this.closeModal}
          ariaHideApp={false}
        >
          <button className="close-modal" onClick={this.closeModal}>x</button>
          <ProductOverview item={this.props.item} />
        </Modal>
      </div>
    );
  }
}

export default Product;
