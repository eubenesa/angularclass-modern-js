function fetchRedditPostTitle(subr) {
  return fetch(`https://www.reddit.com/r/${subr}.json`)
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    return json.data.children;
  })
  .then(function(posts) {
    return posts.pop();
  })
  .then(function(post) {
    return post.data.title;
  });
}

function fetchJSPostTitle() {
  return fetchRedditPostTitle('javascript');
}

function fetchLearnJSPostTitle() {
  return fetchRedditPostTitle('learnjavascript');
}

function fetchMechKeyboardsPostTitle() {
  return fetchRedditPostTitle('mechanicalkeyboards');
}

function done() {
  console.log('Got all them titles. Cool.');
}


fetchJSPostTitle()
.then(function(title) {
  console.log(`/r/javascript title: ${title}`);
  return fetchLearnJSPostTitle();
})
.then(function(title) {
  console.log(`/r/learnjavascript title: ${title}`);
  return fetchMechKeyboardsPostTitle();
})
.then(function(title) {
  console.log(`/r/mechanicalkeyboards title: ${title}`);
  return done();
});
