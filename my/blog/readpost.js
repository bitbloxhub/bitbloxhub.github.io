function readPost(postname) {
  var postMeta=JSON.parse(geturl(`/_data/blog/posts/${postname}/meta.json`));
  var postContent=geturl(`/_data/blog/posts/${postname}/post.html`);
  var photoPath;
  if (postMeta["has-photo"]) {
    photoPath=`/_data/blog/posts/${postname}/image.svg`;
  } else {
    photoPath=`/_data/blog/noimage.svg`;
  };
  var html=`
  <h1>${postMeta["title"]}</h1>
  <p>published ${postMeta["published-human"]}</p>
  <img src="${photoPath}" height="480" width="640" />
  <div id="post-content">${postContent}</div>
  `;
  return html;
};

const urlParams = new URLSearchParams(window.location.search);
var blogpost_div=document.querySelector("#blogpost_div");
blogpost_div.innerHTML=readPost(urlParams.get("postname"));
