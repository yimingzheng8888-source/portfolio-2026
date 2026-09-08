# DRIFT 网页模型

`public/models/drift-60.glb` 来自用户提供的 DRIFT Rhino 模型，未改动原始文件。

转换使用官方 rhino3dm 读取可见对象及其缓存渲染网格，排除隐藏图层、曲线、文字和备份几何；毫米转米，Z 向上转 Y 向上。共提取 2,822 个可见几何对象、5,616,716 个三角面，无缺失缓存网格。

合并相同材质后使用 glTF Transform / Meshoptimizer 简化为 869,709 个三角面，再进行 Draco 压缩，发布文件约 2 MB。保留可转换的基础色、金属度、粗糙度及透明属性；Rhino 程序材质、灯光和渲染环境不完全等效。原始文件及未压缩中间文件不发布。

重新压缩已转换的完整 GLB：

```sh
node --max-old-space-size=4096 scripts/optimize-drift.mjs /path/to/drift-full.glb
```

脚本同时更新 `src/data/drift-model.json`。Draco 解码器来自 three.js 所附的 Google Draco glTF 解码器，随网站在 `public/models/draco/` 本地托管。模型与查看器代码仅在访客点击加载按钮后下载。

验证：TypeScript、生产构建；Chrome 桌面及 390px 手机视口；旋转、缩放、视角切换、全屏、自动旋转、失败重试；未点击时不下载 GLB。
