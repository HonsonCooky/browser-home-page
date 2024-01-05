window.onscroll = function() {
  var cur_height = document.body.scrollTop;
  document.body.style.backgroundPositionY =
    "-" + Math.floor(cur_height / 5) + "px";
};
