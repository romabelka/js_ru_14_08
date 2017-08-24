//write the HOC
import React from 'react'

export default (WrappedComponent) => class extends React.Component {
  
  state = {
      isOpen: true
  }

  handleClick = () => {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }

   render() {
     // Wraps the input component in a container, without mutating it. Good!
     return <WrappedComponent {...this.props} {...this.state} handleClick={this.handleClick}/>
   }
}
