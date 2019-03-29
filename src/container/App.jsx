import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios';
import App from "../components/App/App";
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

const mapStateToProps = state => {
  const {} = state.app;
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withref: true })(App);