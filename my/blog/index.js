function getListing() {
  var postList = JSON.parse(geturl("/_data/blog/postlist.json"));
  postList.reverse();
  var returnHtml = "";
  var postsRendered=[];
  for (const post of postList){
    var postElement="";
    var metadata=JSON.parse(geturl(`/_data/blog/posts/${post}/meta.json`));
    var postImagePath;
    if (metadata["has-photo"]) {
      postImagePath=`/_data/blog/posts/${post}/image.svg`;
    } else {
      postImagePath=`/_data/blog/noimage.svg`;
    };
    var posturl=new URL("/my/blog/readpost.html",location.origin);
    posturl.searchParams.set("postname",post);
    var postElementInside=`
    <a href="${posturl.href}"><h2>${metadata["title"]}</h2></a>
    <p>published ${metadata["published-human"]}</p>
    <img src="${postImagePath}" height="480" width="640" />
    `;
    postElement=`<li>${postElementInside}</li>`
    postsRendered.push(postElement)
  };
  var returnHtmlList=postsRendered.join("");
  returnHtml=`<ul class="extra_list_nolist" style="text-align:center">${returnHtmlList}</ul>`;
  return returnHtml;
};

var blogDiv=document.querySelector("#blog_div");
blogDiv.innerHTML=getListing();
