import React, { Fragment, Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route  exact path='/' element={<News key = "home" pageSize = {15} category="general" country="in" /> } />
              <Route  exact path='/business' element={<News key = "business" pageSize = {15} category="business" country="in" /> } />
              <Route  exact path='/entertainment' element={<News key = "entertainment" pageSize = {15} category="entertainment" country="in" /> } />
              <Route  exact path='/general' element={<News key = "general" pageSize = {15} category="general" country="in" /> } />
              <Route  exact path='/health' element={<News key = "health" pageSize = {15} category="health" country="in" /> } />
              <Route  exact path='/science' element={<News key = "science" pageSize = {15} category="science" country="in" /> } />
              <Route  exact path='/sports' element={<News key = "sports"pageSize = {15} category="sports" country="in" /> } />
              <Route  exact path='/technology' element={<News key = "technology" pageSize = {15} category="technology" country="in" /> } />
            </Routes>
          </Fragment>
        </Router>
      </div>
    )
  }
}
