import { Link } from 'react-router-dom';
import {ComponentType} from "react";

interface WithLinkProps {
  to: string;
  openAsBlank?: boolean;
}

const withLink = <P extends object>(Component: ComponentType<P & { onClickAction?: () => void }>) => {
  return function WrappedComponent(props: Omit<P, 'onClickAction'> & WithLinkProps) {
    const { to, openAsBlank, ...rest } = props;

    return (
      <Link
        to={to}
        style={{ textDecoration: 'none', display: 'flex', width: '100%' }}
        target={openAsBlank ? '_blank' : undefined}
      >
        <Component {...rest as P} />
      </Link>
    );
  };
}

export default withLink;