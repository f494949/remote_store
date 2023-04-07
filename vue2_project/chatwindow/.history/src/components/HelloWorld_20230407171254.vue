<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-col id="chatRecord" :span="24" class="content padding-15">
          <el-col v-for="(item, index) in groupChat" :key="index" :span="24">
            <p>{{ item.message }}</p>
          </el-col>
        </el-col>

        <el-col :span="24" class="padding-15">
          <el-col :span="18">
            <el-input
              ref="input"
              v-model="textarea"
              type="text"
              placeholder="请输入内容"
              autosize
              resize="none"
              maxlength="100"
              show-word-limit
              @keyup.enter.native="send" />
          </el-col>

          <el-col :span="5" :offset="1">
            <el-button type="primary" @click="send">发送</el-button>
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  import testApi from '../api/test'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        textarea: '',
        groupChat: []
      }
    },
    methods: {

      send() {
        if (this.textarea !== '') {
          this.groupChat.push({ message: this.textarea })
          testApi.postListAPI(this.textarea)
          this.textarea = ''
        }
      },

      dateStr (date) {
            //获取js 时间戳
            var time=new Date().getTime();
            //去掉 js 时间戳后三位，与php 时间戳保持一致
            time=parseInt((time-date)/1000);
            //存储转换值
            var s;
            if(time<60*10){//十分钟内
                return '刚刚';
            }else if((time<60*60)&&(time>=60*10)){
                //超过十分钟少于1小时
                s = Math.floor(time/60);
                return  s+"分钟前";
            }else if((time<60*60*24)&&(time>=60*60)){
                //超过1小时少于24小时
                s = Math.floor(time/60/60);
                return  s+"小时前";
            }else if((time<60*60*24*30)&&(time>=60*60*24)){
                //超过1天少于30天内
                s = Math.floor(time/60/60/24);
                return s+"天前";
            }else{
                //超过30天ddd
                var date= new Date(parseInt(date));
                return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            }
        }

    }
  }
</script>

<style scoped>
  .content {
    background: rgb(245, 245, 245);
    overflow-y: scroll;
    overflow-x: hidden;
    height: 500px;
  }

  .padding-15 {
    padding: 15px;
  }

  .text-right {
    text-align: right;
  }
</style>
