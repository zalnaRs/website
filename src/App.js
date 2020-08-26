import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './assets/pages/home';
import News from './assets/pages/news';
import Projects from './assets/pages/projects';
import errorpagenotfound from './assets/pages/404';
import { NavBar } from './assets/components/navbar';
import './assets/css/index.css';

export default function App(props) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/news" component={News} />
        <Route path="/404" component={errorpagenotfound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

