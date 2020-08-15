<template>
  <Layout>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li class="selected">收入</li>
      </ul>
    </div>
    <div>日期</div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text">
      </label>
    </div>
    <div>
      <label class="expense">
        <span class="spend">支出</span>
        <input type="text">
      </label>
    </div>
    <div class="tags">
      分类
      <ul class="current">
        <li>饮食费</li>
        <li>日用品</li>
        <li>衣服</li>
        <li>美容</li>
        <li>交际费</li>
        <li>编辑 ></li>
      </ul>
    </div>

    <div>
      <button>支出输入</button>
    </div>
  </Layout>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>
