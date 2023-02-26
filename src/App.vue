<script>
import { onMounted, defineComponent, ref } from "vue";
import Window from "./components/Window.vue";
export default defineComponent({
  components: {
    Window
  },
},);
</script>
<template>
  <div style="height:100vh; width: 100wh;">
    <Window        
          :isActive=true
          :zindex=1
          :top=0
          :left= 0
          :width= 500
          :height= 500
          :minWidth= 500
          :minHeight= 500
          :isDragging= true
          :isResizing="['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']"
          :isButtonMaximized= true
          :isButtonMinimized= true
          :isMaximized= false
          :maxWidth= 500
          :maxHeight= 500
          windowId=1
          title="ウィンドウコンポーネント３"
          titleIcon="https://cdn-icons-png.flaticon.com/512/337/337948.png"
          @clickWindow=""
          @clickDestroy=""
          @clickMin="">
          <div style="background-color: black;height: 100%;">        
                <a>TESTTESTTESTTESTTESTTESTTESTTESTTES
                  TTESTTESTTESTTESTTESTTESTTESTTESTTEST
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TESTTESTTESTTESTTESTTESTTESTTESTTESTTES
                  TTESTTEST
                </a>
          </div>
    </Window>
  </div>
</template>
<style>
body {
  background-color: #2a6a83;
}
</style>