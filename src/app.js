import 'normalize.css';

import React, {Component} from 'react';
import DashBoard from './containers/DashBoard';

export default class App extends Component {
   render() { 
    return (
    <div>
      <div className="dashboard-container">
        <DashBoard /> 
      </div>
    </div>
    );
  }
}
