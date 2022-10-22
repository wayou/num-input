/**
 * 带加减的数字输入框
 */
Component({
  externalClasses: [
    'ext-class-input',
    'ext-class-increase',
    'ext-class-decrease',
  ],
  properties: {
    /**
     * 输入框的值
     */
    value: {
      type: Number,
      observer(val) {
        this.setData({
          num: val,
        });
      },
    },
    /**
     * 加减号控制的步长
     * @default 1
     */
    step: {
      type: Number,
      value: 1,
      observer(val) {
        this.setData({
          step: val,
        });
      },
    },
    /**
     * 尺寸，可选值：`s`,`m`,`l`
     * @default m
     */
    size: {
      type: String,
      value: 'm',
    },
  },
  data: {
    num: 0,
    step: 1,
  },
  methods: {
    onDecrease() {
      const num = this.data.value - this.data.step;
      this.syncValue(num);
    },
    onIncrease() {
      const num = this.data.value + this.data.step;
      this.syncValue(num);
    },
    onInput: function (e) {
      const { value } = e.detail;
      this.syncValue(value);
    },
    syncValue(num) {
      this.setData({
        num,
      });
      this.triggerEvent('input', { value: num });
    },
  },
});
