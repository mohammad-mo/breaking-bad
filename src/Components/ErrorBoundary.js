import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error Boundary', error, errorInfo)
    this.setState({
      hasError: true,
    })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    const style = {
      fontSize: '1.6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#ecbb33',
    }
    if (hasError) {
      return <p style={style}>Something went wrong</p>
    } else {
      return children
    }
  }
}
