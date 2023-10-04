import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false,
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      }
    })
  }
  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    })
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    const baseClassItem = 'todo-list-item d-flex justify-content-between';
    let classItem = done ? `${baseClassItem} done` : baseClassItem;
    classItem += important ? ' important' : '';
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className={classItem}>
        <span
          className='todo-list-item-label'
          style={style}
          onClick={this.onLabelClick}>
          {label}
        </span>
        <div className='control-item'>
          <button type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}>
            <i className="fa fa-trash" />
          </button>

          <button type="button"
            className="btn btn-outline-success btn-sm"
            onClick={this.onMarkImportant}>
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </span>
    );
  }
}
