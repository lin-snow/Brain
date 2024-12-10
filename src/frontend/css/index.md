# CSS 基础

记录一些常用语法和技巧

## 媒体查询

### 设备屏幕宽度常用断点

> 设备屏幕设备尺寸很多，一般写断点时以 Apple 设备的屏幕尺寸为标准

`min-width`表示**移动端优先**

- 样式默认在所有屏幕尺寸下都有效
- 常用于先写移动端的场景

`max-width`表示**PC端优先**

- 样式默认在指定屏幕尺寸下有效
- 常用于先写 PC 端的场景



**移动端**

> 移动端包含手机和平板

```css
/* iPhone 4 / 5 等 */
@media (min-width: 320px) {
}

/* iPhone 6 - 8 / X / XS 等 */
@media (min-width: 375px) {
}

/* iPhone 6 - 8 Plus / XR 等 */
@media (min-width: 414px) {
}

/* 常用断点（无特定机型） */
@media (min-width: 640px) {
}

/* iPad mini 等 */
@media (min-width: 768px) {
}

/* 常用断点（无特定机型） */
@media (min-width: 960px) {
}

/* iPad Pro 12.9 */
@media (min-width: 1024px) {
}
```

**PC端**

```css
@media (max-width: 1280px) {
}

@media (max-width: 1366px) {
}

@media (max-width: 1440px) {
}

@media (max-width: 1920px) {
}

@media (max-width: 2560px) {
}
```



---

