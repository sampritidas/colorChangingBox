const fs = require('fs');

class Color {
  constructor(ele1, ele2, color) {
    this.ele1 = ele1;
    this.ele2 = ele2;
    this.color = color;
  }

  div() {
    const refresh = '<meta http-equiv="refresh" content="1" />';
    return `${refresh}<div style="background-color : ${this.color};
     height : ${this.ele1}px;
      width : ${this.ele2}px;" ></div>`;
  }
}

const changeBoxColor = (index) => {
  setTimeout(() => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const abc = new Color(200, 400, colors[index]);
    fs.writeFileSync('colorChangingBox.html', abc.div(), 'utf8');
    index -= 1;
    if (index === -1) {
      index = colors.length - 1;
    }
    changeBoxColor(index);
  }, 1000);
};

changeBoxColor(3);
