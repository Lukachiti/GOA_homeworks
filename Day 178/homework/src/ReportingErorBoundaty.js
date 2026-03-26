class ReportingErrorBoundary extends React.Component {
  state = { hasError: false, errorType: null };

  static getDerivedStateFromError(error) {
    
    return { 
      hasError: true, 
      errorType: error instanceof TypeError ? 'Type' : 'General' 
    };
  }

  componentDidCatch(error, errorInfo) {
    
    console.log("Report");
    console.error("text:", {
      message: error.message,
      stack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {this.state.errorType === 'Type' ? (
            <p>(TypeError)!</p>
          ) : (
            <p>no type</p>
          )}
          
        </div>
      );
    }

    return this.props.children;
  }
}
export default ReportingErrorBoundary