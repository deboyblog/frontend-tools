# 前端工具集合
## 基于ElectronVue + VueBlu

只为打造一套专属的前端工具集合桌面端

| 进度 | 功能 | 描述 |
|---|---|---------|
| [√] | Px2rem | 750px的UI图 640px的REM方案 1rem=100px的转换率 公式 **目标值(rem) =  待转换像素 * (640 / 750) / 转换率**
| [√] | 自定义布局 | 通过传递x,y,showSlider来控制app的布局转换
| [√] | 占位图 | 可设置宽高、前景色、背景色、显示文字等来制作占位图,可以保存到本地[待完成],也可以获取线上地址

## 怎么跑起来
```
// 下载项目
git clone https://github.com/deboyblog/frontend-tools.git

// 安装依赖
npm run install

// 开发
npm run dev

// 打包成对应平台的安装包 window上只能打包.exe mac上才能打包.dmg和.app
npm run build
```

目前只针对我自身需求来定制 

如有意见或建议 欢迎提 [issues](https://github.com/deboyblog/frontend-tools/issues/new) 

或者你的实现更加牛? 来个 [Pull request](https://github.com/deboyblog/frontend-tools/pulls)
