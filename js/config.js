// TODO global variables (shared props*)

// Arrow Function (one-liner)
const cli = args => console.log(args);
const apache = () => window.location.hostname === '127.0.0.1';

// Object Literal (state only)
const Context = {
  domain: window.location.hostname,
  server: apache()? 'atari': 'udara-tv',
  root: apache()? 'http://127.0.0.1:5500/': 'https://2gbeh.github.io/udara-tv/',
  appname: 'Udara TV',
  alias: 'Udara',
  title: 'Udara TV',
  caption: 'Tech News, Movies and TV Shows',
  summary: 'Now available on Udara TV. Download, Add to Watchlist. Improve your experience with personalized content from our curators.',
  req: '?req=/',
}

const Enums = {
  status: ['','News','Movies','TV Shows','YouTube'],
  path: ['','news','movies','tvshows','youtube'],  
  navIco: ['fi fi-rs-home','fi fi-rs-browser','fi fi-rs-video-camera','fi fi-rs-film','fi fi-rs-play-alt'],  
  pages: ['home.html','news.html','movies.html','tvshows.html','youtube.html'],
  
  subProp: ['','publisher','size','episode','duration'],
  subTip: ['','Source','Size','Episodes','Duration'],  
  
  bylProp: ['','editor','actor','actor','creator'],
  bylTip: ['','Editor','Cast','Cast','Channel'],  
  
  act2Ico: ['','fi fi-rs-interlining','fi fi-rs-star','fi fi-rs-star','fi fi-rs-eye'],
  act2Tip: ['','Pages','Ratings','Ratings','Views'],

  act3Pfx: ['','[READ]','[DOWNLOAD]','[DOWNLOAD]','[WATCH]'],

  act4Ico: ['','fi fi-rs-bookmark','fi fi-rs-thumbtack','fi fi-rs-thumbtack','fi fi-rs-bell'],
  act4Tip: ['','Bookmark','Watchlist','Watchlist','Subscribe'],  

  act5Ico: ['','fi fi-rs-interactive','fi fi-rs-download','fi fi-rs-download','fi fi-rs-play'],
  act5Tip: ['','Read','Download','Download','Watch'],
}

// Constructor Function (class)
function Utils()
{
  // const utils = new Utils();
  const Month = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];	
  
  this.shortDate = function(date) {
    let arr = date.split('-'),
    m = parseInt(arr[1]),
    d = parseInt(arr[2]); 
    return `${Month[m]} ${d}`;
  };	

  this.urlTitle = function(title) {
    title = title.replaceAll(' ', '_');
    return title;
  };  

  this.escTitle = function(title) {
    title = title.replaceAll('%20', ' ');
    title = title.replaceAll('_', ' ');
    return title;
  };

  this.bylineCpt = function(tags) {
    let arr = tags.split(','),
    cpt = arr[0].trim();
    return cpt; 
  };
}
const UTILS = new Utils();