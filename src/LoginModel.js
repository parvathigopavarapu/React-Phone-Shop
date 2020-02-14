import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class LoginModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: null,
            Password: null,
            check: false
        }
    }
    getusername = (t)=>{
       
        this.setState({
            UserName:t.target.value
        
        })

    }
    getCheck =(t) =>{
        this.setState({
            check:t.target.checked
        })

    }
    getPassword =() =>{
        if(this.state.check == true){
            alert('hello')
            this.setState({
                Password:localStorage.getItem(this.state.UserName)
            })
        }
    }
    render() {

        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' placeholder='UserName' 
                    onChange={this.getusername} onBlur={this.getPassword} keyup={this.getPassword}
                    value={this.state.UserName} /><br />
                    <input type='password' placeholder='Password'
                     value={this.state.Password} /><br />
                    <input type='checkbox' className='chcekbox' onChange={this.getCheck}
                     checked={this.state.check} />Remember Password
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.close}>Cancel</Button>
                    <Button variant="primary" onClick={this.props.close}>Login</Button>
                </Modal.Footer>
            </Modal >
        )
    }
}
export default LoginModel;