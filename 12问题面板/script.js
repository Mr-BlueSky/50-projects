const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle =>{
    toggle.addEventListener('click',() =>{
        //toggle用法   存在该class则删除，否则就添加
        toggle.parentNode.classList.toggle('active')
    })
})