function albumList() {
  var html="";
  albumList=JSON.parse(geturl("/_data/albums/list.json"));
  albumList.forEach((item, i) => {
    var albumlink=new URL("/my/albums/getalbum.html",location.origin);
    albumlink.searchParams.set("albumname",item);
    html+= `<li><a href=${albumlink.href}>${item}</a></li>`;
  });
  return html;
};

const urlParams = new URLSearchParams(window.location.search);
var albums_ul = document.querySelector("#albums_ul");
albums_ul.innerHTML = albumList();
