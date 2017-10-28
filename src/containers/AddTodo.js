import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends PureComponent {

    onSubmit = e => {
        e.preventDefault();
        if (!this.input.value.trim()) {
            return
        }
        this.props.onAddTodo(this.input.value);
        this.input.value = '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input ref={node => this.input = node} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: text => {
            dispatch(addTodo(text))
        }
    }
};

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;