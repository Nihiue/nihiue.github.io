LS_PREFIX = "lucky_2018_";

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      spaceKeyStart: 0,
      userList: [{
        label: 'test',
        weight: 1,
        id: 'test'
      }],
      resultList: [],
      toastText: '',
      showToast: false
    };
  },
  mounted() {
    this.initApp();
  },
  methods: {
    initApp() {
      const self = this;
      this.turntable = new Turntable('#main-canvas', '#sub-canvas', 1000, 1000);
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
      };
      document.addEventListener('keyup', function (e) {
        if (e.keyCode !== 32 || self.turntable.isRunning || e.target !== document.body || self.spaceKeyStart === 0) {
          return;
        }
        const speed = Math.round((Date.now() - self.spaceKeyStart) * 0.04);
        self.spaceKeyStart = 0;
        self.turntable.drawSub(false);
        self.turntable.spin(speed);
      });
      document.addEventListener('keydown', function (e) {
        if (e.keyCode !== 32 || e.repeat || self.turntable.isRunning || e.target !== document.body || self.spaceKeyStart !== 0) {
          return;
        }
        self.turntable.drawSub(true);
        self.spaceKeyStart = Date.now();
      });
      this.readData();
      this.applyData();
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