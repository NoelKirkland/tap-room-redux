import React from 'react';

class TapRoom extends React.Component {

  constructor(){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null
    };
  }

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({masterTapList: newMasterTapList, formVisibleOnPage: false});
  }

  render(){

    return(
      <React.Fragment>

      </React.Fragment>
    )
  }
}

export default TapRoom;