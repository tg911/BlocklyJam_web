Blockly.Blocks['右モータ前進'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("右タイヤぜんしん");
        // .appendField(new Blockly.FieldImage("img/go-right.png", 25, 25, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['左モータ前進'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左タイヤぜんしん");
        // .appendField(new Blockly.FieldImage("img/go-left.png", 25, 25, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['左モータ停止'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左タイヤていし");
        // .appendField(new Blockly.FieldImage("img/stop.png", 25, 25, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['右モータ停止'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("右タイヤていし");
        // .appendField(new Blockly.FieldImage("img/stop.png", 25, 25, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['数値'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1, 0, 999), "秒数");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['待つ'] = {
  init: function() {
    this.appendValueInput("秒数")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("びょうまつ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['左センサ'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左がわのセンサがはんのうした");
        // .appendField(new Blockly.FieldImage("img/left-eye.png", 25, 25, "*"));
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['中センサ'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("中おうのセンサがはんのうした");
        // .appendField(new Blockly.FieldImage("img/center-eye.png", 25, 25, "*"));
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['右センサ'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("右がわのセンサがはんのうした");
        // .appendField(new Blockly.FieldImage("img/right-eye.png", 25, 25, "*"));
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['LEDを光らせる'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを光らせる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['LEDをけす'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDをけす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ボタン'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタンをおしている");
    this.setOutput(true, "Boolean");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
