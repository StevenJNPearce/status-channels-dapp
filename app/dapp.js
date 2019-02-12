import React from 'react';
import ReactDOM from 'react-dom';

import EmbarkJS from 'Embark/EmbarkJS';
import ChannelList from './components/ChannelList';

import './tachyons.min.css';
import './style.css';

import { getChannels } from './utils';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isStatus: false
    };
    this.channels = getChannels();
  }

  componentWillMount() {
    alert('mount')
    if (window.ethereum) {
      alert('eth')
      await window.ethereum.enable();
      if (window.ethereum.isStatus) {
        alert('status')
        this.setState({isStatus: true});
      }
    }
  }

  render() {
    return (<div>
      <ChannelList isStatus={this.state.isStatus} channels={this.channels} />
    </div>);
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));
