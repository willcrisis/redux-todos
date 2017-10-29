import React, { PureComponent } from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends PureComponent {
    render() {
        return (
            <div className="App">
                <AddTodo/>
                <VisibleTodoList filter={this.props.match.params.filter || 'SHOW_ALL'}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
