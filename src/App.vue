<script>
import { onMounted, defineComponent, ref } from "vue";
import Window from "./components/Window.vue";
export default defineComponent({
  components: {
    Window
  },
  data() {
    return {
      menuList: {
        0: {
          iconSrc: "photos",
          isActive: true,
          funcName: "saveEditorInfo",
          toolTipText:
            "ウィンドウコンポーネント３",
          zindex: 1,
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          minWidth: 500,
          minHeight: 500,
          isDragging: true,
          isResizing: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
          isButtonMaximized: true,
          isButtonMinimized: true,
          isMaximized: false,
          maxWidth: 1000,
          maxHeight: 1000,
          showComponents: "AppsBoot",
          title:
            "ウィンドウコンポーネント３",
        },
      }
    }
  },
  setup(_props, ctx) {
    const windowInnerWidth = ref(0);

    const windowItem = ref({});
    const displayWindowArea = ref(0);

    onMounted(() => {

    })

    const destroyWindow = (windowId) => {
      windowItem.value[windowId].isActive = false;
    };
    return {
      windowInnerWidth,

      windowItem,
      displayWindowArea,


      destroyWindow,
    };
  },
});
</script>
<template>
  <div :style="`height:100vh; width: 100wh;`">
    <Window v-for="(item, index) in menuList" v-model:top=item.top v-model:left=item.left v-model:width=item.width
      v-model:height=item.height v-model:minWidth=item.minWidth v-model:minHeight=item.minHeight
      v-model:isDragging=item.isDragging v-model:isResizing=item.isResizing v-model:isMaximized=item.isMaximized
      v-model:maxWidth=item.maxWidth v-model:maxHeight=item.maxHeight v-model:isActive=item.isActive :windowId=index
      v-model:title=item.title :windowInnerWidth="windowInnerWidth" v-model:isButtonMaximized=item.isButtonMaximized
      v-model:isButtonMinimized=item.isButtonMinimized titleIcon="https://cdn-icons-png.flaticon.com/512/337/337948.png"
      :style="`z-index:1`" @clickWindow="" @clickDestroy="destroyWindow">
      <a>TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST</a>
    </Window>
  </div>
</template>
<style lang="scss" >
html,

body {

  //  デスクトップ定義
  background-image: url("https://c.wallhere.com/photos/e8/fd/Re_Zero_Kara_Hajimeru_Isekai_Seikatsu_anime_girls_Rem_Re_Zero_anime-5645.png!d");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  height: 100%;
  width: 100%;
  overflow: hidden;

}

// vuetifyをウィンドウ内に収める
.v-application__wrap {
  min-height: 100%
}
</style>