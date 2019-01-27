<template>
 <div>
    <AppList>
        <li>Item one</li>
    </AppList>
    <AppFormInput v-model="body"/>

    <AppButton :to="{name: 'dashboard'}" text="Go to Dashboard"/>

    <AppProSignIn />
 </div>
</template>

<script>
import AppList from '@/components/elements/list/AppList'
import AppFormInput from '@/components/elements/form/AppFormInput'
import AppButton from '@/components/elements/button/AppButton'
import AppProSignIn from '@/components/elements/features/AppProSignIn'
export default {

  components: {
    AppList,
    AppFormInput,
    AppButton,
    AppProSignIn
  },

  data () {
    return {
      body: 'abc'
    }
  }
}
</script>


