<script setup>

</script>
<template>
    <div>
        <el-result
        icon="warning"
        title="404提示"
        sub-title="你找到页面走丢了!"
      >
        <template #extra>
          <el-button type="primary" @click="jump">Back</el-button>
        </template>
      </el-result>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default{
  setup() {
  const router = useRouter()

  const jump =()=>{
          router.push('/')
        }
  return {
    jump
  }
  } 
}
</script>