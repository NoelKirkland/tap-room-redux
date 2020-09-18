import React from 'react';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import SellPintForm from './SellPintForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class TapRoom extends React.Component {

  constructor(props){
    super(props);
    this.state = {
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
    const editedMasterTapList = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToUpdate);
    this.setState({
      masterTapList: editedMasterTapList,
      selectedTap: tapToUpdate,
      updatingPints: false,
    });
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TAP',
      id: id
    }
    dispatch(action);
    this.setState({selectedTap: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToUpdate) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, pints, id } = tapToUpdate;
    const action = {
      type: 'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      pints: pints,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTap: tapToUpdate
    })
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, id } = newTap;
    const action = {
      type: 'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      pints: 124,
      id: id
    }
    dispatch(action);
  }

  handleClick = () => {
    if(this.state.selectedTap != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        updatingPints: false,
        editing: false
      });
    } else {
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currentlyVisibleState = <EditTapForm
      tap = {this.state.selectedTap}
      onEditTap = {this.handleEditingTapInList} />
      buttonText = "Return to Tap List";
    } else if (this.state.updatingPints){
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
      tapList={this.props.masterTapList} 
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

TapRoom.propTypes = {
  masterTapList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTapList: state,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TapRoom = connect(mapStateToProps)(TapRoom);

export default TapRoom;