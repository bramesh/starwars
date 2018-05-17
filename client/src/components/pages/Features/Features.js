import React, { Component } from 'react';
import {getFeatures} from '../../../common/utils.js';


class Features extends Component {
  state = {
    features: []
  };

  showFeatures = () => {
    getFeatures().then((features) => {
      this.setState({features})
    })
    console.log(this.state)
  }

  componentDidMount() {
    this.showFeatures();
  }


  render() {
    return (
      <div className="Home">
        <p className="Home-intro">Features</p>
      </div>
    );
  }
}

export default Features;
