import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeBtn = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" onClick={this.changeBtn}>
            Subscribed
          </button>
        ) : (
          <button type="button" onClick={this.changeBtn}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
