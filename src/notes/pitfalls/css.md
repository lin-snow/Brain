# CSS踩坑笔记

**`flex` 项目上设置 `width` 无效**

在使用 `flex` 布局时，给项目设置 `width` 无效

**解决方法**：

1. 使用 `flex-basis` 代替 `width`
2. 使用 `min-width` 代替 `width`
3. 设置 `flex-shrink: 0` 禁止项目缩小，再设置 `width`