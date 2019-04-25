import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import {ThemeProvider} from '@material-ui/styles';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { createMuiTheme } from "@material-ui/core/styles";
import './App.css';

import Header from  '../src/components/header & footer/header'
import NotFound from './components/notFound'
import Footer from './components/header & footer/footer'

const Home = lazy(() => import('./components/home'))
const CardsDetail = lazy(() => import('./components/cardsDetail'))




const theme = createMuiTheme()

function App() {
  return (
    <BrowserRouter>
    <div>
    <ThemeProvider theme={theme} >
    <Header />
    </ThemeProvider>
    <Suspense fallback={<div></div>}>
      <Switch >
        <Route exact path="/" render={()=> <Home />}/>
        <Route exact path="/CardsDetail" render={()=> <CardsDetail />}/>
        <Route render={() => <NotFound />} />
      </Switch>
      <Footer />
    </Suspense>
    </div>
    </BrowserRouter>
  );
}

export default App;
