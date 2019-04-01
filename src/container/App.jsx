import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios';
import {
  ieCheckerEvent,
  naviFocusMove
} from '../actions/app';
import { App } from "../components/App/App";

const mapStateToProps = state => {
  const {
    ieChecker
  } = state.app;
  return {
    ieChecker
  }
};

const get_version_of_IE = () => {
  var word;
  var agent = navigator.userAgent.toLowerCase();
  if (navigator.appName == "Microsoft Internet Explorer") {
    word = "msie ";
  } else if (agent.search("trident") > -1) {
    word = "trident/.*rv:";
  } else if (agent.search("edge/") > -1) {
    word = "edge/";
  } else {
    return -1;
  }
  var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
  if (reg.exec(agent) != null) return parseFloat(RegExp.$1 + RegExp.$2);
  return -1;
}

const mapDispatchToProps = (dispatch) => {
  return {
    ieCheckerBooleanEvent: () => {
      let checkVer = get_version_of_IE();
      if (checkVer == -1) {
        dispatch(ieCheckerEvent(true));
      }
      else {
        dispatch(ieCheckerEvent(false));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withref: true })(App);
