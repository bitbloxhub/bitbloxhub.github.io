function albumDownload(albumname) {
  var html="";
  albumMeta=JSON.parse(geturl(`/_data/albums/${albumname}/albuminfo.json`));
  if (!albumMeta.hasOwnProperty("version")) {
    html=`
      <h1>${albumMeta["name"]}</h1>
      <p> in format ${albumMeta["format"]}</p>
      <p> md5sum:${albumMeta["md5sum"]} </p>
      <a href="/_data/albums/${albumname}/album.${albumMeta["extension"]}" download>download now!</a>
    `;
  };
  if (albumMeta["version"]==2) {
    cover = geturl(albumMeta["cover"]);
    html+=`
      <h1>${albumMeta["name"]}</h1>
      ${cover}
    `;
    var dloptions=albumMeta["dloptions"];
    html+=`
      <h2>Downloads</h2>
    `;
    dloptions.forEach((dloption, i) => {
      html+=`<a href="${dloption["url"]}>${dloption["info"]}</a>"`;
    });
  };
  return html;
};

const urlParams = new URLSearchParams(window.location.search);
var album_div = document.querySelector("#album_div");
album_div.innerHTML = albumDownload(urlParams.get("albumname"));
