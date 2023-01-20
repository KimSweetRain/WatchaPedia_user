const container = document.querySelectorAll(".css-usdi1z");

    window.onload = scrollContent();
    window.addEventListener('resize',()=>{
        scrollContent()
    })

// 메인 스크롤
    function scrollContent() {
    // 메인 스크롤
    for(let idx of container) {
        let scrollBox = idx.querySelector('.css-9dnzub');
        let scrollMax = scrollBox.scrollWidth - (idx.querySelector('.css-9dnzub').getBoundingClientRect().width+10);
        // 스크롤 위치에 따라 버튼 유무
        idx.querySelector('.css-9dnzub').addEventListener('scroll', () => {
            if (scrollBox.scrollLeft >= scrollMax) {
                idx.querySelector('.css-vp7uyl').style.display = "none";
            } else {
                idx.querySelector('.css-vp7uyl').style.display = "flex";
            }
            if (scrollBox.scrollLeft == 0) {
                idx.querySelector('.css-1hestod').style.display = "none";
            } else {
                idx.querySelector('.css-1hestod').style.display = "block";
            }
        })
        if(0>= scrollMax){
            idx.querySelector('.css-vp7uyl').style.display = "none";
            idx.querySelector('.css-1hestod').style.display = "none";
        }
    }


    // 버튼 클릭 시 이동
    for(let idx of container){
        idx.querySelector('.css-vp7uyl').addEventListener('click', function () {
            idx.querySelector('.css-9dnzub').scrollBy(idx.querySelector('.css-9dnzub').getBoundingClientRect().width+7,0)
        })
        idx.querySelector('.css-1hestod').addEventListener('click', function () {
            idx.querySelector('.css-9dnzub').scrollBy(-idx.querySelector('.css-9dnzub').getBoundingClientRect().width+7,0)
        })
    }}
