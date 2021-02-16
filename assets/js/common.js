$(function () {
  AOS.init({
    duration: 2000
    });
});

$(function () {
  $('#rollRnd').on('click', function() {
    $('#rollRnd').prop("disabled", true);
    $('.arrow').css("visibility", "hidden");
    $('.box-wrapper').css("visibility", "hidden");
    var num;
    
    num = Math.floor(Math.random() * (20 - 1)) + 1
    $('#roulette').removeAttr('class').addClass(`number-${num}`);
    setTimeout(function(){
      var sauna;
      var hit = $("#roulette").attr("class").substr(-2,2);
      if (hit[0] === '-') {
        hit = hit.substr(1,1)
      }
      sauna = $('tbody tr:nth-child('+ hit + ') td').text();
      $('.hit').text(sauna);
      $('.arrow').css("visibility", "visible");
      $('.box-wrapper').css("visibility", "visible");
      $('#rollRnd').prop("disabled", false);
    },3100);
  });
});