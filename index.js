"use strict";
Component({
    externalClasses: [
        'ext-class-input',
        'ext-class-increase',
        'ext-class-decrease',
    ],
    properties: {
        value: {
            type: Number,
            observer: function (val) {
                console.log('prop val:', val);
                this.setData({
                    num: val,
                });
            },
        },
        step: {
            type: Number,
            value: 1,
            observer: function (val) {
                this.setData({
                    step: val,
                });
            },
        },
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
        onDecrease: function () {
            var num = this.data.value - this.data.step;
            this.syncValue(num);
        },
        onIncrease: function () {
            var num = this.data.value + this.data.step;
            this.syncValue(num);
        },
        onInput: function (e) {
            var value = e.detail.value;
            this.syncValue(value);
        },
        syncValue: function (num) {
            this.setData({
                num: num,
            });
            this.triggerEvent('input', { value: num });
        },
    },
});
