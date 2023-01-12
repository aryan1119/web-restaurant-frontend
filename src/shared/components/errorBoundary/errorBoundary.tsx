import React from 'react';

interface IProps {
	children?: any;
}
class ErrorBoundary extends React.Component<IProps> {
	static getDerivedStateFromError(error: Error | null) {
		return { error };
	}

	state = {
		error: null
	};

	componentDidMount() {
		//window.onerror = this.logError;
	}

	componentDidCatch(error: Error | null) {
		this.logError(error);
	}

	render() {
		if (this.state.error) {
			return 'System is updating. Please hold on.';
		}
		return this.props.children;
	}

	logError(args: Error | null) {
		console.log(args);
	}
}

export default ErrorBoundary;
