import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4d1caf6e9f5491ab8f802243cc59a0b&page=${this.state.page}&pagesize=${this.props.pageSize}`
    );
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  fetchMoreData = async () => {
    this.setState({loading : true})
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4d1caf6e9f5491ab8f802243cc59a0b&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
    );
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      article : this.state.article.concat(parseData.articles),
      page : this.state.page+1,
      loading : false,
      totalResults : parseData.totalResults,
    })
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3 ">FCJ News</h1>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article !== this.state.totalResults}
        />
        <div className="row">
          {this.state.article &&
            this.state.article.map((message) => {
              return (
                <div className="col-md-4" key={message.url}>
                  <NewsItem
                    title={message.title !== null ? message.title : ""}
                    description={
                      message.description !== null ? message.description : ""
                    }
                    imageUrl={
                      message.urlToImage !== null
                        ? message.urlToImage
                        : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png"
                    }
                    newsUrl={message.url}
                  />
                </div>
              );
            })}
        </div>
        {(this.state.loading)?<Spinner/>:null}
      </div>
    );
  }
}
