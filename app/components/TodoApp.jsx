var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1, 
                    text: 'Walk cat'
                },
                {
                    id: 2, 
                    text: 'Feed human'
                },
                {
                    id: 3,
                    text: 'Slap person'
                },
                {
                    id: 4,
                    text: 'Get tv'
                }
            ]
        }
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;