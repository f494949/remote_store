<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-col id="chatRecord" :span="24" class="content padding-15">
          <el-col v-for="(item, index) in groupChat" :key="index" :span="24">
            <p>
              {{ item.name }}
              <small style="color: #909399">{{ rTime(item.created_at) }}</small>
            </p>
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
        message: '',
        group
      }
    },
    methods: {
      getData() {
        anxios
          .post('http://localhost/api/learn.php')
          .then(function(res) {
            this.message = res.data
          })
          .catch(function(error) {
            console.error()
          })
      },

      send() {
        anxios
          .post('http://localhost/api/learn.php', {
            data: {
              message: this.message,
            },
          })
          .then(function(res) {
            this.getData()
          })
          .catch(function(error) {
            console.error()
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
