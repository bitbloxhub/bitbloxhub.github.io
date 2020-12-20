function albumDownload(albumname) {
  var html="";
  albumMeta=JSON.parse(geturl(`/_data/albums/${albumname}/albuminfo.json`));
  html=`
    <h1>${albumMeta["name"]}</h1>
    <p> in format ${albumMeta["format"]}</p>
    <p> md5sum:${albumMeta["md5sum"]} </p>
    <a href="/_data/albums/${albumname}/album.${albumMeta["extension"]}" download>download now!</a>
  `;
  return html;
};

const urlParams = new URLSearchParams(window.location.search);
var album_div = document.querySelector("#album_div");
album_div.innerHTML = albumDownload(urlParams.get("albumname"));
