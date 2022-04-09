 const goodsInfo = document.querySelectorAll('.goods-info');



goodsInfo.forEach(goodInfo => (
    goodInfo.addEventListener('click', e => (
        console.log(e.target)
    ))
))



