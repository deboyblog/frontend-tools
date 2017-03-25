<template>
    <div>
        <iframe class="container" :style="fullHeight" :src="$route.query.url" frameborder="0">
        </iframe>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    .container {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>
<script type="text/ecmascript-6">
  export default{}
</script>
