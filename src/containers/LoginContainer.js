import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authAction.js';
import Login from '../components/Login.js';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}

const LoginContainer = connect(
    null,
    mapDispatchToProps
)(Login);

export default LoginContainer;