/* 字体 */
@import url('https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css');

* {
    /* Screen version */
    font-family: "LXGW WenKai Screen", sans-serif !important;
}
html[theme=light] body {
  --popover-background: #ffffff;
  --font-primary: #000000;
  --font-transparent: rgb(0 0 0);
  --tabs-bg: #b0b0b0;
  --scroll-bar: none;
  --background-secondary: #b0b0b0;
}
html[theme=dark] body {
  --popover-background: #151C32;
  --font-primary: #ffffff;
  --font-transparent: rgb(255 255 255);
  --tabs-bg: #151C32;
  --scroll-bar: none;
  --background-secondary: #151C32;
}
.css-1p0w246 {
  font-size: 13.5px !important;
  font-weight: 500 !important;
}
*,
*::before,
*::after {
  /* 禁止 CSS 动画 */
  animation: none !important;
  animation-duration: 0s !important;

  /* 禁止 CSS 过渡效果 */
  transition: none !important;
  transition-duration: 0s !important;
}
div[role="backdrop"]{
  background:rgba(15, 15, 15, 0) !important;
}
div.css-114x9oi > div.css-7rvzoe > div:nth-child(2) {
    border: 1px solid black;
    border-radius: 10px;
}
div[role="modal-container"] > div:nth-child(1) {
  opacity: 0 !important;
}
body > div:nth-child(7) > div.css-1boow1i > div > div {
  /* 设置背景图片 */
  background-image: url('https://imgapi.cn/bing.php');
  background-size: cover; /* 使背景图片覆盖整个元素 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 不重复背景图片 */
  position: relative; /* 设置相对定位，使遮罩能够正确定位 */
  z-index: -2;
}
[theme=light] body > div:nth-child(7) > div.css-1boow1i > div > div::after {
  /* 创建一个伪元素作为遮罩 */
  content: ''; /* 必须设置，即使没有内容 */
  position: absolute; /* 绝对定位，相对于父元素 */
  top: 0; /* 从上边界开始 */
  left: 0; /* 从左边界开始 */
  right: 0; /* 到右边界结束 */
  bottom: 0; /* 到下边界结束 */
  background: rgba(255, 255, 255, 0.9); 
  z-index: -1;
}
[theme=dark] body > div:nth-child(7) > div.css-1boow1i > div > div::after {
  /* 创建一个伪元素作为遮罩 */
  content: ''; /* 必须设置，即使没有内容 */
  position: absolute; /* 绝对定位，相对于父元素 */
  top: 0; /* 从上边界开始 */
  left: 0; /* 从左边界开始 */
  right: 0; /* 到右边界结束 */
  bottom: 0; /* 到下边界结束 */
  background: rgba(0, 0, 0, 0.5); 
  z-index: -1;
}
body{
  --light-background-color: #b0b0b0;
  --dark-background-color: #151C32;
}
.css-cm74m3 {
  position: relative;
  font-size: 35px;
  margin-bottom: 5px;
}

[theme=light] .css-cm74m3:after {
  content: '';
  position: absolute;
  bottom: -1px; /* 调整虚线位置到 div 下方 */
  left: 0;
  width: 100%; /* 宽度为父元素宽度的100% */
  border-bottom: 2px dashed #000; /* 设置为1px的虚线，颜色为黑色 */
}
[theme=dark] .css-cm74m3:after {
  content: '';
  position: absolute;
  bottom: -1px; /* 调整虚线位置到 div 下方 */
  left: 0;
  width: 100%; /* 宽度为父元素宽度的100% */
  border-bottom: 2px dashed #fff; /* 设置为1px的虚线，颜色为黑色 */
}
[theme=light] ._tabContent_kmycr_55._active_kmycr_41 {
  border-radius: 8px 8px 8px 8px !important;
  --curve: 0px;
  margin-bottom: 2px !important;
  background-color: #fff !important;
}
._tabContent_kmycr_55 {
  height: 90%;
}
[theme=light] #root > div.css-7u0c5i > div.css-7u0c5i > div:nth-child(1) > div:nth-child(2) > div:nth-child(2){
  border-radius: 10px;
  background-color: #e7e7e7;
  margin-right: 5px;
}
[theme=light] .dock-pane-cache {
  border-radius: 10px;
  background-color: #fff;
}
[theme=dark] ._tabContent_kmycr_55._active_kmycr_41 {
  border-radius: 8px 8px 8px 8px !important;
  --curve: 0px;
  margin-bottom: 2px !important;
  background-color: #101420 !important;
}
[theme=dark] #root > div.css-7u0c5i > div.css-7u0c5i > div:nth-child(1) > div:nth-child(2) > div:nth-child(2){
  border-radius: 10px;
  background-color: #101420;
  margin-right: 5px;
}
[theme=dark] .dock-pane-cache {
  border-radius: 12px;
  background-color: #101420;
}
[theme=light] div[role="renderer-container"] > div > div > div > div[role="table-wrapper"] {
  background-color: #f7f7f7;
}
