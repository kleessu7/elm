window.onload = function () {
    // 获取现实隐藏按钮DOM对象：
    let showBtn = document.getElementById('showBtn')
    // 获取订单明细DOM对象：
    let detailBox = document.getElementById('detailBox')

    // 令明细部分一开始为隐藏状态：
    detailBox.style.display = 'none';

    showBtn.onclick = function () {
        // 判断订单明细DOM对象是否隐藏，如果是就显示，反之就隐藏：
        if (detailBox.style.display == 'none') {
            detailBox.style.display = 'block';
        } else {
            detailBox.style.display = 'none'
        }
    }
}