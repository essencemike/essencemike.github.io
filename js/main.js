window.onload = function() {
  var strs = '剑阁峥嵘而崔嵬，\n一夫当关，万夫莫开。\n所守或匪亲，化为狼与豺。\n朝避猛虎，夕避长蛇；\n磨牙吮血，杀人如麻。\n锦城虽云乐，不如早还家。\n蜀道之难，难于上青天，\n侧身西望长咨嗟！\n--- 李白 《蜀道难》';

  var timer = null;
  var time_out = 200;
  var i = 0;
  var container = document.getElementById('block');
  var small = document.getElementById('small');

  timer = setInterval(function() {
    var str = strs.substr(0, i);
    container.innerText = str + '_';
    i++;

    if (i > strs.length) {
      clearInterval(timer);
      container.innerText = str + ' ';

      small.style.display = 'block';
    }
  }, time_out);
};