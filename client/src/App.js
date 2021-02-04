import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from "react-loader-spinner";

import Layout from './container/Layout/Layout';
import Landing from './pages/landing/Landing';

const Contact = React.lazy( () => import('./pages/contact/Contact'));
const Login = React.lazy( () => import('./pages/login/Login'));
const About = React.lazy( () => import('./pages/about/About'));
const Resume = React.lazy( () => import('./pages/resume/Resume'));
const Site = React.lazy( () => import('./pages/aboutSite/AboutSite'));
const Coin = React.lazy( () => import('./pages/coins/Coin'));
const Projects = React.lazy( () => import( './pages/projects/Projects'));
const Terms = React.lazy( () => import( './pages/terms/Terms'));

const App = () => {


  //let isAuth = useSelector(state => state.auth)

  return (
    <>
      <BrowserRouter>
        <Layout>
        <Route path="/" exact component={Landing}/>
            <Suspense fallback={
              <Loader
                type="Audio"
                color="#00BFFF"
                height={100}
                width={100}
                style={{position:'absolute', left: '50%', top:'50%'}}
              />
            }>
              <Switch>
              {/* <Route path="/" exact component={Landing}/> */}
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About}/>
              <Route path="/site" component={Site}/>
              <Route path="/projects" component={Projects} />
              <Route path="/terms-privacy" component={Terms} />
              <Route path="/crypto" component={Coin} />
              <Route path="/resume" component={Resume} />
              <Route path="/login" component={Login}/>
              <Route path="/" component={Landing}/>
              </Switch>
            </Suspense>
            {/* {isAuth ? (<Route path="/resume" component={Resume} />) : (<Route path="/resume" component={Login}/>)}      */}
          
        </Layout>
      </BrowserRouter>     
    </>
  )
}

export default App

