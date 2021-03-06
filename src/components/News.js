import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
  }
  static propTypes = {
    country: propTypes.string,
    category: propTypes.string,
  }

  articals = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Bryan Pietsch, Jeff Stein, Matt Viser",
      "title": "Biden seeks to use Russian oligarchs' seized assets to help Ukraine - The Washington Post",
      "description": "There is a bipartisan push to send Kyiv financial support using the assets of oligarchs linked to Russian President Vladimir Putin.",
      "url": "https://www.washingtonpost.com/politics/2022/04/28/biden-russia-oligarchs-assets-ukraine/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OSDXGQWGVUI6ZDH7GOYFT5GBW4.jpg&w=1440",
      "publishedAt": "2022-04-28T14:26:15Z",
      "content": "Placeholder while article actions load\r\nThe White House on Thursday announced a proposal to allow U.S. authorities to liquidate the assets of Russian oligarchs and donate the proceeds to Ukraine, see… [+8029 chars]"
    },
    {
      "source": {
        "id": "ign",
        "name": "IGN"
      },
      "author": "George Yang",
      "title": "Xbox and Bethesda Showcase Set for June 12 - IGN - IGN",
      "description": "Xbox and Bethesda have announced that a summer showcase will air on June 12.",
      "url": "https://www.ign.com/articles/xbox-bethesda-showcase-e3",
      "urlToImage": "https://assets-prd.ignimgs.com/2022/04/28/xboxsymbols-blogroll-logos-1651151306485.jpg?width=1280",
      "publishedAt": "2022-04-28T13:52:16Z",
      "content": "Xbox and Bethesda have announced that a summer showcase will air on June 12 at 10am Pacific / 1pm Eastern / 6pm UK (that's June 13 at 4am Sydney time).\r\nThis showcase will include upcoming games comi… [+1825 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Lee Brown",
      "title": "Reddit sleuths may have led police to teen suspect in Lily Peter's murder - New York Post ",
      "description": "The 14-year-old boy charged with sexually assaulting and killing 10-year-old Wisconsin girl Lily Peters may have been busted after a flurry of tips about an online post from a possible key witness.…",
      "url": "https://nypost.com/2022/04/28/arrest-of-teen-in-lily-peters-death-due-to-help-from-reddit/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/redddit-lily-peters.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-04-28T13:50:00Z",
      "content": "The 14-year-old boy charged with sexually assaulting and killing 10-year-old Wisconsin girl Lily Peters may have been busted after a flurry of tips about an online post from a possible key witness, a… [+3860 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Johnny Depp's Team Continues To Call Witnesses In Week 3 Of Defamation Trial | LIVE - ET Canada",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYkZJaW1IR9g",
      "urlToImage": null,
      "publishedAt": "2022-04-28T13:49:19Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Caitlin McFall",
      "title": "Germany flips on sending arms to Ukraine, lawmakers overwhelmingly approve heavy weaponry shipment - Fox News",
      "description": "German lawmakers on Thursday voted to send “heavy weapons and complex machinery” to Ukraine just one week after claiming its arms reserves were tapped.",
      "url": "https://www.foxnews.com/world/germany-flips-again-ukraine-aid-heavy-arms-criticism",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/GettyImages-1239049227.jpg",
      "publishedAt": "2022-04-28T13:43:38Z",
      "content": "German lawmakers on Thursday voted to send \"heavy weapons and complex machinery\" to Ukraine just one week after claiming its arms reserves were tapped.\r\nThe vote in the lower house of parliament sign… [+2985 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Charlie Lankston",
      "title": "Jason Sudeikis is slammed for serving Olivia Wilde with custody papers on stage - Daily Mail",
      "description": "Wilde, 38, was mid-way through a presentation about her upcoming thrilled Don't Worry Darling at CinemaCon in Las Vegas when she was given a manila envelope by a process server.",
      "url": "https://www.dailymail.co.uk/femail/article-10763575/Jason-Sudeikis-slammed-serving-Olivia-Wilde-custody-papers-stage.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2022/04/28/12/57144653-0-image-a-9_1651146166709.jpg",
      "publishedAt": "2022-04-28T13:37:21Z",
      "content": "Ted Lasso star Jason Sudeikis has sparked furious debate online after his ex-fiencee Olivia Wilde was served with custody papers while she was on-stage in front of 4,000 people giving a presentation … [+20024 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Lisa Respers France, CNN",
      "title": "Kim Kardashian cries as Kanye West retrieves rest of sex tape - CNN",
      "description": "We now have more insight into how Kanye West helped Kim Kardashian get the remaining footage of her infamous sex tape.",
      "url": "https://www.cnn.com/2022/04/28/entertainment/kim-kardashian-kanye-sex-tape/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/140926114228-kimye-frow-super-tease.jpg",
      "publishedAt": "2022-04-28T13:35:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Elliot Smith",
      "title": "Europe faces recession if Putin fully shuts off the gas taps - CNBC",
      "description": "Europe could be pushed into recession if Russia's gas embargo widens, economists have suggested, after Gazprom cut off supplies to Poland and Bulgaria.",
      "url": "https://www.cnbc.com/2022/04/28/europe-faces-recession-if-putin-fully-shuts-off-the-gas-taps.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107019846-1645689450474-gettyimages-1232264295-RUSSIA_GAZPROM.jpeg?v=1651152233&w=1920&h=1080",
      "publishedAt": "2022-04-28T13:24:12Z",
      "content": "Russian state-owned energy giant Gazprom announced that it would halt gas supplies to Poland and Bulgaria after they refused to pay for gas in Russian rubles following the Kremlin's demands.\r\nEurope … [+4383 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Defector.com"
      },
      "author": null,
      "title": "It's A Great Brawl When Stubby Clapp Tackles \"A Big Strong Guy\" - Defector",
      "description": "As far as bench-clearing basebrawls go, the fight that broke out in the bottom of the eighth inning of the New York Mets' game against the St. Louis Cardinals on Wednesday hit all the right notes.",
      "url": "https://defector.com/its-a-great-brawl-when-stubby-clapp-tackles-a-big-strong-guy/",
      "urlToImage": "https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/04/GettyImages-1240286082.jpg?resize=1080,720",
      "publishedAt": "2022-04-28T13:22:00Z",
      "content": "As far as bench-clearing basebrawls go, the fight that broke out in the bottom of the eighth inning of the New York Mets game against the St. Louis Cardinals on Wednesday hit all the right notes. You… [+2739 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Julia Musto",
      "title": "China reports first human infection of H3N8 bird flu strain - Fox News",
      "description": "China's National Health Commission said that it recorded its first human infection with the H3N8 strain of avian influenza.",
      "url": "https://www.foxnews.com/world/china-first-human-infection-h3n8-bird-flu",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/China-Chicks.jpg",
      "publishedAt": "2022-04-28T13:12:11Z",
      "content": "China'shealth authority said Tuesday that it recorded its first human infection with the H3N8 strain of avian influenza. \r\nIn a statement, the National Health Commission (NHC) said the variant was fo… [+2204 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Allison Johnson",
      "title": "OnePlus Nord N20 5G review: T-Mobile's best budget 5G phone - The Verge",
      "description": "OnePlus doing what it does best.",
      "url": "https://www.theverge.com/23044768/oneplus-nord-n20-5g-review-price-screen-specs-camera-battery",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/9RP_HJXOUcpguMqZrAEYMoBbYQk=/0x182:2040x1250/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23418316/ajohnson_220425_5165_0001.jpg",
      "publishedAt": "2022-04-28T13:00:00Z",
      "content": "The OnePlus Nord N20 5G is OnePlus at its best. While the company hasnt quite mastered the flagship, it has dialed in the recipe for a stellar budget phone. \r\nFor $282, the N20 delivers performance t… [+14458 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Ariel Zilber",
      "title": "Elon Musk jokes he'll buy Coca-Cola to 'put the cocaine back in' - New York Post ",
      "description": "Elon Musk said he was “buying Coca-Cola to put the cocaine back in” as he joked about what he plans to do next following his $44 billion acquisition of Twitter. In a late Wednesday gab …",
      "url": "https://nypost.com/2022/04/28/elon-musk-jokes-hell-buy-coca-cola-to-put-the-cocaine-back-in/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/elon-musk-vows-twitter-maximum-fun-06.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-04-28T12:52:00Z",
      "content": "Elon Musk said he was “buying Coca-Cola to put the cocaine back in” as he joked about what he plans to do next following his $44 billion acquisition of Twitter. \r\nIn a late Wednesday gab session with… [+4758 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Anna Cooban, CNN Business",
      "title": "Russian gas customers in Europe may accept Putin's payment terms - CNN",
      "description": "Some of Russia's biggest natural gas customers in Europe's are preparing to accept the Kremlin's new payment terms rather than risk being cut off by Moscow, a fate suffered by Poland and Bulgaria this week.",
      "url": "https://www.cnn.com/2022/04/28/energy/russian-gas-payments-eu/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220428110203-europe-russia-gas-payments-super-tease.jpg",
      "publishedAt": "2022-04-28T12:41:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "WAPT Jackson"
      },
      "author": "Angela Williams",
      "title": "NASA confirms loud noise heard by Mississippians was a meteor - WAPT Jackson",
      "description": "MEMA says the meteor ran parallel to Mississippi River.",
      "url": "https://www.wapt.com/article/mississippi-fireball-meteor-confirmed-by-nasa/39841984",
      "urlToImage": "https://kubrick.htvapps.com/vidthumb/b027feb1-e688-49c7-835a-39216095d26b/b027feb1-e688-49c7-835a-39216095d26b_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      "publishedAt": "2022-04-28T12:35:00Z",
      "content": "CLAIBORNE COUNTY, Miss. —A loud noise that was heard by residents in areas of Mississippi has been confirmed as a meteor.\r\n\"After multiple reports of a loud sound (Wednesday) morning across a portion… [+869 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "2022 NFL Mock Draft: Four big trades, three involving QBs, highlight Jason La Canfora's one and only mock - CBS Sports",
      "description": "Will the Falcons, Panthers, Seahawks and Lions all get Round 1 QBs? It's almost time to find out",
      "url": "https://www.cbssports.com/nfl/draft/news/2022-nfl-mock-draft-four-big-trades-three-involving-qbs-highlight-jason-la-canforas-one-and-only-mock/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/04/28/57b78c2e-9c76-4b74-a420-0729cee8183f/thumbnail/1200x675/feb7268402edc70e64bf0efcf5d1b582/malik1-getty.jpg",
      "publishedAt": "2022-04-28T12:34:00Z",
      "content": "It's finally here. The draft is upon us. Hope you are ready.\r\nAfter much angst, it's time to live with this final mock forever. The top 10 I produced on Monday morning is fairly well reflected here, … [+461 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Anneken Tappe, CNN Business",
      "title": "The US economic growth rate plunged in the first quarter - CNN",
      "description": "America's economic growth slowed sharply in the first quarter of 2022, data from the Bureau of Economic Analysis showed Thursday.",
      "url": "https://www.cnn.com/2022/04/28/economy/us-economy-first-quarter-gdp/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220311102658-shopping-new-york-0310-super-tease.jpg",
      "publishedAt": "2022-04-28T12:31:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Sarah Min",
      "title": "Stocks making the biggest moves premarket: Meta, Teladoc, Pinterest, Qualcomm and more - CNBC",
      "description": "These are the stocks posting the largest moves in Thursday premarket trading.",
      "url": "https://www.cnbc.com/2022/04/28/stocks-making-the-biggest-moves-premarket-meta-teladoc-pinterest-qualcomm-and-more-.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106967640-16355068612021-10-29t083547z_1819923294_rc28jq9qfdv6_rtrmadp_0_facebook-connect.jpeg?v=1635506887&w=1920&h=1080",
      "publishedAt": "2022-04-28T12:15:18Z",
      "content": "Check out the companies making headlines in Thursday premarket trading.\r\nMeta Shares of the Facebook parent soared more than 16% in premarket trading after the tech company reported better-than-expec… [+3475 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Arlette Saenz and Kate Sullivan, CNN",
      "title": "Biden to send Congress proposals to further pressure Russian oligarchs - CNN",
      "description": "President Joe Biden will send a proposal to Congress Thursday outlining a legislative package to further pressure Russian oligarchs over Russia's war in Ukraine, including using money from their seized assets to fund Ukraine's defense, the White House said.",
      "url": "https://www.cnn.com/2022/04/28/politics/biden-ukraine-congress/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220421101552-01-biden-ukraine-remarks-0421-super-tease.jpg",
      "publishedAt": "2022-04-28T12:00:00Z",
      "content": "(CNN)President Joe Biden will send a proposal to Congress Thursday outlining a legislative package to further pressure Russian oligarchs over Russia's war in Ukraine, including using money from their… [+4575 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "https://www.engadget.com/about/editors/steve-dent",
      "title": "Amazon one-day PC accessory sale offers savings of up to 48 percent - Engadget",
      "description": "For anyone building a PC or looking for accessories like monitors, storage or keyboards, Amazon is having a one-day sale that might be of strong interest..",
      "url": "https://www.engadget.com/amazon-one-day-pc-and-accessory-sale-offers-savings-of-up-to-45-percent-105522979.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-04/738b61c0-c6d9-11ec-bfdb-e5fa7ade5688",
      "publishedAt": "2022-04-28T10:58:30Z",
      "content": "For anyone building a PC or looking for accessories like monitors, storage or keyboards, Amazon is having a one-day sale that might be of strong interest. A host of desirable items are significantly … [+1750 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Exclusive: 'We'll fight as long as we have to,' Ukrainian fighter says from Mariupol - Reuters",
      "description": "A Ukrainian soldier holed up in a steel works in Mariupol said his forces would fight for as long as needed and he urged world leaders to find a way to save civilians and the hundreds of troops trapped in Russia's \"medieval\" siege.",
      "url": "https://www.reuters.com/world/europe/exclusive-well-fight-long-we-have-to-ukrainian-fighter-says-mariupol-2022-04-28/",
      "urlToImage": "https://www.reuters.com/resizer/OsQxD_MQELtvBlhExo5OSh053Ac=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MJARIQYL3FMT3JI3H6JD2FRMIE.jpg",
      "publishedAt": "2022-04-28T10:45:00Z",
      "content": "KYIV, April 28 (Reuters) - A Ukrainian soldier holed up in a steel works in Mariupol said his forces would fight for as long as needed and he urged world leaders to find a way to save civilians and t… [+4870 chars]"
    }
  ];
  constructor() {
    super();
    this.state = {
      articales: this.articals,
      loading: false,
      page: 1,
      totalResults: 0,

    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    this.setState({ 'loading': true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articales: parseData.articles, 'loading': false, 'totalResults': parseData.totalResults })
  }

  handlePreviousNews = async () => {
    console.log("Prevouse News");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ 'loading': true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articales: parseData.articles, page: this.state.page - 1, 'loading': false, 'totalResults': parseData.totalResults })
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    this.setState({ 'loading': true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articales: parseData.articles.concat(parseData.articales),
       'loading': false, 'totalResults': parseData.totalResults })
  }

  handleNextNews = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({ 'loading': true })
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articales: parseData.articles, page: this.state.page + 1, 'loading': false, 'totalResults': parseData.totalResults })
    }

  }

  render() {
    return (

      <div>
        <div className="container mt-1">
          {this.state.loading && <Spinner />}
          {/* <InfiniteScroll
            dataLength={this.state.articales.length}
            next={this.fetchMoreData}
            // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
            hasMore={this.state.articales.length !== this.state.totalResults}
            loader={<h4>Loading...</h4>}
          // scrollableTarget="scrollableDiv"
          > */}
            <div className="row mt-3">
              {!this.state.loading && this.state.articales.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage} publishedAt={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          {/* </InfiniteScroll> */}
          <div className='container d-flex justify-content-center'>
            <button type="button" class="btn btn-primary" onClick={this.handlePreviousNews} >Previous</button>
            <button type="button" class="btn btn-primary" onClick={this.handleNextNews}>Next</button>
          </div>
        </div>
      </div >

    )
  }
}
