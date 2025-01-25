let fdiv = document.getElementById('firstdiv')
let sdiv = document.getElementById('secondiv')
let fbtn = document.getElementById("firstbtn").addEventListener('click', function () {
    fdiv.innerHTML = `<input type="text" placeholder="Enter Your Name" id="input"><input type="file" id="fill" accept="image"><textarea placeholder="Enter Bio" id="textarea"></textarea><button id="click">ADD POST</button>`
    let input = document.getElementById('input')
    let pic = document.getElementById('fill')
    let textarea = document.getElementById('textarea')
    let sbtn = document.getElementById('click')
    // let abc = document.getElementById('picture')
    sbtn.addEventListener('click', function () {
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        let file = pic.files[0]
        let url = URL.createObjectURL(file)
        let count = 0;
        sdiv.innerHTML += `<div id="innerdiv">
        <h1>${input.value}</h1>
        <img src="${url}" alt="" id="picture">
        <p><b>Description : </b>${textarea.value}</p>
        <div id="img">
        <img src="1.png" alt="" height="30" id="heart${count}"><img src="comment.png" alt="" height="30" id="comment"><img
        src="share-arrow.png" alt="" height="30">
        </div>
        <p>${time} ${date}</p>
        </div>`
        // console.log(file);
        fdiv.innerHTML = ``
        let heart = document.getElementById(`heart${count}`)
        heart.addEventListener('click', function () {
            ++count
            heart.src = `2.png`
        })

        document.getElementById('comment').addEventListener('click', function () {
            fdiv.innerHTML = `<textarea name="" id="abcd" placeholder="Enter Your Comment Here"></textarea><button id="com">Send</button>`
            document.getElementById('com').addEventListener('click', function () {
                fdiv.innerHTML = ``
                alert("Thanks For Comment")
            })
        })
    })
})



