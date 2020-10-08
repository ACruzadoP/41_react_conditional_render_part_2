import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a", "b"]
        }
    }
    
    //Change "unreadMessages: []" for "unreadMessages: ["a", "b"]" and see what happens

    render() {
        return (
            <div>
                {
                    //Option A
                    /*
                    this.state.unreadMessages.length > 0 ? 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                    <h1>No messages</h1>
                    */

                    //Option B
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App
