# Vue-Window-Manager


This is a documentation for the "vue-window-manager" module. This module allows the management of windows within a Vue.js application. The windows can be moved within a parent window using drag and drop.

If you have a feature request, please submit it as a GitHub issue.

![ダウンロード](https://user-images.githubusercontent.com/29545778/221391695-ee4707d0-ff76-4235-af91-450b8adf67ca.gif)


#### Example Images
![image](https://user-images.githubusercontent.com/29545778/221392125-95f8161f-bf03-4c70-a452-28d60383ee1b.png)
![image](https://user-images.githubusercontent.com/29545778/221392133-b8e6927c-7a1e-47c3-b6f5-3385d9018c13.png)

#### UseDemo
https://obadesktop.umaxiaotian.com/


To install the package, use the following command:

```
npm install vue-window-manager
```

To use the package, import it in the component where it will be used and include it as a component. Then, add the component's tag to the template section with the desired attributes.

```
<script>
import { onMounted, defineComponent, ref } from "vue";
import  vueWindowManager from 'vue-window-manager';
export default defineComponent({
  components: {
    vueWindowManager
  },
},);
</script>
<template>
  <div style="height:100vh; width: 100wh;">
    <vueWindowManager
          :isActive=true
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
          title="ウィンドウコンポーネントサンプル"
          titleIcon="https://cdn-icons-png.flaticon.com/512/337/337948.png"
          @clickWindow=""
          @clickDestroy=""
          @clickMin=""
					>
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
                  TTESTTEST
                </a>
          </div>
    </vueWindowManager>
  </div>
</template><style>
body {
  background-color: #2a6a83;
}
</style>

```

Below are the API details for the **`<vueWindowManager>`** component:

### **Props**


| Property | Description | Type | Default |
| --- | --- | --- | --- |
| isActive | Controls whether the window is displayed or not. | Boolean | null |
| width | The width of the window in pixels or "auto". | [Number, String] | undefined |
| minWidth | The minimum width of the window. | Number | 0 |
| maxWidth | The maximum width of the window. | Number | undefined |
| height | The height of the window in pixels or "auto". | [Number, String] | undefined |
| minHeight | The minimum height of the window. | Number | 0 |
| maxHeight | The maximum height of the window. | Number | undefined |
| left | Offset left from parent | [Number, String] | 0 |
| top | Offset top from parent | [Number, String] | 0 |
| isMaximize | Determines whether to maximize the window. | Boolean | null |
| title | Specifies the title of the window. | String | '' |
| titleIcon | Determines the icon of the window. | String | '' |
| isDragging | Determines whether to change the position of the window. | Boolean | null |
| isButtonMaximized | Determines whether to display the maximize button. | Boolean | null |
| isButtonMinimized | Determines whether to display the minimize button. | Boolean | null |
| windowId | Determines the ID of the window. | String | '' |


### **Actions**


| Name           | Description                                                    | Type     | Default |
| -------------- | -------------------------------------------------------------- | -------- | ------- |
| `clickWindow`  | Fires when the window is clicked.                              | `String` | `''`    |
| `clickDestroy` | Fires when the window's close button is clicked.                | `String` | `''`    |
| `clickMin`     | Fires when the window's minimize button is clicked.             | `String` | `''`    |




## **License**

MIT License (c) 2023 YUMA OBATA"
