function stopwatch() {
  var seconds = 0;
  setInterval(function() {seconds++}, 1000);
  return
    {reset: function()}
    function() {
      console.log(seconds)
    }
}
