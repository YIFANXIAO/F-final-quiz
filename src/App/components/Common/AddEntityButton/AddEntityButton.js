import React from 'react';
import "./AddEntityButton.scss"
//TODO feedback: 无用的代码需要删除
import { createTrainer, getTrainees, getTrainers } from '../../../../actions';
import { connect } from 'react-redux';
import { TRAINEE, TRAINER } from '../Constant';
//TODO feedback: 就，组件的命名的时候你是站在业务逻辑的角度，不是技术的角度。比如叫AddPerson
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
      if (this.props.buttonType === TRAINER) {
        //TODO feedback: 这里命名叫handleCreateTrainer很不合适哈。
        // 因为我们在定义一个组件的时候，应该从它自己的角度出发，而不是它被用在什么地方。所以，组件的props应该要general.
        // 你这里叫handleCreateTrainer就太具体了。
        // 在这个页面(https://reactjs.org/docs/components-and-props.html)搜索关键字'own point of view'
        this.props.handleCreateTrainer(e.target.value);
      }
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

const mapDispatchToProps = dispatch => ({
  handleCreateTrainer(name) {
    dispatch(createTrainer(name));
  },
});

export default connect(null, mapDispatchToProps)(AddEntityButton);