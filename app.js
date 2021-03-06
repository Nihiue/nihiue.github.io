LS_PREFIX = "lucky_2018_";

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      actionStartTime: 0,
      userList: [],
      resultList: [],
      toastText: '',
      showToast: false,
      isMobile: false
    };
  },
  mounted() {
    this.initApp();
  },
  methods: {
    clearFocus(e) {
      if (e && e.target) {
        e.target.blur();
      }
    },
    updateImageAreaSize() {
      const vpSize = window.innerWidth;
      let imageSize;
      if (vpSize <= 800) {
        imageSize = vpSize;
      } else {
        imageSize = Math.min(1000, Math.round(vpSize/1.8));
      }

      const imageContainer = document.querySelector('.image-area');
      imageContainer.style.width = imageSize + 'px';
      imageContainer.style.height = imageSize + 'px';
      this.turntable.setImageSize(imageSize);
    },
    initApp() {
      const self = this;
      this.turntable = new Turntable('#main-canvas', '#sub-canvas');
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
        if (window.innerWidth > 800) {
          self.scrollResult();
        }
      };
      this.isMobile = (/iphone|ipad|android/i).test(navigator.userAgent);
      if (this.isMobile) {
        const subEl = document.querySelector('#sub-canvas');
        subEl.addEventListener('touchstart', function (e) {
          self.actionStart();
          e.preventDefault();
        });
        subEl.addEventListener('touchend', function (e) {
          self.actionEnd();
          e.preventDefault();
        });
      } else {
        document.addEventListener('keyup', function (e) {
          if (e.keyCode !== 32 || e.target !== document.body) {
            return;
          }
          self.actionEnd();
          e.preventDefault();
        });
        document.addEventListener('keydown', function (e) {
          if (e.keyCode !== 32 || e.repeat || e.target !== document.body) {
            return;
          }
          self.actionStart();
          e.preventDefault();
        });
      }
      this.updateImageAreaSize();
      window.addEventListener('resize', function() {
        self.updateImageAreaSize();
      });
      const appEl = document.querySelector('#app');
      appEl.classList.remove('not-ready');
      this.readData();
      this.applyData();
    },
    actionStart() {
      if (this.turntable.isRunning || this.actionStartTime !== 0) {
        return;
      }
      this.turntable.drawSub(true);
      this.actionStartTime = Date.now();
    },
    actionEnd() {
      if (this.turntable.isRunning || this.actionStartTime === 0) {
        return;
      }
      const delta = Date.now() - this.actionStartTime;
      this.actionStartTime = 0;
      const speed = Math.round(delta * 0.04);
      this.turntable.drawSub(false);
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
        label: `Item ${this.userList.length}`,
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
        for (var i = 0; i < 13; i++) {
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