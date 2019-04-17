import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation } from '../Navigation/Navigation';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { NotSupport } from '../NotSupport/NotSupport';
import logo from '../../images/logo.png';

export const App = props => {
  props.ieCheckerBooleanEvent();
  const recent = useRef(null);
  const { ieChecker, closePopUpButtonEvnet, noneStyle } = props;
  return (
    <>
      {
        !ieChecker &&
        <NotSupport
          FontAwesomeIcon={FontAwesomeIcon}
          closePopUpButtonEvnet={closePopUpButtonEvnet}
          noneStyle={noneStyle}
        />
      }
      <Navigation
        logo={logo}
        recent={recent}
      />
      <Router>
        <Switch>
          <Route exact path="/" render={props => {
            return (
              <Main
                {...props}
                FontAwesomeIcon={FontAwesomeIcon}
                recent={recent}
              />
            )
          }} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
      <Footer
        FontAwesomeIcon={FontAwesomeIcon}
        logo={logo}
      />
    </>
  );
}

