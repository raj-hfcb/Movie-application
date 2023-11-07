import React, { Component } from 'react'

 class User extends Component {
    constructor()
    {
        super()
        this.state={users:[]}
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(userData=>this.setState({users:userData}))
    }

  render() {
    const {users}=this.state
    console.log(users);
    return (
      <div>
        <table>
            <thead><tr><th>Name</th><th>Email</th></tr></thead>
            <tbody>
                {
                    users && users.map(u=>
                        <tr key={u.id}><td>{u.name}</td><td>{u.email}</td></tr>
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
export default User