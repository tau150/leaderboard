import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastsCampers, fetchAllCampers } from '../actions'
import Camper from '../components/camper'
import _ from 'lodash';


class Grid extends Component{



  componentDidMount(){
      this.handlePast30();
  }


renderCampers(){
    let counter = 0;
    return _.map(this.props.campers, camper => {
      counter++;
      return (

         <Camper counter={ counter } username={camper.username} recent={camper.recent} alltime={camper.alltime} img={camper.img}  />
      )
    })
}

handleAllTimes(){
  this.props.fetchAllCampers();
}

handlePast30(){
  this.props.fetchLastsCampers();
}



  render(){

    if(!this.props.campers) return null;

    return(
      <div className='container'>
      <div className="col-xs-12 text-center container-table">
        <h3>Leaderborad</h3>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th className='text-center selectable' onClick={( ) => this.handlePast30()} >Points in past 30 days <span className="oi oi-caret-bottom"></span> </th>
            <th className='text-center selectable' onClick={( ) => this.handleAllTimes()}>All time points  <span className="oi oi-caret-bottom"></span> </th>
          </tr>
        </thead>
        <tbody>
            { this.renderCampers() }
        </tbody>
        </table>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    campers: state.campers
  }
}


export default connect(mapStateToProps, { fetchLastsCampers, fetchAllCampers }) (Grid);
