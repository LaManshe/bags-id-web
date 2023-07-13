import React, { ErrorInfo } from "react";
import { ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}
  
interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error(error, info);
    }
  
    render(): ReactNode {
        return this.state.hasError
            ? <h1>Извините, произошла критическая ошибка</h1>
            : this.props.children;
    }
}