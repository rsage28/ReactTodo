var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/">
            <Route></Route>
            <IndexRoute></IndexRoute>
        </Route>
    </Router>, 
    document.getElementById('app')
);