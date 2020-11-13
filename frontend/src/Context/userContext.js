import React, { Component, createContext } from 'react'

export const UserContext = createContext();

export default class UserContextProvider extends Component {


    state={
       userData:undefined,



    }

    setUserData=(userData)=>{
        this.setState({userData})
      }
    render() {
        return (
            <UserContext.Provider value={{...this.state,setUserData:this.setUserData}}>
                 {this.props.children}
            </UserContext.Provider>
        )
    }
}