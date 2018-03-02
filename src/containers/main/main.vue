<template lang="html">
  <div class="main">
    <div class="left-menu">
      <img class="logo" src="../../assets/images/logo.jpg" />
      <el-menu
        @select="selectItem"
        default-active="2"
        class="el-menu-vertical-demo">
        <el-menu-item index="examOnline" >
          <i class="el-icon-edit-outline"></i>
          <span slot="title">在线考试</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-star-off"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item index="changePass">修改密码</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right-box">
      <div class="top-bar clearfix">
        <el-dropdown class="f-r" @command="handleCommand">
          <el-button type="text" class="user-menu">
            <i class="el-icon-star-off"></i>
            {{userName}}
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="exit">退出</el-dropdown-item>
            <el-dropdown-item command="changePass">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import httpServer from '@/components/httpServer/httpServer.js'

export default {
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    handleCommand(command) {
      if (command == 'exit') {
        localStorage.removeItem('username');
        this.$router.push('/login');
      } else if (command == 'changePass') {
        this.$router.push('/main/personalCenter/changePass');
      }
    },
    selectItem(i) {
      if (i == 'examOnline') { //点击在线考试
        httpServer({
            url: '/exam/query',
          }, {
            stuId: localStorage.stuId,
          })
          .then((res) => {
            let respData = res.data;
            // let respData = {
            //   "respCode": "1",
            //   "paperId": 38,
            //   "instId" : 26,
            // }
            sessionStorage.instId = respData.instId;
            if(res.data.respCode == '1') {
              this.$router.push(`/main/exam/${respData.paperId}/0`);
            }
          })
          .catch((err) => {

          })


      } else if (i == 'changePass') {
        this.$router.push('/main/personalCenter/changePass');
      }
    }
  },
  created() {
    this.userName = localStorage.username;
  },
  beforeCreate() {
    if (!localStorage.username) {
      this.$router.push('/login');
    }
  }

}
</script>

<style lang="css">
.left-menu {
  position: absolute;
  width: 200px;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 1px solid #e9e9e9;
  overflow-y: auto;
  overflow-x: hidden;
}

.left-menu .logo{
  display: block;
  width: 130px;
  margin: 50px auto;
}

.el-menu {
  border-right : none;
}

.right-box {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 700px;
  padding: 20px 20px 0;
  position: absolute;
  top: 0;
  left: 200px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}
.top-bar {
  border: 0;
  border-bottom: 1px solid #e8e8e8;
  -webkit-box-shadow: none;
  box-shadow: none;
  line-height: 46px;
}
.right-box .user-menu {
  cursor: pointer;
  padding: 0 20px;
}

.el-button--text {
  color: #000
}

.el-button--text:hover {
  color: #000
}

</style>
