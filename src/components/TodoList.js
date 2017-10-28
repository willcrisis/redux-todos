import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends PureComponent {
    render() {
        const {
            todos,
            onTodoClick
        } = this.props;
        return (
          <ul>
              {todos.map((todo, index) =>
                <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
              )}
          </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};
