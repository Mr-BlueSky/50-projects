const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes);

checkBoxes()
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
/* 
triggerBottom = window.innerHeight / 5 * 4; 
相当于获取当前窗口浏览器窗口高度的4/5  以像素为单位

Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，
其提供了元素的大小及其相对于视口的位置。


*/