var scrollspeed = 1;
var speedjump = 30;
var startdelay = 1;
var topspace = -10;
var frameheight = 340;

var current = scrollspeed;
var dataobj;
var alturaNoticias;

function scrollStart() {
  dataobj = document.getElementById("scroll");
  alturaNoticias = dataobj.offsetHeight;
  dataobj.style.top = topspace + 'px';
  setTimeout(scrolling, (startdelay * 1000));
}

function scrolling() {
  dataobj.style.top = parseInt(dataobj.style.top) - scrollspeed + 'px';
  if (parseInt(dataobj.style.top) < alturaNoticias * (-1)) {
    dataobj.style.top = frameheight + 'px';
    setTimeout(scrolling, 0);
  } else {
    setTimeout(scrolling, speedjump);
  }
}

function closeNews() {
  var scrollWrapper = document.getElementById("scroll-wrapper");
  if (scrollWrapper) {
    scrollWrapper.style.display = "none"; // Oculta el contenedor de noticias
  }
}
