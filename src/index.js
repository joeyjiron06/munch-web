import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path="/" component={() => <div>Hello world!</div>}>
      {/*<Route path="about" component={About}/>*/}
      {/*<Route path="*" component={NoMatch}/>*/}
    </Route>
  </Router>, window.document.getElementById('app'));
