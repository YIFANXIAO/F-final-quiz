import React from 'react';
import "./AddEntityButton.scss"
import { createTrainer, getTrainees } from '../../../../actions';
import { connect } from 'react-redux';

class AddEntityButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }

  handleChangeToEdit = () => {
    this.setState({
      isEdit: true
    })
  }

  handleExistEdit = () => {
    this.setState({
      isEdit: false
    })
  }

  CheckBrowserIsIE = () => {
    let result = false;
    const browser = navigator.appName;
    if(browser === "Microsoft Internet Explorer"){
      result = true;
    }
    return result;
  }

  handleEnterEvent = (e) => {
    let keycode = 0;
    if(this.CheckBrowserIsIE()){
      keycode = e.keyCode;
    }else{
      keycode = e.which;
    }
    if (keycode === 13 )
    {
      this.handleExistEdit();
      this.props.handleCreateTrainer(e.target.value);
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        {this.state.isEdit ?
          <input type="text" onKeyUp={this.handleEnterEvent}/> :
          <button type="button" onClick={this.handleChangeToEdit}>{ `+ ${this.props.placeHolderName}`}</button>}
      </div>
    );
  }
}

const mapStateToProps = ({ trainees }) => ({
  trainees
});

const mapDispatchToProps = dispatch => ({
  handleCreateTrainer(name) {
    dispatch(createTrainer(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntityButton);