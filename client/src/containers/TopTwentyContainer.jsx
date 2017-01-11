var React = require('react');
var SongTable = require('../components/SongTable');

var TopTwentyContainer = React.createClass({

  getInitialState: function(){
    return({ songs: [] })
  },

  componentDidMount: function(){
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function () {
      var data = JSON.parse(request.responseText);

      this.setState({
        songs: data.feed.entry
      });
    }.bind(this);
    request.send(null);
  },


  render: function(){
    return(
      <div className='top-container'>
        <h1>Top 20 Shitty Music</h1>
        <ul>
          <SongTable
            songs={this.state.songs}/>
        </ul>
      </div>
    )
  }

});

module.exports = TopTwentyContainer;
