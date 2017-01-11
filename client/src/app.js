var React = require('react');
var ReactDOM = require('react-dom');
var TopTwentyContainer = require('./containers/TopTwentyContainer');

window.onload = function(){
  ReactDOM.render(
    <TopTwentyContainer/>,
    document.getElementById('app')
  );
};
