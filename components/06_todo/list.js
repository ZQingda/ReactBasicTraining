import React from 'react';
import ListItem from './listitem';
import ListAddItem from './listadditem';

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listItems: [],
    };
    this.addItem = this.addItem.bind(this);
  }
  
  addItem(item){
    const listItemsClone = this.state.listItems.slice(0); /* Shallow clone */
    listItemsClone.push(item);
    this.setState({
      listItems: listItemsClone,
    })
  }
  
  deleteItem(idx){
    const listItemsClone = this.state.listItems.slice(0); /* Shallow clone */
    listItemsClone.splice(idx, 1);
    this.setState({
      listItems: listItemsClone,
    })
  }
  
  render() {
    return (
      <div>
        <ListAddItem addItem={this.addItem} />
        <ul className="list">
          {
            this.state.listItems.map((item, idx) => 
              <ListItem 
                onDelete={() => this.deleteItem(idx)}
                text={item} 
                key={idx}  
              />
            )
          }
        </ul>
        <span> You have {this.state.listItems.length} thing(s) to do. </span>
      </div>
    );
  }
}