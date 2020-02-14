import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class SignupModel extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email:null,
            UserName:null,
            password:null,
            re_password:null
        }
    }
    handleChange =(t)=>{
      t.preventDefault()
        this.setState({
            [t.target.name]:t.target.value
        })

    }
    signUp=()=>{
       
       if(this.state.password == this.state.re_password){
           localStorage.setItem(this.state.UserName, this.state.password)
       }
    }
    render() {
        const {email,UserName,password,re_password} = this.state

        return (
            <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                   Sign Up
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <input type='email' placeholder='Email' name='email' onChange={this.handleChange} value={email}/>
            <input type='text' placeholder='UserName' name = 'UserName' onChange={this.handleChange} value={UserName}/>
           <input type='password' placeholder='Create Password' name="password" onChange={this.handleChange} value={password} />
           <input type='password' placeholder='Re-Enter Password' name="re_password" onChange={this.handleChange} value={re_password} />
           
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={this.props.close}>Cancel</Button>
            <Button variant="primary"  onClick={this.signUp}>Signup</Button>
            </Modal.Footer>
        </Modal >
        )
    }
}
export default SignupModel;