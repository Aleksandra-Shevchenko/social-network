import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { connect } from 'react-redux';
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


const  mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });

const  mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    }
  }
}



// const AuthRedirectComponent = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// мы заменили предыдущие вызовы ф-ий, одной ф-ей компоуз
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);