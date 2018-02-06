function easeOutCubic(pos) {
  if (pos < 0) {
    return 0;
  }

  if (pos > 1) {
    return 1;
  }
  return (Math.pow((pos - 1), 3) + 1);
}

class Turntable {
  constructor(mainSel = '#main-canvas', subSel = '#sub-canvas') {
    this.height = 1000;
    this.width = 1000;
    this.canvas = document.querySelector(mainSel);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.subCanvas = document.querySelector(subSel);
    this.subCtx = this.subCanvas.getContext('2d');
    this.subCanvas.width = this.width;
    this.subCanvas.height = this.height;

    this.isRunning = false;
    this.currentPosition = 0;
    this.drawSub();
  }
  setImageSize(num) {
    const size = num + 'px';
    this.canvas.style.width = size;
    this.canvas.style.height = size;
    this.subCanvas.style.height = size;
    this.subCanvas.style.width = size;
  }
  setData(data) {
    // 交叉位置
    this.data = data.sort(function () {
      return Math.random() - 0.5;
    });
    // 初始角度随机
    this.currentPosition = Math.round(Math.random() * 36000);
    this.setRotate(this.currentPosition);
  }
  drawMain() {
    const colorMap = ["rgb(33, 150, 243)", "rgb(3, 169, 244)", "rgb(0, 188, 212)", "rgb(0, 150, 136)", "rgb(76, 175, 80)", "rgb(139, 195, 74)", "rgb(205, 220, 57)", "rgb(255, 235, 59)", "rgb(255, 193, 7)", "rgb(255, 152, 0)", "rgb(255, 87, 34)", "rgb(233, 30, 99)", "rgb(244, 67, 54)", "rgb(233, 30, 99)", "rgb(156, 39, 176)", "rgb(103, 58, 183)", "rgb(63, 81, 181)"];
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    this.data.forEach(function (item) {
      const w = parseInt(item.weight, 10);
      if (isNaN(w) || w < 0) {
        item.weight = 0;
      } else {
        item.weight = w;
      }
    });
    const sum = this.data.reduce(function (pre, cur) {
      return pre + cur.weight;
    }, 0);

    this.sumWeight = sum;
    let curPosition = 0;
    for (let idx = 0; idx < this.data.length; idx++) {
      ctx.save();
      const item = this.data[idx];

      item.startPos = Math.round(100 * 360 * curPosition / sum);
      item.endPos = Math.round(100 * 360 * (curPosition + item.weight) / sum);

      let startAngle = 2 * Math.PI * curPosition / sum;
      let endAngle = 2 * Math.PI * (curPosition + item.weight) / sum;

      ctx.beginPath();
      ctx.arc(this.width / 2, this.height / 2, this.width / 4, startAngle, endAngle, false);
      ctx.lineWidth = this.width / 2 - 80;
      ctx.strokeStyle = colorMap[idx % colorMap.length];
      ctx.stroke();
      curPosition += item.weight;

      ctx.beginPath();
      ctx.translate(this.width / 2, this.height / 2);
      ctx.rotate((startAngle + endAngle) / 2 - Math.PI / 2);
      ctx.font = '18px Microsoft YaHei';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = "#fff";
      ctx.fillText(item.label, -27, this.width / 2 - 80, 108);
      ctx.closePath();
      ctx.restore();
    }
  }
  drawSub(isActive) {
    const colorMap = isActive ? ['rgba(255,255,255,0.4)', '#FF5722', '#b71c1c'] : ['rgba(255,255,255,0.6)', '#f44336', '#fff'];
    const ctx = this.subCtx;
    ctx.clearRect(0, 0, this.width, this.height);

    const middleX = this.width / 2;
    const middleY = this.height / 2;

    ctx.beginPath();
    ctx.arc(middleX, middleY, 180, 0, Math.PI * 2, false);
    ctx.fillStyle = colorMap[0];
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(middleX, middleY, 90, 0, Math.PI * 2, false);
    ctx.fillStyle = colorMap[1];
    ctx.fill();
    ctx.closePath();

    ctx.font = 'Bold 40px Microsoft YaHei';
    ctx.textAlign = 'start';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = colorMap[2];
    ctx.beginPath();
    ctx.fillText('开始', this.width / 2 - 40, this.height / 2 - 20, 80);
    ctx.fillText('抽奖', this.width / 2 - 40, this.height / 2 + 20, 80);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(middleX, middleY - 160);
    ctx.lineTo(middleX - 40, middleY - 40);
    ctx.lineTo(middleX + 40, middleY - 40);
    ctx.lineTo(middleX, middleY - 160);
    ctx.fillStyle = colorMap[1];
    ctx.fill();
    ctx.closePath();
  }
  onSpinStop(pos) {
    this.isRunning = false;
    this.currentPosition = pos;

    const indicatorPos = (36000 - pos + 27000) % 36000;
    const matchedItem = this.data.find(function (item) {
      return item.startPos <= indicatorPos && item.endPos >= indicatorPos;
    });

    if (this.onResult) {
      this.onResult(matchedItem, this.sumWeight);
    }
  }
  setRotate(pos) {
    this.canvas.style.transform = `rotate(${pos/100}deg)`;
  }
  spin(initialSpeed) {
    if (this.isRunning || !this.data) {
      return false;
    }
    this.isRunning = true;
    const self = this;

    let speed = initialSpeed;
    let pos = this.currentPosition;
    let lastUpdate = 0;

    function onRequestFrame(timestamp) {
      if (lastUpdate === 0) {
        lastUpdate = timestamp;
      } else {
        const delta = (timestamp - lastUpdate) / 16;
        lastUpdate = timestamp;
        pos = Math.round(pos + 100 * delta * speed) % 36000;
        speed = speed - delta * 4 * (1.003 - easeOutCubic(1 - speed / 50));
        self.setRotate(pos);
      }
      if (speed > 0.005) {
        window.requestAnimationFrame(onRequestFrame);
      } else {
        self.onSpinStop(pos);
      }
    }
    window.requestAnimationFrame(onRequestFrame);
    return true;
  }
}