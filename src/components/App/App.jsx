import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation } from '../Navigation/Navigation';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { NotSupport } from '../NotSupport/NotSupport';
import logo from '../../images/logo.png';

export const App = props => {
  props.ieCheckerBooleanEvent();
  const recent = useRef(null);
  const { ieChecker } = props;
  return (
    <>
      {/* {!ieChecker && <NotSupport />} */}
      <Navigation
        logo={logo}
        recent={recent}
      />
      {/* <Switch>
        <Route exact to="/" render={props => {
          return (
            <Main
              {...props}
              FontAwesomeIcon={FontAwesomeIcon}
              recent={recent}
            />
          )
        }} />
      </Switch> */}
      {/* <Footer
        FontAwesomeIcon={FontAwesomeIcon}
        logo={logo}
      /> */}
    </>
  );
}

