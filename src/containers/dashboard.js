import React, { Component } from 'react';
import Example from '../components/example'



// Dashboard container
class DashBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      testValue: 'BeforeClick'
    };   
  }
  
  // Handle clicking 
  handleClick(event) {
    this.setState({ testValue: 'After click'});

    if (this.state.testValue === 'AFTER CLICKING') {
      alert(this.state.testValue);
    } else {
      alert('this.setState is too async');
    }
  }
  
  // Render Dashboard
  render() {
    return (      
      <div>
        <h1 
        className="dashboard-title"
        onClick={this.handleClick.bind(this)}
      >
        This will be our dashboard (click me)
        {this.state.testValue}
      </h1>

      <div>
        <Example />
      </div>
      </div>
    );
  }
}

export default DashBoard

// ---------- Don't worry about this stuff below -------------

// import * as actions from '../actions/actions_index';
// import * as actUtils from '../actions/action_utils';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import _ from 'lodash';

// // Map the redux data to this.props
// const mapStateToProps = (state) => {
//   return {
//     gameBoard: state.gameBoard
//   };
// }

// // Map redux actions to this.prop
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

// // Connect props to actions
// export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);