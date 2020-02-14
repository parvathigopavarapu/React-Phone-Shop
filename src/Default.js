import React from 'react'

class Default extends React.Component{
    render(){
        return (<div className='App'>
            <h1>404</h1>
            <h2>page not found</h2>
    <h3>the requested URL<span className='text-danger'>{this.props.location.pathname}</span> was not found</h3>
            </div>
            );
    }
}
export default Default;