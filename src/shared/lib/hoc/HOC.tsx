import React from "react";
interface WithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(Component: React.ComponentType<P>) {
  const WrappedComponent: React.FC<P & WithLoadingProps> = (props) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <Component {...(restProps as P)} />;
  };
  return WrappedComponent;
}
export default withLoading;
