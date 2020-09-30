import React, { Component } from 'react';
import { Redirect } from 'react-router';

import CTextBox from '../common/textBox';
import CDropdown from '../common/dropdown';
import CNationality from '../common/nationality';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            // userName: "",
            // psw: "",
           // isErr: null,
            errMsg: "",
            postData: []
        }
    }

    doLogin() {
        if (this.state.userName == "test" && this.state.psw == "1") {
            this.setState({ isErr: false, errMsg: "Login Success!" })
            alert("Login Success!");
            this.props.history.push('/home');
        }
        else {
            this.setState({ isErr: true, errMsg: "Please login again!" })
            alert("Please login again!");
        }
    }

    displayName(firstName, lastName) {

    }

    doClear() {
        this.setState({ userName: "", psw: "", errMsg: "" });
        this.displayName("1");
    }

    onHandleTextvalueUserName(value) {
        this.setState({ userName: value });
    }

    onHandleTextvaluePsw(param) {
        this.setState({ psw: param.target.value });
    }

    submitfunc(e) {
       // e.preventDefault();
        let gender = "";

        if (this.state.postData["userName"] == "test" && this.state.postData["psw"] == "1") {

            if (!this.state.postData["gender"] || this.state.postData["gender"] == "") {
                gender = "m";
            }
            else {
                gender = this.state.postData["gender"];
            }

            // this.props.history.push('/home');
        }
        else {
            this.setState({ isErr: true, errMsg: "Please login again!" })
            alert("Please login again!");
        }
    }

    changeFunc(e) {
        let _postData ={...this.state.postData, isErr:true};
        _postData[e.target.name] = e.target.value;
        this.setState({ postData: _postData });
    }

    doForward() {
        this.props.history.goForward();
    }

    doBack() {
        this.props.history.goBack();
    }

    render() {


        return <div className="container h-100">
            {/* {this.state.isErr == true ? <div>Please login again!</div> : this.state.isErr == false ? <div>Login Success!</div> : null} */}
            <div>{this.state.errMsg}</div>
            <div className="user_card">
                <div className="d-flex justify-content-center form_container">
                    <form  onSubmit={(e) => this.submitfunc(e)} onChange={(e) => this.changeFunc(e)}>
                        <h1>Log In</h1>
                        {
                            console.log("debugger")
                        }
                        <div className="input-group mb-3">
                            {/* <input type="text" className="form-control" name="userName" placeholder="Email address or Phone number"
                                onChange={(e) => this.onHandleTextvalueUserName(e.target.value)} value={this.state.userName? this.state.userName : "" }></input> */}
                            <CTextBox name="userName" placeholder="Email address or Phone number" value={this.state.postData["userName"]} />
                        </div>
                        <div className="input-group mb-3">
                            {/* <input type="password" className="form-control" name="psw" placeholder="Password"
                                onChange={(e) => this.onHandleTextvaluePsw(e)} value={this.state.psw? this.state.psw : "" } ></input> */}
                            <CTextBox name="psw" placeholder="Password" isPssword={true}  value={this.state.postData["psw"]} />
                        </div>
                        <div className="input-group mb-3">

                            <CDropdown name="type" dataSource={[{ displayName: "User Type", value: "null" }, { displayName: "Agent", value: "agent" }, { displayName: "Customer", value: "customer" }, { displayName: "Others", value: "other" }]} />
                        </div>
                        <div className="input-group mb-3">

                            <CDropdown name="gender" dataSource={[{ displayName: "Gender", value: "" }, { displayName: "Male", value: "m" }, { displayName: "Female", value: "f" }, { displayName: "Others", value: "t" }]} />
                        </div>

                        <div className="input-group mb-3">

                            <CNationality name="nationality" dataSource={[{ displayName: "Nationality", value: "" }, { displayName: "Indian", value: "ind" }, { displayName: "UK", value: "uk" }, { displayName: "Others", value: "o" }]} />
                        </div>

                        <div className="input-group mb-3">
                            <button className="btn btn-primary" style={{ marginRight: "10px" }}>Log In</button>

                        </div>

                        <div className="input-group mb-3">
                            <button className="btn btn-primary" onClick={() => this.doForward()} style={{ marginRight: "10px" }}>Forward</button>
                            <button className="btn btn-primary" onClick={() => this.doBack()} style={{ marginRight: "10px" }}>Back</button>

                        </div>
                    </form>
                    <button className="btn btn-primary" onClick={() => this.doClear()} style={{ marginRight: "10px" }}>Clear</button>

                </div>

            </div>



        </div>
    }

}

export default LoginPage;