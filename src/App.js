import React, { Fragment, Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      query : false,
      queryString : ""
    }
  }

  HandleSearchBtn = (text) => {
    this.setState({
      query : true,
      queryString : text,
    })
    console.log(this.state.queryString);
  }

  HandleCategory = () => {
    console.log("Category")
    this.setState({
      query : false,
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar HandleSearchBtn = {this.HandleSearchBtn} HandleCategory = {this.HandleCategory}/>
            {this.state.query?<News key = "search" searchStatement = {this.state.queryString} query={this.state.query} pageSize = {20} category="technology" country="in" /> :
            <Routes>
              <Route  exact path='/' element={<News key = "home" query={this.state.query} pageSize = {15} category="general" country="in" /> } />
              <Route  exact path='/business' element={<News key = "business" query={this.state.query} pageSize = {15} category="business" country="in" /> } />
              <Route  exact path='/entertainment' element={<News key = "entertainment" query={this.state.query} pageSize = {15} category="entertainment" country="in" /> } />
              <Route  exact path='/general' element={<News key = "general" query={this.state.query} pageSize = {15} category="general" country="in" /> } />
              <Route  exact path='/health' element={<News key = "health" query={this.state.query} pageSize = {15} category="health" country="in" /> } />
              <Route  exact path='/science' element={<News key = "science" query={this.state.query} pageSize = {15} category="science" country="in" /> } />
              <Route  exact path='/sports' element={<News key = "sports"query={this.state.query} pageSize = {15} category="sports" country="in" /> } />
              <Route  exact path='/technology' element={<News key = "technology" query={this.state.query} pageSize = {15} category="technology" country="in" /> } />
              {/* <Route  exact path= {`/${this.state.queryString}`} element={} /> */}
            </Routes>}
          </Fragment>
        </Router>
      </div>
    )
  }
}
