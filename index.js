const openPopupBtn = document.getElementById("openPopupBtn")
const popup = document.getElementById("popup")
const closePopupBtn = document.getElementById("closePopupBtn")
const closeSuccessBtn = document.getElementById("closeSuccessBtn")
const popupSuccess = document.getElementById("popup_success")
const sendResumeBtn = document.getElementById("sendResumeBtn")

openPopupBtn.addEventListener("click", ()=>{
    popup.style.display="block"
})

closePopupBtn.addEventListener("click", ()=>{
    popup.style.display="none"
})
closeSuccessBtn.addEventListener("click", ()=>{
    popupSuccess.style.display="none"
})

sendResumeBtn.addEventListener("click", ()=>{
    popup.style.display="none"
    popupSuccess.style.display="block"
})