import React, { Component } from 'react'
import DataForm from './DataForm'
import { connect } from "react-redux";
import * as actions from "../actions/DataActions"
import { bindActionCreators } from "redux";
import {Table,Button} from "react-bootstrap";
import './Data.css'

class DataList extends Component {
    


    handleEdit = (index) => {
        this.props.updateDataIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteData(index)
    }

    render() {
        return (
            <div>
                <DataForm />
                <hr />
                <Table border="1" style={{ width: 400, paddingTop: 5 }}>
                <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Profession</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
                    <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.profession}</td>
                                <td>{item.radio}</td>

                                <td><Button variant="secondary " onClick={() => this.handleEdit(index)}>Edit</Button></td>
                                <td><Button variant="danger" onClick={() => this.handleDelete(index)}>Delete</Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateDataIndex: actions.updateIndex,
        deleteData: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)