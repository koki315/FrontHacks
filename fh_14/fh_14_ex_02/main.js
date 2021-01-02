class KitchenTimer {
  constructor(name){
    this._name = name;
    this._remainingSeconds = 0;
    this._isRunning = false;

    window.setInterval(() => {
      if(this._isRunning && this._remainingSeconds > 0){
        this._remainingSeconds--;
        console.log(this._name + ': 残り時間' + this._remainingSeconds + '秒です！');
      }
    }, 1000);
    // 第二引数(↑1000)に入れた値ごとに第一引数の関数を実行
  }
  setSeconds(seconds) {
    this._remainingSeconds = seconds;
  }

  start() {
    this._isRunning = true;
  }
  stop (){
    this._isRunning = false;
  }
}

const timer1 = new KitchenTimer('タイマー1');
const timer2 = new KitchenTimer('タイマー2');
timer1.setSeconds(3);
timer2.setSeconds(5);
timer1.start();
timer2.start();