const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const bu = document.getElementById('button')

bu.addEventListener('click',()=>{
    console.log(tagsEl)
})

textarea.focus()

textarea.addEventListener('keyup',(e) =>{
    createTags(e.target.value)
    // console.log(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    //         将输入字符以英文逗号分割    过滤掉空   即避免 ,,这种情况    返回去掉两边空格的字符数组                  
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() =>{
        const randomTag = pickRandomTag()

        if(randomTag !== undefined){
            highLightTag(randomTag)

            setTimeout(() => {
                unhighLightTag(randomTag)
            }, 100);
        }
    },100)

    setTimeout(() =>{
        clearInterval(interval)

        setTimeout(() =>{
            const randomTag = pickRandomTag()

            highLightTag(randomTag)
        })
    },times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

//这里没有点 . 这个是添加类进去
function highLightTag(tag){
    tag.classList.add('highlight')
}

function unhighLightTag(tag){
    tag.classList.remove('highlight')
}