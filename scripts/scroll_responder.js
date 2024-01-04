window.onscroll = function() {
  var cur_height = document.body.scrollTop;
  console.log(cur_height);
  document.body.style.backgroundPositionY =
    "-" + Math.floor(cur_height / 4) + "px";
};
