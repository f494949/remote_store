<script src="https://cdn.staticfile.org/vue/3.2.36/vue.global.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
      import { listMsg, sendMsg } from '@/api/index'
      export default {
        name: 'chat',
        props: {
          value: {
            type: Boolean,
            default: false,
          },
        },
        data() {
          return {
            chatVisible: this.value,
            loading: false,
            defualtAvatar: require('../../assets/defult-avatar.svg'), // 后端没有返回头像默认头像，注意：需要用require请求方式才能动态访问本地文件
            data: [],
            distincData: [], // 消息去重数组
            offsetMax: 0, // 最大偏移位，记录当前获取的最大id，往后的定时轮询数据时每次只获取比这个id大的数据
            offsetMin: 0, // 最小偏移位，记录当前获取的最小id，往上滑动时每次只获取比这小id大的数据
            searchForm: {
              // 每次定时获取数据或首次加载数据提交的form表单数据
              pageNumber: 1,
              pageSize: 20,
            },
            form: {
              // 发送数据提交数据表单
              content: '',
              msg: '',
            },
            timerSwitch: 0, // 定时器开关，默认关闭
          }
        },
        methods: {
          init() {},
          loadMsg() {
            // 窗体打开默认加载一页数据，窗体什么周期中值运行一次
            let that = this
            this.searchForm.offsetMax = this.offsetMax
            listMsg(this.searchForm).then((res) => {
              if (res.code == 200) {
                res.data.forEach((e) => {
                  // 标记最大偏移位
                  if (that.offsetMax < e.msgId) {
                    that.offsetMax = e.msgId
                  }
                  e.content = JSON.parse(e.content)
                  that.data.unshift(e)
                  that.distincData.push(e.msgId)
                  // 标记最大偏移位，后端返回数据是逆序，所以最后一条id最新
                  that.offsetMin = e.msgId
                })
                // 数据加载完成，滚动条滚动到窗体底部
                this.scrollToBottom()
              }
            })
          },
          show() {
            // 打开窗体初始化数据
            // 初始化数据
            this.data = []
            this.distincData = []
            this.offsetMax = 0
            this.offsetMin = 0
            this.searchForm.pageNumber = 1
            this.searchForm.pageSize = 20
            this.form = {
              content: '',
              msg: '',
            }
            this.loadMsg()
            this.chatVisible = true
            // 开启定时器
            this.timerSwitch = 1
            this.reloadData()
          },
          sendMsg() {
            // 发送消息
            if (!this.form.msg) {
              this.$Message.warning('不能发送空白信息')
              return
            }
            let content = {
              // 封装消息体
              type: 'txt',
              msg: this.form.msg,
            }
            this.form.content = JSON.stringify(content)
            sendOrderMsg(this.form).then((res) => {
              if (res.code == 200) {
                res.data.content = JSON.parse(res.data.content)
                this.data.push(res.data)
                this.form.msg = ''
                this.distincData.push(res.data.msgId)
                this.scrollToBottom()
                // 发送信息只返回当前一条，此时可能对方已经发送信息，所以不修改偏移量
              }
            })
          },
          scrollToBottom() {
            // 滚动到窗体底部
            this.$nextTick(() => {
              let chatform = document.getElementById('chatform')
              chatform.scrollTop = chatform.scrollHeight
            })
          },
          // 滚动到最上方，取历史数据，根据分页参数取。不用修改偏移标记位，但是需要判重
          scroll() {
            let chatform = document.getElementById('chatform')
            let scrollTop = chatform.scrollTop
            if (scrollTop == 0) {
              this.loading = true
              let that = this
              this.searchForm.offsetMin = this.offsetMin
              this.searchForm.offsetMax = ''
              listMsgByOrder(this.searchForm).then((res) => {
                this.loading = false
                if (res.code == 200) {
                  res.data.forEach((e) => {
                    if (that.distincData.indexOf(e.msgId) < 0) {
                      e.content = JSON.parse(e.content)
                      that.data.unshift(e)
                      that.distincData.push(e.msgId)
                      // 修改最小偏移位
                      if (that.offsetMin > e.msgId) {
                        that.offsetMin = e.msgId
                      }
                    }
                  })
                }
              })
            }
          },
          reloadData() {
            // 判断定时器开关是否开启，如果开启，则执行定时器
            if (this.timerSwitch) {
              setTimeout(() => {
                let params = {}
                params.pageNumber = 1
                params.pageSize = 20
                params.offsetMax = this.offsetMax
                let that = this
                listMsgByOrder(params).then((res) => {
                  if (res.code == 200) {
                    res.data.forEach((e) => {
                      // 修改最大偏移位，放到校验重复之前，防止当前发送信息已经放入消息列表，但是偏移值没该的情况
                      if (that.offsetMax < e.msgId) {
                        that.offsetMax = e.msgId
                      }
                      if (that.distincData.indexOf(e.msgId) < 0) {
                        e.content = JSON.parse(e.content)
                        that.data.push(e)
                        that.distincData.push(e.msgId)
                        // 收到新消息，判断高度，如果当前滚动条高度距底部小于100，则动滑到底部
                        let chatform = document.getElementById('chatform')
                        let gap = chatform.scrollHeight - chatform.scrollTop
                        if (gap > 0 && gap < 400) {
                          this.scrollToBottom()
                        }
                      }
                    })
                    that.reloadData()
                  }
                })
              }, 1000 * 2)
            }
          },
          cancel() {
            // 关闭窗体需要把提示任务开关一起关闭调
            this.chatVisible = false
            this.timerSwitch = 0
          },
        },
        mounted() {},
      }
    </script>