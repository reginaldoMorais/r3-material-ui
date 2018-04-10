import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Containers / Components */
import App from '../view/App';

export default props => {
  return (
    <Switch>
      <Route key="all" path="*" component={App} />
    </Switch>
  );
};
