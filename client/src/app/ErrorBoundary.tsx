'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  renderErrorDetails(): ReactNode {
    const { error, errorInfo } = this.state;

    return (
      <div>
        <h2>Something went wrong:</h2>
        <p>{error?.message}</p>
        <p>Component stack trace:</p>
        <pre>{errorInfo?.componentStack}</pre>
      </div>
    );
  }

  renderErrorDetailsFromStack(stack: string): ReactNode {
    const match = stack.match(/at\s(.*?)[^\(]*\((.*?)(?::(\d+):(\d+)|:([\d]+:[\d]+))\)/);
  
    if (match) {
      const componentName = match[1] || 'Unknown Component';
      const fileName = match[2] || 'Unknown File';
      const lineNumber = match[3] || match[5] || 'Unknown Line';
  
      return (
        <div>
          <p>Component: {componentName}</p>
          <p>File: {fileName}</p>
          <p>Line Number: {lineNumber}</p>
        </div>
      );
    }
  
    return null;
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.renderErrorDetails();
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
