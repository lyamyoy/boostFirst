import React from 'react';
import Movie from './movie.json';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={{margin: '20px', textAlign: 'center'}}>
                <iframe 
                  id="ytplayer" 
                  type="ytplayer" 
                  width="480" 
                  height="270"
                  src={this.props.url}
                  frameborder="0"
                />
            </div>
    );
  }
}

export default Youtube;