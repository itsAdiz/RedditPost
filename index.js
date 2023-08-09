const subredditUrl = 'https://www.reddit.com/r/{subredditHere}.json';

const fetchSubredditJSON = async () => {
  try {
    const response = await fetch(subredditUrl);
    const jsonData = await response.json();

    if (jsonData && jsonData.data && jsonData.data.children) {
      const children = jsonData.data.children;
      const mainSource = children[1].data
      
      console.log(`News Title :${children[1].data.title}\n Type : ${mainSource.subreddit}\nimg : ${mainSource.preview.images[0].source.url}\n Link :${mainSource.url}`)
    } else {
      console.log('Invalid JSON data.');
    }
  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
};

fetchSubredditJSON();
