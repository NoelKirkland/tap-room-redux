import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import SellPintForm from './SellPintForm'

class TapRoom extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null,
      updatingPints: false,
      editing: false
    };
  }

  handleSellingPint = (tapToUpdate) => {
    if(tapToUpdate.pints > 0){
      tapToUpdate.pints--
    }
    const editedMasterTapList = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToUpdate);
    this.setState({
      masterTapList: editedMasterTapList,
      updatingPints: false
    });
  }

  handleSellPintClick = () => {
    this.setState({updatingPints: true});
  }

  handleUpdatingTapVolume = (tapToUpdate) => {
    const editedMasterTapLIst = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToUpdate);
    this.setState({
      masterTapList: editedMasterTapLIst,
      selectedTap: tapToUpdate,
      updatingPints: false,
    });
  }

  handleDeletingTap = (id) => {
    const newMasterTapList = this.state.masterTapList
    .filter(tap => tap.id !== id);
    this.setState({
      masterTapList: newMasterTapList,
      selectedTap: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  // handleEditingTapInList = (tapToUpdate) => {

  // }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({masterTapList: newMasterTapList, formVisibleOnPage: false});
  }

  handleClick = () => {
    if(this.state.selectedTap != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        updatingPints: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.updatingPints){
      currentlyVisibleState = <SellPintForm
        tap = {this.state.selectedTap}
        onUpdatingTapVolume = {this.handleUpdatingTapVolume} />
      buttonText = "Return to Tap List";
    } else if (this.state.selectedTap != null){
      currentlyVisibleState = <TapDetail 
        tap = {this.state.selectedTap}
        onClickingSoldCustomAmount={this.handleSellPintClick}
        onClickingSoldPint = {this.handleSellingPint} 
        onClickingEdit = {this.handleEditClick}
        onClickingDelete = {this.handleDeletingTap} />;
      buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTapForm 
        onNewTapCreation={this.handleAddingNewTapToList} />
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList 
      tapList={this.state.masterTapList} 
      onTapSelection={this.handleChangingSelectedTap} />;
      buttonText = "Add Tap to List";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default TapRoom;