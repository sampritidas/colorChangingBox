const fs = require('fs');

class Structure {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  square() {
    const refresh = '<meta http-equiv="refresh" content="1" />';
    return `${refresh}<div style="background-color : ${this.color};
     height : ${this.height}px;
      width : ${this.width}px;" ></div>`;
  }
}

const changeBoxColor = (index) => {
  let currentIndex = index;
  setTimeout(() => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const box = new Structure(200, 400, colors[currentIndex]);
    fs.writeFileSync('colorChangingBox.html', box.square(), 'utf8');
    currentIndex -= 1;
    if (currentIndex === -1) {
      currentIndex = colors.length - 1;
    }
    changeBoxColor(currentIndex);
  }, 1000);
};

changeBoxColor(3);
