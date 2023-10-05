import React, { Component } from 'react';

import "./item-add-form.css"

export default class ItemAddForm extends Component {

  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.label);
    this.props.onItemAdded(this.state.label);
  }

  render() {

    return (
      <form className='item-add-form d-flex'
        onSubmit={this.onSubmit}>
        <input type='text'
          className='form-control'
          placeholder='What task do you want to add?'
          onChange={this.onLabelChange}></input>
        <button className='btn btn-primary'>
          Add Item
        </button>
      </form>
    )
  }
}