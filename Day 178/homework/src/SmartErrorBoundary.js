import React from 'react';

class SmartErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  
  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if(this.state.hasError) {
      return (
        <div>
          <h2>theres a eror</h2>
          <button onClick={this.handleRetry}>retry</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default SmartErrorBoundary;