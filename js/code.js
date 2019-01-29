Blockly.IchigoJamBASIC['右モータ前進'] = function(block) {
  var code = 'OUT 2,1' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['左モータ前進'] = function(block) {
  var code = 'OUT 4,1' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['左モータ停止'] = function(block) {
  var code = 'OUT 4,0' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['右モータ停止'] = function(block) {
  var code = 'OUT 2,0' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['数値'] = function(block) {
  var number_秒数 = block.getFieldValue('秒数');
  var code = number_秒数
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE]
};

Blockly.IchigoJamBASIC['待つ'] = function(block) {
  var value_秒数 = Blockly.IchigoJamBASIC.valueToCode(block, '秒数', Blockly.IchigoJamBASIC.ORDER_NONE);
  var code = 'WAIT ' + value_秒数 * 60 + '\n'
  return code;
};

Blockly.IchigoJamBASIC['左センサ'] = function(block) {
  var code = 'IN(4) = 0'
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};

Blockly.IchigoJamBASIC['中センサ'] = function(block) {
  var code = 'IN(2) = 0'
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};

Blockly.IchigoJamBASIC['右センサ'] = function(block) {
  var code = 'IN(1) = 0'
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};

Blockly.IchigoJamBASIC['LEDを光らせる'] = function(block) {
  var code = 'LED 1' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['LEDをけす'] = function(block) {
  var code = 'LED 0' + '\n'
  return code;
};

Blockly.IchigoJamBASIC['ボタン'] = function(block) {
  var code = 'BTN()'
  return [code, Blockly.IchigoJamBASIC.ORDER_NONE];
};
