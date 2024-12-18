// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// import pkg from '@fancyapps/ui';
// const { Fancybox } = pkg;
// import "@fancyapps/ui/dist/fancybox/fancybox.css";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // // 监听路由变化并初始化 Fancybox
    // router.onAfterRouteChanged = () => {
    //   // 清除现有的 Fancybox 绑定，防止重复绑定
    //   Fancybox.destroy();

    //   // 使用选择器字符串重新绑定
    //   Fancybox.bind('[data-fancybox="gallery"]', {
    //     // 选项
    //   });
    // };
  } 
} satisfies Theme
