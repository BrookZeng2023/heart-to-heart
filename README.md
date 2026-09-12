# 心里有你

一款手机优先、无需账号、数据只保存在本机的真心话网页游戏，支持情侣相处和多人夜谈两种场景。

## 直接开始（网页／PWA）

双击 `index.html` 即可离线游玩。

如需把它安装到手机桌面，请在本目录启动一个本地网页服务，然后用浏览器打开显示的地址：

```powershell
py -m http.server 8080
```

访问 `http://localhost:8080`。浏览器支持时，可从菜单选择“安装应用”或“添加到主屏幕”。

## macOS 桌面版

macOS 桌面版使用 Electron 承载同一套离线网页，题库、设置和自定义问题仍只保存在当前设备。

```bash
npm install
npm run desktop:dev      # 本地运行
npm run desktop:dist     # 生成 Apple Silicon 的 DMG
```

DMG 会输出到 `dist/`。首次打开未签名的本地构建时，macOS 可能要求在“隐私与安全性”中确认打开。

## Android 原生版

Android 版使用 Capacitor 承载相同的应用界面，因此无需维护两套题库或交互逻辑。

```bash
npm install
npm run android:open     # 同步网页资源后，用 Android Studio 打开工程
npm run android:build    # 生成 debug APK（需 Android SDK 和 JDK 21）
```

首次执行 Android 命令后，Capacitor 会创建 `android/` 原生工程。APK 位于
`android/app/build/outputs/apk/debug/app-debug.apk`。

项目同时保留 JDK 17；但 Capacitor 7 的 Android 编译工具链要求 JDK 21，构建脚本会优先使用 macOS Homebrew 安装的 `openjdk@21`。

## iOS 原生版

iOS 版同样由 Capacitor 承载同一套离线网页。需要完整 Xcode 和 Apple 开发者签名，才能安装到真机或提交 App Store。

```bash
npm install
npm run ios:open         # 同步网页资源后，用 Xcode 打开工程
npm run ios:build        # 编译 iPhone Simulator Debug 版本
```

首次执行 iOS 命令后，Capacitor 会创建 `ios/` 原生工程。请在 Xcode 的 Signing & Capabilities 中选择自己的 Team，再连接真机运行。

### iOS 布局排查记录

模拟器/真机出现界面溢出时，先查看 [`docs/ios-layout-fix-history.md`](docs/ios-layout-fix-history.md)，并用 [`docs/ios-layout-troubleshooting-template.md`](docs/ios-layout-troubleshooting-template.md) 记录复现、根因、修复和验证结果。

## 开发结构

- 根目录的 `index.html`、`app.js`、`styles.css` 等是唯一的网页源代码。
- `npm run web:build` 会将网页源复制到被桌面端、Android 与 iOS 端共用的临时 `web/` 目录。
- `electron/` 是 macOS 壳；`capacitor.config.ts` 是 Android 与 iOS 壳配置。
- `npm run native:icons` 会从根目录的 `icon.svg` 生成 Android 与 iOS 的原生启动图标。

## 已有功能

- 场景首页可选择“情侣模式”或“多人夜谈”
- 情侣模式支持两位玩家轮流回答
- 情侣模式包含轻甜、走心、勇敢、18+ 劲爆和不含成人题库的安全混合模式
- 184 道情侣真心话（轻甜、走心、勇敢各 28 道，18+ 劲爆 100 道）
- 多人模式支持 3–12 位参与者和公平随机点名
- 180 道多人夜谈题（五个常规主题各 16 道，另有 100 道 18+ 劲爆题）
- 18+ 题库默认关闭，仅限全体参与者已满 18 周岁且明确同意时选择；任何人可随时跳过或退出
- 多人模式支持换题、换人和参与者本地保存
- 6–24 题的游戏长度
- 随时换题或提前结束
- 自定义专属问题
- 题目去重、进度与结束回顾
- 本地保存名字、设置和自定义题库
- 离线缓存与可安装网页应用
- 键盘操作：右方向键或 Enter 完成，左方向键换题

## 隐私

应用没有账号、服务器、统计代码或网络接口。玩家名字、自定义题目与设置只保存在当前浏览器的本地存储中。

完整隐私政策见 [`PRIVACY.md`](PRIVACY.md)。
