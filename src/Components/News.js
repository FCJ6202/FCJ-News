import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    NewsArticle = [
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "Paine to take break from cricket 'for foreseeable future'",
          "description": "Former Australia Test captain Tim Paine is to take an immediate break from all forms of cricket \"for the foreseeable future\".",
          "url": "https://www.bbc.co.uk/sport/cricket/59345925",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
          "publishedAt": "2021-11-25T23:29:48Z",
          "content": "Former Australia Test captain Tim Paine is set to miss the upcoming Ashes series against England after announcing he is to take an immediate break from all forms of cricket.\r\nIn a statement, Cricket … [+855 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "Moxon & Gale among 16 to leave Yorkshire",
          "description": "Director of cricket Martyn Moxon, coach Andrew Gale and all members of the coaching staff are among 16 people to leave Yorkshire amid the racism scandal.",
          "url": "https://www.bbc.co.uk/sport/cricket/59518669",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
          "publishedAt": "2021-12-03T11:53:49Z",
          "content": "Director of cricket Martyn Moxon, head coach Andrew Gale and all members of the coaching staff are among 16 people to have left Yorkshire amid the racism scandal.\r\nA report found former player Azeem … [+667 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Man Utd co-chairman Glazer buys UAE T20 franchise - Reuters",
          "description": "Manchester United co-chairman Avram Glazer has acquired a franchise in the United Arab Emirates' inaugural T20 Cricket League, the Emirates Cricket Board said on Wednesday.",
          "url": "https://www.reuters.com/lifestyle/sports/man-utd-co-chairman-glazer-buys-uae-t20-franchise-2021-12-01/",
          "urlToImage": "https://www.reuters.com/resizer/PgwieiE6LRKVho9Rftt2jXH7O64=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YA4XJOAIZJPU7EPK5RJKAWYUT4.jpg",
          "publishedAt": "2021-12-01T11:36:00Z",
          "content": "Soccer Football - FA Cup Final - Chelsea vs Manchester United - Wembley Stadium, London, Britain - May 19, 2018 Manchester United co owner Avram Glazer before the match Action Images via Reuters/Lee … [+1102 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "Yorkshire whistleblower hotline contacted by 36 people in first week",
          "description": "Thirty-six people have contacted Yorkshire's independent whistleblower hotline in its first week of operation.",
          "url": "https://www.bbc.co.uk/sport/cricket/59378363",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/737D/production/_121756592_gettyimages-1236368021.jpg",
          "publishedAt": "2021-11-22T15:33:27Z",
          "content": "Emotional Rafiq tells MPs about racism at Yorkshire\r\nThirty-six people have contacted Yorkshire's independent whistleblower hotline in its first week of operation.\r\nThe hotline was set up in the wake… [+1782 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Bangladesh's Mahmudullah retires from test cricket - Reuters",
          "description": "Bangladesh all-rounder Mahmudullah has announced his retirement from test cricket at the age of 35 but will continue to play one-day internationals and Twenty20s, the country's cricket board (BCB) said in a statement on Wednesday.",
          "url": "https://www.reuters.com/lifestyle/sports/bangladeshs-mahmudullah-retires-test-cricket-2021-11-24/",
          "urlToImage": "https://www.reuters.com/resizer/w3MdOzUuDi6adlCo4lYDhB3kLVg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7AB5Z6R6PVKKJPQP6H33OKY7GM.jpg",
          "publishedAt": "2021-11-24T14:27:00Z",
          "content": "Nov 24 (Reuters) - Bangladesh all-rounder Mahmudullah has announced his retirement from test cricket at the age of 35 but will continue to play one-day internationals and Twenty20s, the country's cri… [+1071 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Cricket Tasmania condemns 'appalling' treatment of Paine - Reuters",
          "description": "Cricket Tasmania chairman Andrew Gaggin condemned Cricket Australia's \"appalling\" treatment of Tim Paine on Tuesday, saying he should never have been put in a position where he felt he had to resign as Australia test captain.",
          "url": "https://www.reuters.com/lifestyle/sports/cricket-tasmania-condemns-appalling-treatment-paine-2021-11-23/",
          "urlToImage": "https://www.reuters.com/resizer/ejYfeiXgtHgzTihDAj3WNePMHhg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q52JYZV4GNK3ZFIATKY7RZN6UU.jpg",
          "publishedAt": "2021-11-23T05:08:00Z",
          "content": "SYDNEY, Nov 23 (Reuters) - Cricket Tasmania chairman Andrew Gaggin condemned Cricket Australia's \"appalling\" treatment of Tim Paine on Tuesday, saying he should never have been put in a position wher… [+2291 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Melbourne joins clamour to replace Perth if Ashes test moved - Reuters",
          "description": "With Perth's Ashes test in doubt over strict COVID-19 rules, authorities in Victoria state have petitioned Cricket Australia to bring the series back to the Melbourne Cricket Ground (MCG).",
          "url": "https://www.reuters.com/lifestyle/sports/melbourne-joins-clamour-replace-perth-if-ashes-test-moved-2021-12-01/",
          "urlToImage": "https://www.reuters.com/resizer/TNmN5Cyh_kxkTVDX9slfEXWu9Mo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QE4AQISO5NNJFFXEEFOFVKBS7I.jpg",
          "publishedAt": "2021-12-01T06:22:00Z",
          "content": "MELBOURNE, Dec 1 (Reuters) - With Perth's Ashes test in doubt over strict COVID-19 rules, authorities in Victoria state have petitioned Cricket Australia to bring the series back to the Melbourne Cri… [+1421 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Paine steps down as Australia test cricket captain after texting scandal - Reuters",
          "description": "Tim Paine stepped down as Australia test cricket captain on Friday for sending inappropriate text messages to a female co-worker, although an investigation by governing body Cricket Australia exonerated him of any breach of its code of conduct.",
          "url": "https://www.reuters.com/lifestyle/sports/paine-steps-down-australia-test-cricket-captain-after-texting-scandal-2021-11-19/",
          "urlToImage": "https://www.reuters.com/resizer/WL_2GgDnKj_04ompRx0BGmJpYkI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y5QBLOWCD5K4LJQABBSW7AXG6Q.jpg",
          "publishedAt": "2021-11-19T03:53:00Z",
          "content": "MELBOURNE, Nov 19 (Reuters) - Tim Paine stepped down as Australia test cricket captain on Friday for sending inappropriate text messages to a female co-worker, although an investigation by governing … [+1876 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Australia's Green welcomes step up for 'world class' Carey - Reuters",
          "description": "Australia all-rounder Cameron Green says Alex Carey's experience in one-day cricket will help him make the adjustment to test cricket if, as widely reported, he gets the nod to replace Tim Paine for the opening Ashes clash in Brisbane next week.",
          "url": "https://www.reuters.com/lifestyle/sports/australias-green-welcomes-step-up-world-class-carey-2021-12-01/",
          "urlToImage": "https://www.reuters.com/resizer/A3kt5ol9AyiMmcL9-0hcAl2atdE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FJIGYUMMVRPILIF4TCUHFC22IE.jpg",
          "publishedAt": "2021-12-01T04:34:00Z",
          "content": "SYDNEY, Dec 1 (Reuters) - Australia all-rounder Cameron Green says Alex Carey's experience in one-day cricket will help him make the adjustment to test cricket if, as widely reported, he gets the nod… [+1986 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Cricket Australia chief backs Paine to make test return - Reuters",
          "description": "Cricket Australia (CA) CEO Nick Hockley hopes Tim Paine returns  to country's test side \"as quickly as possible\" after the wicketkeeper resigned from the captaincy because of his involvement in a \"sexting\" scandal.",
          "url": "https://www.reuters.com/lifestyle/sports/cricket-australia-chief-backs-paine-make-test-return-2021-12-09/",
          "urlToImage": "https://www.reuters.com/resizer/hzdGi4ZWovQmuuiCrkEamYAEvac=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/P7NM3DIJS5MYZKUDNA35OKYB6Y.jpg",
          "publishedAt": "2021-12-09T09:50:00Z",
          "content": "Dec 9 (Reuters) - Cricket Australia (CA) CEO Nick Hockley hopes Tim Paine returns to country's test side \"as quickly as possible\" after the wicketkeeper resigned from the captaincy because of his inv… [+1212 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Kohli denies he wanted to skip one-day tour after being replaced as India captain",
          "description": "India's Test captain rejects reports he asked to opt out of the upcoming ODI series in South Africa.",
          "url": "https://www.bbc.co.uk/news/world-asia-india-59647428",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E40A/production/_122087385_gettyimages-1338718097.jpg",
          "publishedAt": "2021-12-15T08:42:49Z",
          "content": "Image source, Getty Images\r\nImage caption, Kohli was replaced as India's ODI captain by Rohit Sharma last week\r\nIndian Test captain Virat Kohli has denied reports that he asked to skip the upcoming o… [+2916 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Simon Burnton",
          "title": "Yorkshire cricket whistleblowing hotline contacted by 36 people",
          "description": "<ul><li>Service launched in response to Azeem Rafiq's allegations</li><li>Alex Hales keeps Sydney Thunder contract after talks</li></ul>A whistleblowing hotline launched by Yorkshire to allow people to safely report discrimination has been contacted by 36 ind…",
          "url": "https://amp.theguardian.com/sport/2021/nov/22/yorkshire-cricket-whistleblowing-hotline-36-people-lord-patel-azeem-rafiq",
          "urlToImage": "https://i.guim.co.uk/img/media/e91571793f2c7c2e008458829629cc853388c325/0_100_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3996723a20a038be3094a7bd18373862",
          "publishedAt": "2021-11-22T16:42:54Z",
          "content": "A whistleblowing hotline launched by Yorkshire to allow people to safely report discrimination has been contacted by 36 individuals in its first week, the club announced on Monday.\r\nThe service was i… [+2229 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Heather Stewart Political editor",
          "title": "Sajid Javid tells of racial abuse growing up as he urges ECB to do more",
          "description": "Minister says English cricket needs to take 'long, hard look' at itself after Azeem Rafiq racism revelationsSajid Javid has said he was racially abused almost every day at school when he was growing up, as he urged the England and Wales Cricket Board (ECB) to…",
          "url": "https://amp.theguardian.com/politics/2021/nov/21/sajid-javid-racial-abuse-growing-up-ecb-england-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/9e598eb6420f7af2e91a28c20d279e7b20a956d4/429_159_1468_881/master/1468.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7041fdcd5ff26727343c212c01c8884e",
          "publishedAt": "2021-11-21T10:36:18Z",
          "content": "Sajid Javid has said he was racially abused almost every day at school when he was growing up, as he urged the England and Wales Cricket Board (ECB) to take a long, hard look at themselves over racis… [+2455 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Sean Ingle",
          "title": "English cricket risks /'nuclear option' of regulator, warns sports minister",
          "description": "<ul><li>ECB must tackle racism crisis, Nigel Huddleston tells MPs</li><li>'What we all want is for cricket to get its house in order'</li></ul>The government is ready to take the “nuclear option” with English cricket if it does not get its house in order over…",
          "url": "https://amp.theguardian.com/sport/2021/nov/18/english-cricket-nuclear-option-regulator-sports-minister-racism",
          "urlToImage": "https://i.guim.co.uk/img/media/e1ff01a500c917755dd79d06ee1bec3fcb6d3f48/0_233_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7da2f16ed5008faf7975f03f7f9e7f35",
          "publishedAt": "2021-11-18T15:12:57Z",
          "content": "The government is ready to take the nuclear option with English cricket if it does not get its house in order over racism, the sports minister, Nigel Huddleston, has warned, after criticising the gam… [+5216 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Emma Kemp",
          "title": "'Extremely concerned': Tim Paine takes leave of absence from all cricket",
          "description": "<ul><li>Puts Paine in serious doubt for Ashes series against England</li><li>Comes a week after he stepped down as Australian captain</li></ul>Tim Paine will take a leave of absence from all cricket “for the foreseeable future” only 12 days out from the start…",
          "url": "https://amp.theguardian.com/sport/2021/nov/26/extremely-concerned-tim-paine-takes-leave-of-absence-from-all-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/6b9dbd1aae7a06056d82a7b275dda81e5f737ea2/0_87_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=140fa5abcd9b403cbf402f4b5c807bb7",
          "publishedAt": "2021-11-25T23:25:56Z",
          "content": "Tim Paine will take a leave of absence from all cricket for the foreseeable future, throwing into serious doubt his availability for the Ashes less than two weeks before the series starts.\r\nA week af… [+1313 chars]"
        },
        {
          "source": { "id": "engadget", "name": "Engadget" },
          "author": "Mariella Moon",
          "title": "Google's Year in Search 2021 was dominated by sports and 'Squid Game'",
          "description": "While people around the world still searched for information about the COVID-19 pandemic, other topics dominated Google's Year in Search for 2021 — like cricket and Squid Game. Matches for the T20 World Cup are at the top of this year's global searches, along…",
          "url": "https://www.engadget.com/google-year-in-search-2021-091628080.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/f0c8e8c0-57f7-11ec-af9f-67c7c75348c4",
          "publishedAt": "2021-12-08T09:16:28Z",
          "content": "While people around the world still searched for information about the COVID-19 pandemic, other topics dominated Google's Year in Search for 2021 like cricket and Squid Game. Matches for the T20 Worl… [+2053 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "ECB unveils action plan to tackle racism following Rafiq allegations - Reuters",
          "description": "The England and Wales Cricket Board (ECB) on Friday released a 12-point action plan to tackle racism and discrimination in the sport, including a review of the \"dressing room culture\" across teams and a standardised approach to whistleblowing.",
          "url": "https://www.reuters.com/lifestyle/sports/ecb-unveils-action-plan-tackle-racism-following-rafiq-allegations-2021-11-26/",
          "urlToImage": "https://www.reuters.com/resizer/JsASM-fQzvVoiB3XLrpkvDw0bPI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QSY4KF6IIVNLPLITQ5ES6NJTVY.jpg",
          "publishedAt": "2021-11-26T15:45:00Z",
          "content": "Nov 26 (Reuters) - The England and Wales Cricket Board (ECB) on Friday released a 12-point action plan to tackle racism and discrimination in the sport, including a review of the \"dressing room cultu… [+1683 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "ICC confident all teams will travel to Pakistan for 2025 Champions Trophy - Reuters",
          "description": "India's participation in the 2025 Champions Trophy in Pakistan is a \"challenging\" issue for the International Cricket Council but the world governing body said it is confident all teams will travel to the country for the tournament.",
          "url": "https://www.reuters.com/lifestyle/sports/icc-confident-all-teams-will-travel-pakistan-2025-champions-trophy-2021-11-23/",
          "urlToImage": "https://www.reuters.com/resizer/Cii2FQiBCkeNvXZIzVQ8CvYF3nQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GPCPZFEAPNONHLNZW7AKWWYOA4.jpg",
          "publishedAt": "2021-11-23T05:33:00Z",
          "content": "Nov 23 (Reuters) - India's participation in the 2025 Champions Trophy in Pakistan is a \"challenging\" issue for the International Cricket Council but the world governing body said it is confident all … [+2209 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "South Africa's Ngidi out of ODIs due to positive COVID test - Reuters",
          "description": "Cricket South Africa said on Wednesday fast bowler Lungi Ngidi has dropped out of their three-match One Day International series against the Netherlands after testing positive for COVID-19.",
          "url": "https://www.reuters.com/lifestyle/sports/south-africas-ngidi-out-odis-due-positive-covid-test-2021-11-24/",
          "urlToImage": "https://www.reuters.com/resizer/Wj4jCbF21bsEJgVuVIrqduF8EPs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O76UXF2UUFJI7OCMGTRVLH2Q7Q.jpg",
          "publishedAt": "2021-11-24T07:23:00Z",
          "content": "PRETORIA, Nov 24 (Reuters) - Cricket South Africa said on Wednesday fast bowler Lungi Ngidi has dropped out of their three-match One Day International series against the Netherlands after testing pos… [+851 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "New Zealand spinner Ajaz takes all 10 wickets against India - Reuters",
          "description": "New Zealand spinner Ajaz Patel became only the third bowler to pick up all 10 wickets in an innings in international cricket, achieving the feat against India in the second test at the Wankhede Stadium.",
          "url": "https://www.reuters.com/lifestyle/sports/new-zealand-spinner-ajaz-takes-all-10-wickets-against-india-2021-12-04/",
          "urlToImage": "https://www.reuters.com/resizer/ZOoV7_l7WfdIQNXngkdkTN1eGA0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2APZHUNOBJJ5DLZIWRBKN5DB7Q.jpg",
          "publishedAt": "2021-12-04T08:44:00Z",
          "content": "MUMBAI, Dec 4 (Reuters) - New Zealand spinner Ajaz Patel became only the third bowler to pick up all 10 wickets in an innings in international cricket, achieving the feat against India in the second … [+1918 chars]"
        }
      ]

    Check = () => {
        console.log("Hello i am check");
    }
    constructor() {
        super();
        this.state = {
            article: null,
            loading: false,
            page : 1,
            totalResults : null,
        }
    }

    async componentDidMount() {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4d1caf6e9f5491ab8f802243cc59a0b&page=${this.state.page}&pagesize=${this.props.pageSize}`);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            article: parseData.articles,
            totalResults : parseData.totalResults
        });
    }

    handlePreviuosBtn = async () =>{
        console.log("previous");
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4d1caf6e9f5491ab8f802243cc59a0b&page=${this.state.page-1}&pagesize=${this.props.pageSize}`);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            article: parseData.articles,
            page : this.state.page-1,
        });
    }
    handleNextBtn = async () =>{
        console.log("Next");
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4d1caf6e9f5491ab8f802243cc59a0b&page=${this.state.page+1}&pagesize=${this.props.pageSize}`);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            article: parseData.articles,
            page : this.state.page+1,
        });
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-3 '>FCJ News</h1>
                <div className="row">
                    {this.state.article&&this.state.article.map((message) => {
                        return <div className="col-md-4" key={message.url}>
                            <NewsItem title={(message.title !== null) ? message.title : ""} description={(message.description !== null) ? message.description : ""} imageUrl={(message.urlToImage !== null) ? message.urlToImage : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png"} newsUrl={message.url} />
                        </div>
                    })}
                </div>
                
                <div className="d-flex bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <button disabled={!(this.state.page>1)} type="button" className="btn btn-dark" onClick={this.handlePreviuosBtn} > &larr; Previous</button>
                    </div>
                    <div className="ms-auto p-2 bd-highlight">
                        <button disabled={(this.state.page>=Math.ceil((this.state.totalResults/this.props.pageSize)))}type="button" className="btn btn-dark" onClick={this.handleNextBtn} >Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
