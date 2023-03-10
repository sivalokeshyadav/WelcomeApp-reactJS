// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  onChangeStatus = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState({status: 'Subscribed'})
    } else {
      this.setState({status: 'Subscribe'})
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="btn-1" onClick={this.onChangeStatus}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
