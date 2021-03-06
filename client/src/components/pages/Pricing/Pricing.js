import React, { Component } from 'react';

class Pricing extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <div className="Home">
        <p className="Home-intro">
          Pricing
        </p>
        <p className="Home-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default Pricing;
