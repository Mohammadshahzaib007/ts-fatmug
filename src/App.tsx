import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import ArticleView from './pages/ArticleView';
import Home from './pages/Home';
import Login from './pages/Login';
import MyArticle from './pages/MyArticle';
import Signup from './pages/Signup';
import writeArticle from './pages/writeArticle';

function App () {
  return (
   <Layout>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/write" component={writeArticle} />
       <Route exact path="/article-view" component={ArticleView} />
       <Route exact path="/your-articles" component={MyArticle} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={Signup} />
     </Switch>
   </Layout>
  );
}

export default App;
