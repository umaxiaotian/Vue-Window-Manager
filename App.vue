<script>
import { createApp , defineComponent, ref } from "vue";
// import Window from "./src/components/vueWindowManager.vue";
import  vueWindowManager  from "./dist/vueWindowManager.es";
import "./dist/css/windows10.css"
export default defineComponent({
  components: {
    'Window': vueWindowManager
  },
},);
</script>
<template>
  <div style="height:100%; width: 100%;">
  <Window        
  style="position: absolute;"
          :isActive=true
          :top=200
          :left= 200
          :width= 500
          :height= 500
          :minWidth= 500
          :minHeight= 500
          :isResizing="['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']"
          :isButtonMaximized= true
          :isButtonMinimized= true
          :isMaximized= false
          :maxWidth= 1000
          :maxHeight= 1000
          windowId=3
          title="Google Map"
          titleIcon="data:image/png;base64,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"
          @clickWindow=""
          @clickDestroy=""
          @clickMin="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13126.535640578355!2d133.89596905000002!3d34.663947300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1677680213321!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </Window>
  </div>
</template>
<style>
body {
  background-color: #2a6a83;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>