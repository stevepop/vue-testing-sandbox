<template>
 <div>
   <!-- <AppTag 
    text="Here I am"
    :dark=true
    /> -->
    <AppReveal text="Here I am"/>
 </div>
</template>

<script>
import AppTag from '@/components/elements/tag/AppTag'
import AppReveal from '@/components/elements/reveal/AppReveal'
export default {
  components: {
    AppTag,
    AppReveal
  }
}
</script>


