<template>
  <div class="home">

    <header>
      <div class="content">
        <div class="logo fl"><img src="../static/hanxu/images/logo.png" width="131" height="36"></div>
        <div class="nav fl">
          <ul class="over">
            <li class="fl"><a href="#" class="on">首页</a></li>
            <li class="fl"><a href="#">项目大厅</a></li>
            <li class="fl"><a href="#">咨询中心</a></li>
          </ul>
        </div>
        <div class="bar-login fr">
          <router-link to="/regist">注册</router-link><router-link to="/">登录</router-link>
        </div>

      </div>
    </header>
    <div class="bar over">
      <div class="content">
        <div class="top-img fl"><img src="../static/hanxu/images/top-img.png" width="186" height="92"></div>
        <div class="search fl">
          <input name="" type="text" placeholder="热门搜索：APP 小程序" v-model="serchMsg">
          <input name="" type="submit" value="搜索" >
        </div>
        <div class="Release_btn fr"><a href="#">发布任务</a></div>
      </div>
    </div>
    <div class="content">
      <div class="menus fl">
        <ul>
          <li><a href="#">APP开发</a></li>
          <li><a href="#">创意设计</a></li>
          <li><a href="#">网站开发</a></li>
          <li><a href="#">微信开发</a></li>
          <li><a href="#">其他应用</a></li>
        </ul>
      </div>
      <div class="banner swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="item"><a href="" style="background-image:url(../static/hanxu/images/banner.png)"><img src="../static/hanxu/images/banner.png" alt=""></a></div>
          </div>
          <div class="swiper-slide">
            <div class="item"><a href="" style="background-image:url(../static/hanxu/images/banner.png)"><img src="../static/hanxu/images/banner.png" alt=""></a></div>
          </div>
        </div>
        <div class="swiper-button-prev banner-button-prev"></div>
        <div class="swiper-button-next banner-button-next"></div>
        <div class="swiper-pagination banner-pagination"></div>
      </div>
      <div class="roll-msg fr over">
        <div class="roll swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
            <div class="swiper-slide"><p>10：20 李先*竞标******项目。</p></div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="content">
      <div class="tit"><h2 class="tit-zxxm">最新项目</h2></div>
      <ul class="list-project-index over">
        <!--循环列表-->
        <li v-for="project in projects" class="fl">
          <div class="ilp-item">
            <a href="#">
              <img src="../static/hanxu/images/index_project_pic.png" width="266" height="170">
              <h2>{{project.title}}</h2>
              <p>{{project.message}}</p>
              <div class="list-pimsg over">
                <span class="fl">{{project.type}}</span>
                <span class="fl">{{project.date}}</span>
              </div>
            </a>
          </div>
        </li>
        <!--循环列表-->
      </ul>
    </div>
    <div class="content">
      <div class="tit"><h2 class="tit-jylc">交易流程</h2></div>
      <img src="../static/hanxu/images/jylc_img.png" width="1200" height="256">
    </div>
    <footer>
      <div class="foot_up">
        <div class="content">
          <ul class="foot_up_fl fl over">
            <li class="fl">
              <h2>关于我们 </h2>
              <a href="#">平台简介</a>
              <a href="#">联系我们</a>
              <a href="#">成功案例</a>
            </li>
            <li class="fl">
              <h2>新手指南</h2>
              <a href="#">我要发布</a>
              <a href="#">新闻咨询</a>
            </li>
            <li class="fl">
              <h2>服务保障</h2>
              <a href="#">隐私保护</a>
              <a href="#">免责声明</a>
              <a href="#">用户协议</a>
            </li>
            <li class="fl">
              <h2>帮助中心</h2>
              <a href="#">我是需求方</a>
              <a href="#">我是服务方</a>
              <a href="#">企业认证</a>
            </li>
          </ul>
          <div class="ewm fr"><img src="../static/hanxu/images/ewm.png" width="200" height="200"></div>
          <div class="clear"></div>
        </div>
      </div>

      <div class="copyright"><p>Copyright 2018 - 2019 https://www.yilianyl.com 吉ICP备12345678号</p></div>
    </footer>


  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },data(){
    return{
      rollSwiper : ('.roll', {
        slidesPerView :'auto',
        autoplay:2000,
        direction:'vertical',
        grabCursor:true,
        autoplayDisableOnInteraction:false,
        mousewheelControl:true,
        autoHeight:true,
        loop:true,
      }),
      bannerSwiper : ('.banner', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      }),
      projects : [],
      serachMsg : ''
    }
  },
  methods:{
    reSerach(){
      this.$axios.post('/api/project/projectTable',{title:this.serachMsg})
        .then(data => {
          this.$router.push({name:'/',params: data.data.projectTable}) // 页面路由到项目大厅页面，传递项目列表参数
        })
    }

  },
  created () {
    this.$axios.post('/api/project/projectTable', {begin : 0})
      .then(data => {
        console.log(data)
        this.projects = data.data.projectTable
      })

  }
}
</script>

<style scoped lang="stylus">
    @import '../static/hanxu/css/swiper.min.css';
    @import '../static/hanxu/css/public.css';
    @import '../static/hanxu/css/style.css';
</style>
