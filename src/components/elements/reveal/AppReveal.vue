<template>
    <div>
        <a href="">Click to reveal</a>
        <div>
           {{ text }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

