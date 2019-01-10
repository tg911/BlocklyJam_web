Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("スタート");
        // .appendField(new Blockly.FieldImage("img/start.png", 25, 25, "*"));
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['loop_infinite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ずっと");
        // .appendField(new Blockly.FieldImage("img/repeat.png", 25, 25, "*"));
    this.appendStatementInput("contents")
        .setCheck(null);
    // this.appendDummyInput()
        // .appendField("くりかえす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['loop_number'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("回だけ");
        // .appendField(new Blockly.FieldImage("img/count-repeat.png", 25, 25, "*"));
    this.appendStatementInput("contents")
        .setCheck(null);
    // this.appendDummyInput()
    //     .appendField("くりかえす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['if_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("なら");
        // .appendField(new Blockly.FieldImage("img/if.png", 25, 25, "*"));
    this.appendStatementInput("contents")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['if_else_kids'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("なら");
        // .appendField(new Blockly.FieldImage("img/if-else.png", 25, 25, "*"));
    this.appendStatementInput("trueContents")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("そうでなければ");
    this.appendStatementInput("falseContents")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
