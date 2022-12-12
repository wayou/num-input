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
                this.setData({
                    num: val,
                });
            },
        },
        disabled: {
            type: Boolean,
            observer: function (val) {
                this.setData({
                    disabled: val,
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
            if (this.data.disabled) {
                return;
            }
            var num = this.data.value - this.data.step;
            this.syncValue(num);
        },
        onIncrease: function () {
            if (this.data.disabled) {
                return;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsU0FBUyxDQUFDO0lBQ1IsZUFBZSxFQUFFO1FBQ2YsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixvQkFBb0I7S0FDckI7SUFDRCxVQUFVLEVBQUU7UUFJVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsWUFBQyxHQUFHO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsR0FBRyxFQUFFLEdBQUc7aUJBQ1QsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGO1FBSUQsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLFlBQUMsR0FBRztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHO2lCQUNkLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRjtRQUtELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixRQUFRLFlBQUMsR0FBRztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHO2lCQUNWLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRjtRQUtELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztLQUNSO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsVUFBVTtZQUNSLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLE9BQU87YUFDUjtZQUNELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELFVBQVU7WUFDUixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixPQUFPO2FBQ1I7WUFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLEVBQUUsVUFBVSxDQUFDO1lBQ1YsSUFBQSxLQUFLLEdBQUssQ0FBQyxDQUFDLE1BQU0sTUFBYixDQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELFNBQVMsWUFBQyxHQUFHO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEtBQUE7YUFDSixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5bim5Yqg5YeP55qE5pWw5a2X6L6T5YWl5qGGXG4gKi9cbkNvbXBvbmVudCh7XG4gIGV4dGVybmFsQ2xhc3NlczogW1xuICAgICdleHQtY2xhc3MtaW5wdXQnLFxuICAgICdleHQtY2xhc3MtaW5jcmVhc2UnLFxuICAgICdleHQtY2xhc3MtZGVjcmVhc2UnLFxuICBdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICog6L6T5YWl5qGG55qE5YC8XG4gICAgICovXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIG9ic2VydmVyKHZhbCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG51bTogdmFsLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgKi9cbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIG9ic2VydmVyKHZhbCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGRpc2FibGVkOiB2YWwsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWKoOWHj+WPt+aOp+WItueahOatpemVv1xuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBzdGVwOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMSxcbiAgICAgIG9ic2VydmVyKHZhbCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0ZXA6IHZhbCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5bC65a+477yM5Y+v6YCJ5YC877yaYHNgLGBtYCxgbGBcbiAgICAgKiBAZGVmYXVsdCBtXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdtJyxcbiAgICB9LFxuICB9LFxuICBkYXRhOiB7XG4gICAgbnVtOiAwLFxuICAgIHN0ZXA6IDEsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkRlY3JlYXNlKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBudW0gPSB0aGlzLmRhdGEudmFsdWUgLSB0aGlzLmRhdGEuc3RlcDtcbiAgICAgIHRoaXMuc3luY1ZhbHVlKG51bSk7XG4gICAgfSxcbiAgICBvbkluY3JlYXNlKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBudW0gPSB0aGlzLmRhdGEudmFsdWUgKyB0aGlzLmRhdGEuc3RlcDtcbiAgICAgIHRoaXMuc3luY1ZhbHVlKG51bSk7XG4gICAgfSxcbiAgICBvbklucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5kZXRhaWw7XG4gICAgICB0aGlzLnN5bmNWYWx1ZSh2YWx1ZSk7XG4gICAgfSxcbiAgICBzeW5jVmFsdWUobnVtKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBudW0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbnB1dCcsIHsgdmFsdWU6IG51bSB9KTtcbiAgICB9LFxuICB9LFxufSk7XG4iXX0=