window.onload = function () {
    // 获取显示隐藏按钮DOM数组：
    // getElementsByClassName:通过类样式名获取数组
    let showBtnArr = document.getElementsByClassName('bxs-down-arrow')
    // 获取订单明细DOM数组：
    let detailBoxArr = document.getElementsByClassName('order-detail')

    // 设置默认所以订单明细都隐藏：
    for (let i = 0; i < detailBoxArr.length; i++) {
        detailBoxArr[i].style.display = 'none';
    }

    for (let i = 0; i < showBtnArr.length; i++) {
        showBtnArr[i].onclick = function () {
            if (detailBoxArr[i].style.display == 'none') {
                detailBoxArr[i].style.display = 'block';
            } else {
                detailBoxArr[i].style.display = 'none';
            }
        }
    }
}