import React from "react";
import { connect } from "react-redux";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Feed } from "./components/feed/Feed";
import { Widgets } from "./components/widgets/Widgets";
import { Login } from "./components/login/Login";
import firebase from "firebase";
import { ApplicationState } from "./state";
import { setUser } from "./state/actions";
import { userSelector } from "./state/reducer";
import { auth, provider } from "./firebase";
import { LoginState } from "./state/types";

interface DispatchProps {
  onRequestUpdatedUsers: (user: firebase.User | null) => void;
}

export type Props = LoginState & DispatchProps;

const App = ({ onRequestUpdatedUsers, user }: Props) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        onRequestUpdatedUsers(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="app">
      {!user ? (
        <Login handleSignIn={signIn} />
      ) : (
        <>
          <Header user={user} />
          <div className="app__body">
            <Sidebar user={user} />
            <Feed user={user} />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState): LoginState => {
  return {
    user: userSelector(state),
  };
};

const mapDispatchToProps = {
  onRequestUpdatedUsers: setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
