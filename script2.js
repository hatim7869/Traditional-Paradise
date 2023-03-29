const imageInput = document.querySelector('#image_input');
var uploaded = "";

imageInput.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded = reader.result;
        document.querySelector("#image").style.backgroundImage = `url(${uploaded})`
    })
    reader.readAsDataURL(this.files[0])
})

const color = document.querySelector(".color")
const colorInput = document.querySelector(".color-input")

colorInput.addEventListener("input",function(){
    color.style.backgroundColor = colorInput.value
})