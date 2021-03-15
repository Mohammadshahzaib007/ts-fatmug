import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, useHistory } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ArticleView from "./pages/ArticleView";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyArticle from "./pages/MyArticle";
import Signup from "./pages/Signup";
import writeArticle from "./pages/writeArticle";
import { AppState } from "./store";
import { onAuthChange } from "./store/actions/auth";
import { AppActionTypes } from "./store/types/action";

type Props = {
  onAuthChange: Function;
  userName: string | null | undefined;
};

function App(props: Props) {
  const { onAuthChange, userName } = props;

  const history = useHistory()

  // IF USER IS NOT AUTHENTICATED PUSH THE USER TO THE LOGIN PAGE
  if(!userName) {
    history.push('/login')
  } else {
    history.push('/')
  }

  // from redux
  useEffect(() => {
    onAuthChange();
  }, []);

  return (
    <Layout>
      <Switch>
        {userName && (
          <>
            {" "}
            <Route exact path="/" component={Home} />
            <Route exact path="/write" component={writeArticle} />
            <Route exact path="/article/:blogId" component={ArticleView} />
            <Route exact path="/your-articles" component={MyArticle} />{" "}
          </>
        )}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Layout>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    userName: state.auth.userName,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
) => {
  return {
    onAuthChange: () => dispatch(onAuthChange()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
