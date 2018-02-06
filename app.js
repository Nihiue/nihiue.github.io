LS_PREFIX = "lucky_2018_";

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      actionStartTime: 0,
      userList: [],
      resultList: [],
      toastText: '',
      triggerType: '',
      showToast: false
    };
  },
  mounted() {
    this.initApp();
  },
  methods: {
    initApp() {
      const self = this;
      let size = 1000;
      const screenSize = window.screen.width;
      // const screenSize = window.innerWidth;
      if (screenSize < 1200) {
        size = 600;
      } else if (screenSize < 1400) {
        size = 700;
      } else if (screenSize < 1600) {
        size = 800;
      } else if (screenSize < 1800) {
        size = 900;
      }

      const imageContainer = document.querySelector('.image-area');
      imageContainer.style.width = size + 'px';
      imageContainer.style.height = size + 'px';
      this.turntable = new Turntable('#main-canvas', '#sub-canvas', size, size);
      this.turntable.onResult = function (val, sumWeight) {
        const now = new Date();
        self.resultList.push({
          id: Date.now(),
          name: val.label,
          time: now.toLocaleTimeString(),
          probability: parseFloat(100 * val.weight / sumWeight).toFixed(1) + '%',
          note: ''
        });
        self.saveResultList();
        self.toast(`WINNER: ${val.label}`);
        self.scrollResult();
      };
      document.addEventListener('keyup', function (e) {
        if (e.keyCode !== 32 || e.target !== document.body) {
          return;
        }
        self.actionEnd('key');
      });
      document.addEventListener('keydown', function (e) {
        if (e.keyCode !== 32 || e.repeat || e.target !== document.body) {
          return;
        }
        self.actionStart('key');
      });

      const subEl = document.querySelector('#sub-canvas');

      subEl.addEventListener('mousedown', function (e) {
        self.actionStart('mouse');
      });
      subEl.addEventListener('mouseup', function (e) {
        self.actionEnd('mouse');
      });

      subEl.addEventListener('touchstart', function (e) {
        self.actionStart('touch');
      });
      subEl.addEventListener('touchend', function (e) {
        self.actionEnd('touch');
      });

      const appEl = document.querySelector('#app');
      appEl.classList.remove('not-ready');
      this.readData();
      this.applyData();
    },
    actionStart(type) {
      console.log(type);
      if (this.turntable.isRunning || this.triggerType) {
        return;
      }
      this.triggerType = type;
      this.turntable.drawSub(true);
      this.actionStartTime = Date.now();
    },
    actionEnd(type) {
      if (this.turntable.isRunning || type !== this.triggerType) {
        return;
      }
      this.triggerType = '';
      this.turntable.drawSub(false);
      const delta = Date.now() - this.actionStartTime;
      if (delta < 120) {
        return;
      }
      const speed = Math.round(delta * 0.04);
      this.turntable.spin(speed);
    },
    scrollResult() {
      this.$nextTick(function () {
        const el = document.querySelector('#scroll-anchor');
        el && el.scrollIntoView();
      })
    },
    addUser() {
      this.userList.push({
        id: Date.now(),
        label: 'name',
        weight: 1
      })
    },
    removeResult(index) {
      this.resultList.splice(index, 1);
      this.saveResultList();
    },
    readData() {
      const user = localStorage.getItem(LS_PREFIX + 'user');
      const result = localStorage.getItem(LS_PREFIX + 'result');
      if (user) {
        this.userList = JSON.parse(user);
      } else {
        const list = [];
        for (var i = 0; i< 13; i++) {
          list.push({
            label: `Item ${i}`,
            weight: 1,
            id: i
          });
        }
        this.userList = list;
      }
      if (result) {
        this.resultList = JSON.parse(result);
      }
    },
    applyData() {
      this.turntable.setData(JSON.parse(JSON.stringify(this.userList)));
      this.turntable.drawMain();
    },
    userListSubmit() {
      $('#user-list-config').modal('hide');
      this.applyData();
      this.saveUserList();
    },
    saveUserList() {
      localStorage.setItem(LS_PREFIX + 'user', JSON.stringify(this.userList));
    },
    saveResultList() {
      localStorage.setItem(LS_PREFIX + 'result', JSON.stringify(this.resultList));
    },
    toast(val) {
      this.toastText = val;
      this.showToast = true;
      window.setTimeout(() => {
        this.showToast = false;
      }, 4000);
    }
  }
});