function readPost(postname) {
	var postMeta = JSON.parse(geturl(`/_data/blog/posts/${postname}/meta.json`));
	var postContent = geturl(`/_data/blog/posts/${postname}/post.html`);
	var photoPath;
	if (postMeta["has-photo"]) {
		photoPath = `/_data/blog/posts/${postname}/image.svg`;
	} else {
		photoPath = `/_data/blog/noimage.svg`;
	};
	var postImageSvg = geturl(photoPath);
	var posturl = new URL("/my/blog/readpost.html", location.origin);
	posturl.searchParams.set("postname", postname);
	var html = `
  <a href="${posturl.href}"><h2>${postMeta["title"]}</h2></a>
  <p>published ${postMeta["published-human"]}</p>
  ${postImageSvg}
  <div id="post-content">${postContent}</div>
  `;
	return html;
};

const urlParams = new URLSearchParams(window.location.search);
var blogpost_div = document.querySelector("#blogpost_div");
blogpost_div.innerHTML = readPost(urlParams.get("postname"));
