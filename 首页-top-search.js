/**
 * 1.使用哪一个事件：
 * onscroll-此事件移动端和pc端都有效
 * 2.如何获取滚动条的位置：
 *   获取pc端滚动条位置-document.documentElement.scrollTop
 *   获取移动端滚动条位置：document.body.scrollTop
 * 3.如何获取视口宽度（移动端pc端都有效）：
 *   document.documentElement.clientWidth
 */
window.onload = function () {
    document.onscroll = function () {
        // 获取滚动条位置：
        // pc端：
        let s1 = document.documentElement.scrollTop;
        // 移动端：
        let s2 = document.body.scrollTop;
        // 若s1是0，取s2，否则取s1：
        let scroll = s1 == 0 ? s2 : s1;

        // 获取视口宽度：
        let width = document.documentElement.clientWidth;
        // 获取顶部固定块：
        let search = document.getElementById('fixedBox')
        // 判断滚动条超过视口宽度的12%，搜索块变固定定位：
        if (scroll > width * 0.12) {
            search.style.position = 'fixed';
            // 固定在顶部的就都是0：
            search.style.left = '0';
            search.style.top = '0';
        } else {
            search.style.position = 'static';
        }
    }

}