import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './pages/landing/Landing';
import Contact from './pages/contact/Contact';
import Layout from './container/Layout/Layout';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Site from './pages/aboutSite/AboutSite';
import Coin from './pages/coins/Coin';
import Projects from './pages/projects/Projects';
import Terms from './pages/terms/Terms'

const App = () => {

  const isAuth = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/site" component={Site}/>
            <Route path="/projects" component={Projects} />
            <Route path="/terms-privacy" component={Terms} />
            <Route path="/crypto" component={Coin} />
            <Route path="/login" component={Login}/>
            {isAuth ? (<Route path="/resume" component={Resume} />) : (<Route path="/resume" component={Login}/>)}          
            <Route path="/" exact component={Landing}/>
          </Switch>
        </Layout>
      </BrowserRouter>     
    </>
  )
}

export default App

