<template>
  <div class="regist">

    <div class="head-nav">
      <img src="">
      <a href="">首页</a>
    </div>
    <div class="tab1 tab">
      <h1>欢迎加入</h1>
      <ul class="tab-nav">
        <li class="actived"><a class="geren" href="javascript:">个人用户</a></li>
        <li class=""><a class="qiye" href="javascript:">企业用户</a></li>
      </ul>
      <div class="content-wrap">
        <div class="content-item current">
          <input type="text" placeholder="  请输入手机号" v-model="num">
          <input type="text" class="picture"  placeholder="  请输入图形验证码" v-model="imgCode" v-on:blur="imgRev"><img src="http://localhost:8090/defaultKaptcha" onclick="this.src='http://localhost:8090/defaultKaptcha?d='+new Date()"/>
          <input type="text" class="yanzhengma" placeholder="  请输入手机验证码" v-model="noteCode" v-on:blur="noteRev"><button class="huoqu" id="phoneReq" @click="noteReq">{{content}}</button>
          <input type="text" placeholder="  请输入邀请码" v-model="inviteUUid">
          <input type="password" placeholder="  密码(6-20位)" v-model="password"><br/>
          <input class="check" type="checkbox" name="">同意《用户协议》<span>已有账户,马上登录</span><br/>
          <input type="submit" class="anniu" value="注册">
        </div>
        <div class="content-item">
          <input type="text" placeholder="  请输入手机号">
          <input type="text" placeholder="  请输入图形验证码">
          <input type="text" placeholder="  请输入手机验证码">
          <input type="password" placeholder="  密码(6-20位)">
          <input type="text" placeholder="  请输入企业名称">
          <input type="text" placeholder="  请上传营业执照"><br/>
          <input class="check" type="checkbox" name="">同意《用户协议》<span>已有账户,马上登录</span><br/>
          <input type="submit" class="anniu" value="注册">
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="copy">Copyright©2018,吉林省易捷网络科技有限公司</p>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'regist',
    components: {

    },data(){
      return{
        num : '',
        imgCode : '',
        noteCode : '',
        password : '',
        inviteUUid : '',
        content: '获取验证码',  // 按钮里显示的内容
        totalTime: 60      //记录具体倒计时时间
      }
    },
    methods: {
      imgRev(){
        this.$axios.get('/rev/kaptchaExist?existCode='+this.imgCode)
          .then(data => {
            alert(data.data.code)
          })
      },
      noteReq(){
        this.$axios.get('/rev/rev/noteReq?num='+this.num)
          .then(data => {
            alert(data.data.code)
            $("#phoneReq").attr('disabled',true)
            document.getElementById('phoneReq').style.cursor = 'not-allowed'
            this.content = this.totalTime + 's后重新发送'      //这里解决60秒不见了的问题
            let clock = window.setInterval(() => {
              this.totalTime--
              this.content = this.totalTime + 's后重新发送'
              if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
                window.clearInterval(clock)
                this.content = '重新获取验证码'
                this.totalTime = 60
                $("#phoneReq").attr('disabled',false)
                document.getElementById('phoneReq').style.cursor = 'pointer'
              }
            },1000)
          })
      },
      noteRev(){
        this.$axios.get('/rev/rev/noteRev?num='+this.num+'&rev='+this.noteCode)
          .then(data => {
            alert(data.data.code)
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../static/yaohuan/css/registe.css';
  @import '../static/yaohuan/css/base.css';
</style>
