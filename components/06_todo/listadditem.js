import React from 'react';

export default class ListAddItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      inputText: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.makeActive = this.makeActive.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.inputText); 
    this.setState({
      inputText: '',
      isActive: false,
    });
  }

  handleCancel() {
    this.setState({
      inputText: '',
      isActive: false,
    });
  }

  makeActive() {
    this.setState({isActive: true});
    
  }
  
  render() {
    return (
      <div>
        { this.state.isActive ?
          <form onSubmit={this.handleSubmit}>
            <input 
              className="inputItemText"
              value={this.state.inputText}
              onChange={(e) => this.setState({inputText: e.target.value})} 
            />
            <button 
              className="submitItem"
              type="submit"
            >
              Submit
            </button>
            <button
              className="cancelSubmit"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </form>
          :
          <button 
            className="displayInputButton"
            onClick={this.makeActive} > Add Item </button>
        }
      </div>
    );
  }
}