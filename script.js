
    const dino = document.querySelector('.dino')
    const krzak = document.querySelector('.krzak')
    const krzak1 = document.querySelector('.krzak1')

    const wynik = document.querySelector('.wynik')
    let punkty = 0

    const podskok = () => {
        if (dino.classList != 'active') {
            dino.classList.add('active')
            setTimeout(() => {
                dino.classList.remove('active')
            }, 500)
        }
        punkty++
    }
    document.addEventListener('keydown', (e) => {

        if (e.keyCode == 38) {
            podskok()
        }
    })

    setInterval(() => {
        dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
        krzakLeft = parseInt(window.getComputedStyle(krzak).getPropertyValue('left'));
        krzakLeft1 = parseInt(window.getComputedStyle(krzak1).getPropertyValue('left'));

        if (krzakLeft < 120 && krzakLeft > 80 && dinoTop <= 100) {
            wynik.innerHTML = `Game Over,  ilość punktów:  <span>${punkty}</span>`
            setTimeout("window.location.reload()", 1000);
        } else if (krzakLeft1 < 120 && krzakLeft1 > 80 && dinoTop <= 100) {
            wynik.innerHTML = `Game Over,  ilość punktów:  <span>${punkty}</span>`
            setTimeout("window.location.reload()", 1000);
        }

    }, 10)
