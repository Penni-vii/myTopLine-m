<template>
 <div>
   <!-- 导航栏 -->
   <van-nav-bar title="登录"/>
   <!-- 表单 -->
    <van-cell-group>
      <van-field label="手机号" placeholder="请输入手机号"/>
      <van-field label="验证码" placeholder="请输入验证码" />
    </van-cell-group>
    <!-- 登录按钮 -->
    <div>
      <van-button type="info">登录</van-button>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
