import React, { Component } from 'react'
import axios from 'axios'
export class CRUD extends Component {
    constructor(props) {
        super(props)
        this.state = { prodata: [], ename: '', salary: 0, designation: '',updateRow:1,id:0}
    }

    handle = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    componentDidMount() {
        this.call()
    }


    add = (event) => {
        event.preventDefault()
        const URL = "http://localhost:3000/employee"
        axios.post(URL, {
            ename: this.state.ename, 
            salary: this.state.salary, 
            designation: this.state.designation
            })
            .catch(err => { console.log(err) })
            this.call()
    }


    delete = (id) => {
        const URL = `http://localhost:3000/employee/${id}`
        console.log(URL)
        axios.delete(URL)
        .catch(err => { console.log(err) })
        window.location.reload(false);
        this.call()
    }
    updateForm = (id) => {
        // const URL = `http://localhost:3000/employee/${id}`
        // axios.put(URL,
        //  {

        //     id: id, ename: prompt("Enter name"),
        //     salary: prompt("Enter salary"),
        //     designation: prompt("Enter designation")
        // }

        // )
        //     .catch(err => { console.log(err) })
        // this.call()
        // console.log(id)
        this.setState({updateRow:0 })
        this.setState({id:id})
        // this.update(id)

    }
    update = (id) => {
        console.log(id)
        // const URL = `http://localhost:3000/employee/${id}`
        // axios.put(URL,
        //  {

        //     id: id, ename: prompt("Enter name"),
        //     salary: prompt("Enter salary"),
        //     designation: prompt("Enter designation")
        // }

        // )
        //     .catch(err => { console.log(err) })
        // this.call()
    }

    call = () => {
        const URL = "http://localhost:3000/employee"
        axios.get(URL)
            .then(res => {
                this.setState({ prodata: res.data })
            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <div className="container bg-dark text-uppercase text-light" >
                <h2 className="text-center ">Employee Details</h2>
                {this.state.updateRow?  <div className="container form-group " >
                    <h3 className='text-center'>Add Data</h3>
                    <form onSubmit={this.add}>
                        <label>Name</label>
                        <input type="text" name="ename" className="form-control" onChange={this.handle} />
                        <label>Salary</label>
                        <input type="number" name="salary" className="form-control" onChange={this.handle} />
                        <label>Designation</label>
                        <input type="text" name="designation" className="form-control" onChange={this.handle} /><br />
                        <input type="submit" value="Add" className="btn btn-success" />
                    </form>
                </div>:
                <div className="container form-group " >
                    <h3 className='text-center'>Update Data for id-<span style={{fontFamily:"cursive"}} className="text-danger">{this.state.id}</span></h3>
                    <form >
                        <label>Name</label>
                        <input type="text" name="ename" className="form-control" onChange={this.handle} />
                        <label>Salary</label>
                        <input type="number" name="salary" className="form-control" onChange={this.handle} />
                        <label>Designation</label>
                        <input type="text" name="designation" className="form-control" onChange={this.handle} /><br />
                        <input type="submit" onClick={() => this.update(`${this.state.id}`)} value="Update" className="btn btn-success" />
                    </form>
                </div>}
              
                <div>
                    <table className="container text-center bg-dark text-white" >
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee Salary</th>
                            <th>Employee Designation</th>
                            {/* <th>Address</th> */}
                            <th colSpan="2">Action</th>
                        </tr>
                        {this.state.prodata.map(element =>
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.ename}</td>
                                <td>{element.salary}</td>
                                <td>{element.designation}</td>
                                <td><button className="btn btn-danger" onClick={() => this.delete(`${element.id}`)} >DELETE</button></td>
                                <td><button className="btn btn-primary" onClick={() => this.updateForm(`${element.id}`)} > UPDATE</button></td>
                            </tr>)}
                    </table>
                </div>
            </div>
        )
    }
}

export default CRUD

