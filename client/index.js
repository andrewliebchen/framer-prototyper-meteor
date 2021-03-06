import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PrototypePage from '../imports/ui/pages/PrototypePage';
import PreviewPage from '../imports/ui/pages/PreviewPage';
import NewPrototypePage from '../imports/ui/pages/NewPrototypePage';
import NotFoundPage from '../imports/ui/pages/NotFoundPage';

import './index.css';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={NewPrototypePage} />
      <Route path="/new" component={NewPrototypePage} />
      <Route path="/:id/preview" component={PreviewPage} />
      <Route path="/:id" component={PrototypePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  render(<Routes />, document.getElementById('root'));
});
