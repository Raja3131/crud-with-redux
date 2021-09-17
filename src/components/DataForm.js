import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/DataActions"
import { bindActionCreators } from "redux";
import {Form,Label,Button} from "react-bootstrap"
import './Data.css'

class DataForm extends Component {

    state = {
        ...this.returnStateObject()
    }
   
    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                name: '',
                date: new Date(),
                profession:''
            }
        else
            return this.props.list[this.props.currentIndex]
    }
    handleChangeselect = () => {
        this.setState({
            profession : this.state.profession,
       });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }
    handleChangeselect(e) {

        this.setState({ profession: e.target.value });
      }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }

    render() {
        return (
            <Form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                      <Form.Label id="formlabel" column sm="4">Name:</Form.Label>

                <Form.Control id="formcontrol" style={{ width: 220}} name="name" type="text" placeholder="Enter Name" onChange={this.handleInputChange} value={this.state.name} /><br />
                <Form.Label id="formlabel" column sm="6">Date:</Form.Label>

                <Form.Control id="formdate" style={{ width: 220 }} name="date" type="date" placeholder="" onChange={this.handleInputChange} value={this.state.date} /><br />
                <Form.Label id="label" column sm="4">Profession:</Form.Label>

                <select id="selectvalue"
          name="profession"
          onChange={this.handleInputChange}
          value={this.state.profession}
        >
          <option value="select">Select</option>

          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Pro">Pro</option>


        </select><br/>
                <Button variant="primary" type="submit"  style={{ width: 80 }}>Submit</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataForm)