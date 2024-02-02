var butao = window.document.getElementById('but')
butao.addEventListener('click' , clicar)

function clicar () {
    var txtn = window.document.getElementById('txtn1')
    var n = Number(txtn.value)
    var res = window.document.getElementById('res')
    var video = window.document.getElementById('video')
    if (txtn.value.length == 0) {
        alert('[ERRO] Digite o número que você pensou ')
        res.innerHTML = ''
    } else {
        alert(`Acabei de ler sua mente, clique em 'ok' para continuar`)
        res.innerHTML = `Você pensou no número ${n} !`
        res.style.marginTop = '20px'
        res.style.font = '29pt Arial'
        res.style.color = 'green'
        video.src = 'Nikola Tesla and Albert Einstein with TMNT theme.mp4'
        
       


    }
}
