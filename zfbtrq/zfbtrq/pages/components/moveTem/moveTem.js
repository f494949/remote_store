Component({
    /**
     * 组件的属性列表
     */
    props: {
        onResult: data => {
            console.log(data);
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        x: 0,
        oldx: 0,
        isOk: false,
        size: {
            pathway: 0,
            track: 0,
        },
        leftval: 16,
    },

    methods: {
        /**
         * 组件的方法列表
         */
        onChanged(e) {
            let v = 16 + e.detail.x;
            this.setData({
                oldx: e.detail.x,
                leftval: v,
                // x: e.detail.x,
            });
        },
        moveend(e) {
            this.setData({
                x: e.detail.x,
            });
        },
        onEnd() {
            if (this.data.isOk) {
                return;
            }
            // console.log(this.data.oldx, this.data.size.pathway, this.data.size.track);
            if (this.data.oldx >= 193 && this.data.oldx <= 229) {
                // my.showToast({
                //     type: 'none',
                //     content: '验证成功',
                // });
                this.setData({
                    isOk: true,
                });
                this.props.onResult('子组件已完毕');
            } else {
                this.setData({
                    x: 0,
                    oldx: 0,
                    leftval: 16,
                });
            }
        },
    },
});
