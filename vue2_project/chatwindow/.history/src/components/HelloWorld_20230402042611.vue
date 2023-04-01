<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-col id="chatRecord" :span="24" class="content padding-15">
          <el-col>
            <p v-bind="send"></p>
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
              @keyup.enter.native="send"
            />
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
  export default {
    name: 'HelloWorld',
    data() {
      return {
        textarea: '',
      }
    },
    
    methods: {
      getData() {
        anxios
          .post('http://localhost/api/data.php')
          .then(function(res) {
            this.message = res.data
          })
          .catch(function(error) {
            console.error()
          })
      },

      send() {
        anxios
          .post('http://localhost/api/data.php', {
            data: {
              message: this.textarea,
            },
          })
          .then(function(res) {
            this.getData()
          })
          .catch(function(error) {
            console.error()
          })
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
