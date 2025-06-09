// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/USER/Desktop/%EC%96%B4%ED%94%84%EB%A1%9C%ED%8B%B0%EC%9B%80%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/framework_v0.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/USER/Desktop/%EC%96%B4%ED%94%84%EB%A1%9C%ED%8B%B0%EC%9B%80%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/framework_v0.1/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/USER/Desktop/%EC%96%B4%ED%94%84%EB%A1%9C%ED%8B%B0%EC%9B%80%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/framework_v0.1/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Pages from "file:///C:/Users/USER/Desktop/%EC%96%B4%ED%94%84%EB%A1%9C%ED%8B%B0%EC%9B%80%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/framework_v0.1/node_modules/vite-plugin-pages/dist/index.js";
import Layouts from "file:///C:/Users/USER/Desktop/%EC%96%B4%ED%94%84%EB%A1%9C%ED%8B%B0%EC%9B%80%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/framework_v0.1/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/USER/Desktop/%EC%96%B4%ED%94%84%EB%A1%9C%ED%8B%B0%EC%9B%80%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/framework_v0.1/vite.config.js";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueDevTools(),
    Pages({
      dirs: "src/views",
      // ✅ 이 폴더에 .vue 파일이 있어야 작동
      extensions: ["vue"]
    }),
    Layouts({
      layoutsDir: "src/layout",
      // 기본값
      defaultLayout: "DefaultLayout"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcXHVDNUI0XHVENTA0XHVCODVDXHVEMkYwXHVDNkMwIFx1RDUwNFx1QjgwOFx1Qzc4NFx1QzZDQ1x1RDA2Q1xcXFxmcmFtZXdvcmtfdjAuMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVVNFUlxcXFxEZXNrdG9wXFxcXFx1QzVCNFx1RDUwNFx1Qjg1Q1x1RDJGMFx1QzZDMCBcdUQ1MDRcdUI4MDhcdUM3ODRcdUM2Q0NcdUQwNkNcXFxcZnJhbWV3b3JrX3YwLjFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VTRVIvRGVza3RvcC8lRUMlOTYlQjQlRUQlOTQlODQlRUIlQTElOUMlRUQlOEIlQjAlRUMlOUIlODAlMjAlRUQlOTQlODQlRUIlQTAlODglRUMlOUUlODQlRUMlOUIlOEMlRUQlODElQUMvZnJhbWV3b3JrX3YwLjEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjtcbmltcG9ydCBQYWdlcyBmcm9tIFwidml0ZS1wbHVnaW4tcGFnZXNcIjtcbmltcG9ydCBMYXlvdXRzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtbGF5b3V0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcIi9cIixcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBQYWdlcyh7XG4gICAgICBkaXJzOiBcInNyYy92aWV3c1wiLCAvLyBcdTI3MDUgXHVDNzc0IFx1RDNGNFx1QjM1NFx1QzVEMCAudnVlIFx1RDMwQ1x1Qzc3Q1x1Qzc3NCBcdUM3ODhcdUM1QjRcdUM1N0MgXHVDNzkxXHVCM0Q5XG4gICAgICBleHRlbnNpb25zOiBbXCJ2dWVcIl0sXG4gICAgfSksXG4gICAgTGF5b3V0cyh7XG4gICAgICBsYXlvdXRzRGlyOiBcInNyYy9sYXlvdXRcIiwgLy8gXHVBRTMwXHVCQ0Y4XHVBQzEyXG4gICAgICBkZWZhdWx0TGF5b3V0OiBcIkRlZmF1bHRMYXlvdXRcIixcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnYSxTQUFTLGVBQWUsV0FBVztBQUVuYyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQU4rTCxJQUFNLDJDQUEyQztBQVFwUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFFSixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUE7QUFBQSxNQUNOLFlBQVksQ0FBQyxLQUFLO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBO0FBQUEsTUFDWixlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
