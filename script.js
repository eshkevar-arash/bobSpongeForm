let iconEye = document.querySelector('.icon-eye')
let iconEyeOff = document.querySelector('.icon-eye-off')
let formElem = document.querySelector('.f1')
let userInput = document.querySelector('#userInput')
let passInput = document.querySelector('#passInput')
let leftEyeImg = document.querySelector('#lefteye')
let rightEyeImg = document.querySelector('#righteye')
let passInputValueLength, userInputValueLength
let passInputType;
function eyesMoveTop(){
    leftEyeImg.style.left = '119px'
    leftEyeImg.style.top = '60px'
    rightEyeImg.style.left = '165px'
    rightEyeImg.style.top = '60px'
}
function setEyeElemFunc(length){
    leftEyeImg.style.top = '83px'
    rightEyeImg.style.top = '83px'
    switch (length){
        case 0:
            leftEyeImg.style.left = '102px'
            rightEyeImg.style.left = '166px'
            break
        case 1:
            leftEyeImg.style.left = '103px'
            rightEyeImg.style.left = '167px'
            break
        case 2:
            leftEyeImg.style.left = '104px'
            rightEyeImg.style.left = '168px'
            break
        case 3:
            leftEyeImg.style.left = '105px'
            rightEyeImg.style.left = '169px'
            break
        case 4:
            leftEyeImg.style.left = '106px'
            rightEyeImg.style.left = '170px'
            break
        case 5:
            leftEyeImg.style.left = '107px'
            rightEyeImg.style.left = '171px'
            break
        case 6:
            leftEyeImg.style.left = '108px'
            rightEyeImg.style.left = '172px'
            break
        case 7:
            leftEyeImg.style.left = '109px'
            rightEyeImg.style.left = '173px'
            break
        case 8:
            leftEyeImg.style.left = '110px'
            rightEyeImg.style.left = '174px'
            break
        case 9:
            leftEyeImg.style.left = '111px'
            rightEyeImg.style.left = '175px'
            break
        case 10:
            leftEyeImg.style.left = '112px'
            rightEyeImg.style.left = '176px'
            break
        case 11:
            leftEyeImg.style.left = '113px'
            rightEyeImg.style.left = '177px'
            break
        case 12:
            leftEyeImg.style.left = '114px'
            rightEyeImg.style.left = '178px'
            break
        case 13:
            leftEyeImg.style.left = '115px'
            rightEyeImg.style.left = '179px'
            break
        case 14:
            leftEyeImg.style.left = '116px'
            rightEyeImg.style.left = '180px'
            break
        case 15:
            leftEyeImg.style.left = '117px'
            rightEyeImg.style.left = '181px'
            break
        case 16:
            leftEyeImg.style.left = '118px'
            rightEyeImg.style.left = '182px'
            break
        default:
            leftEyeImg.style.left = '118px'
            rightEyeImg.style.left = '182px'
    }
}
function resetEyes(){
    leftEyeImg.style.left = '110px'
    leftEyeImg.style.top = '75px'
    rightEyeImg.style.left = '174px'
    rightEyeImg.style.top = '75px'
}
formElem.addEventListener('submit', event => {
    event.preventDefault()
})
iconEye.addEventListener('click' , ()=> {
    iconEye.style.display = 'none'
    passInput.setAttribute('type' , 'text')
    iconEyeOff.style.display = 'flex'
    passInput.focus()
})
iconEyeOff.addEventListener('click' , ()=> {
    iconEyeOff.style.display = 'none'
    passInput.setAttribute('type' , 'password')
    iconEye.style.display = 'flex'
    passInput.focus()
})
passInput.addEventListener('focus', ()=> {
    passInputType = passInput.getAttribute('type')
    if (passInputType === 'password') {
        eyesMoveTop()
    }else {
        passInputValueLength = passInput.value.length
        setEyeElemFunc(passInputValueLength)
    }
})
passInput.addEventListener('input', ()=> {
    passInputType = passInput.getAttribute('type')
    if (passInputType === 'password') {
        eyesMoveTop()
    }else {
        passInputValueLength = passInput.value.length
        setEyeElemFunc(passInputValueLength)
    }
})
passInput.addEventListener('blur', ()=> {
    resetEyes()
})


userInput.addEventListener('focus', ()=> {
    userInputValueLength = userInput.value.length
    setEyeElemFunc(userInputValueLength)
})
userInput.addEventListener('input', ()=> {
    userInputValueLength = userInput.value.length
    setEyeElemFunc(userInputValueLength)
})
userInput.addEventListener('blur', ()=> {
    resetEyes()
})
