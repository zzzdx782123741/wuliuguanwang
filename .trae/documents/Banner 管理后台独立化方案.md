# Banner 管理功能分离与后台开发计划

## 1. 移除 Banner 管理功能
- **目标**：从 `HomeBanner.tsx` 中彻底移除 `BannerManager` 及其相关逻辑。
- **操作**：
    - 删除 `BannerManager` 组件的引用和 JSX 元素。
    - 移除相关的 state (`history`, `logs`) 和处理函数 (`handleBannerReplace`, `handleUndo`)。
    - 将 `HomeBanner` 还原为纯粹的展示组件，仅负责轮播显示 `slides` 数据。

## 2. 新建管理后台页面
- **目标**：创建一个独立的 Banner 管理页面 `/admin/banner`。
- **操作**：
    - 创建新页面文件 `pages/admin/BannerAdmin.tsx`。
    - 在该页面中重新集成 `BannerManager` 组件，并进行适配和增强（如支持列表管理、排序等，而不仅仅是单张替换）。
    - 配置路由：在 `App.tsx` 或路由配置文件中添加 `/admin/banner` 路由。

## 3. 权限控制 (模拟)
- **目标**：简单模拟管理员权限，防止普通用户误入。
- **操作**：
    - 创建一个简单的 `ProtectedRoute` 组件或逻辑。
    - 在进入 `/admin/banner` 前检查是否存在特定的 localStorage 标记（例如 `isAdmin=true`），或者提供一个简单的登录/验证入口（如果项目结构允许）。
    - *注：由于是静态前端项目，真正的安全权限需后端配合，这里主要做路由层面的隔离。*

## 4. 数据对接与一致性
- **目标**：确保前台展示和后台管理使用同一份数据源。
- **操作**：
    - **数据持久化**：继续使用 `localStorage` 作为简易数据库（`customBanners` key）。
    - **HomeBanner**：初始化时从 `localStorage` 读取 `customBanners`，如果没有则使用默认配置。
    - **BannerAdmin**：读取 `localStorage` 进行管理（增删改查），操作完成后更新 `localStorage`。
    - **事件通信**：考虑使用 `window.dispatchEvent` 或简单的轮询，以便在一个标签页修改后，另一个标签页能感知（可选优化，主要保证刷新后数据一致）。

## 5. 界面与交互优化
- **目标**：提供清晰的后台管理 UI。
- **操作**：
    - 在 `BannerAdmin` 中设计列表视图，展示当前所有 Banner。
    - 提供“添加 Banner”、“编辑/替换”、“删除”、“调整顺序”等按钮。
    - 复用并优化现有的上传预览逻辑。

## 6. 迁移与引导
- **目标**：平滑过渡。
- **操作**：
    - 在首页（仅开发环境下或通过特定彩蛋）提供一个隐藏的入口指向 `/admin/banner`，或者在文档中说明访问方式。
    - 确保 `HomeBanner` 在没有自定义数据时能正常降级显示默认 Banner。

---

**准备执行：**
1.  先备份当前 `HomeBanner.tsx` 的关键逻辑。
2.  创建 `pages/admin` 目录和文件。
3.  修改 `App.tsx` 添加路由。
4.  清理 `HomeBanner.tsx`。
5.  实现 `BannerAdmin.tsx` 的完整逻辑。