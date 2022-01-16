import { memo } from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';

import PermissionHide from './PermissionHide';

import { enRoles } from '@/interfaces/models/user';

interface IProps extends RouteProps {
  role?: enRoles;
}

const PermissionRoute = memo<IProps>(({ role, ...props }) => {
  const isAuthenticated: any = undefined;

  if (isAuthenticated === undefined) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <PermissionHide role={role}>
        <Route {...props} />
      </PermissionHide>

      <PermissionHide inverse role={role}>
        <p>Não encontrado</p>
      </PermissionHide>
    </>
  );
});

export default PermissionRoute;
