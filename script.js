
class App {
    autors = [
        {
            name: 'oceans',
            poster: './assets/img/oceans.png',
            video: './assets/video/oceans.mp4',
            audio: '',
            subtitr: ''
        },
        {
            name: 'Природа - Весна',
            poster: './assets/img/prirodi-vesna-3.jpg',
            video: './assets/video/Природа - Весна.mp4',
            audio: '',
            subtitr: ''
        },
        {
            name: ' Кыргызстан',
            poster: './assets/img/priroda-kyrgyzstana-novosti-fon.jpg',
            video: './assets/video/kirgistan.mp4',
            audio: '',
            subtitr: ''
        },
    ]



    pause = './assets/img/pause.png'
    play = './assets/img/ico-play.png'
    prev = './assets/img/ico-prev.png'
    next = './assets/img/ico-next.png'
    fullscreen = './assets/img/ico-fullscreen.png'
    offscreen = './assets/img/off_screen_icon.png'

    theater = './assets/img/ico-theater.png'
    titles = './assets/img/ico-titles.png'
    tv = './assets/img/ico-tv.png'
    setting = './assets/img/ico-hd.png'
    sound = './assets/img/ico-sound.png'
    playButton = './assets/img/play-button.png'


    currentSound = 0;
    isPlayed = true
    rsSchoolImg = 'https://rs.school/images/rs_school_js.svg'
    logoSrc = './assets/img/logo.png'
    reSchoolLink = 'https://rs.school/js-stage0/'
    video = document.createElement("video");
    header = this.createElement('header', 'div')
    headerContainer = this.createElement('header-container', 'div')
    main = this.createElement('main', 'div')
    mainContainer = this.createElement('main-container', 'div')

    footer = this.createElement('footer', 'div')
    footerContainer = this.createElement('footer-container', 'div')
    logo = this.createElement('logo', 'img')
    title = this.createElement('title', 'div')
    playerPanel = this.createElement('player-panel', 'div')

    titlesElem = this.createElement('titles-elem', 'img')
    settingElem = this.createElement('setting-elem', 'img')
    theaterElem = this.createElement('theater-elem', 'img')
    tvElem = this.createElement('tv-elem', 'img')
    fullscreenElem = this.createElement('fullscreen-elem', 'img')

    playButtonElem = this.createElement('play-button-elem', 'img')

    playerPanelNavigation = this.createElement('player-panel-navigation', 'div')
    playerPanelNavigationLeft = this.createElement('player-panel-navigation-left', 'div')
    playerPanelNavigationRight = this.createElement('player-panel-navigation-right', 'div')



    timerAllCurent = this.createElement('timer-all-curent', 'div')
    timerAll = this.createElement('timer-all', 'div')
    timerCurent = this.createElement('timer-curent', 'div')
    scrollTimer = this.createElement('scroll-timer', 'input')
    valuePanel = this.createElement('value-panel', 'div')
    valueIcon = this.createElement('value-icon', 'img')
    scrollValue = this.createElement('scroll-value', 'input')
    panelNavigation = this.createElement('panel-navigation', 'div')
    navPrev = this.createElement('navigation-prev', 'div')
    navPlayPause = this.createElement('navigation-play-pause', 'div')
    navNext = this.createElement('navigation-next', 'div')

    github = this.createElement('github', 'a', `© ${new Date().getFullYear()} github`)
    githubImg = this.createElement('githubImg', 'img')


    constructor(app) {
        this.app = app
    }
    generMinutesSecund(num) {
        let min = Math.floor(+num / 60);
        let sec = 0;
        if (Math.floor(+num) % 60 >= 10) {
            sec = Math.floor(+num) % 60
        } else {
            sec = '0' + Math.floor(+num) % 60
        }

        return `${min}:${sec}`
    }

    scrollTimeFunc2(dur, val) {
        const percent = dur / 100;
        console.log(val)
        this.video.currentTime = val * percent
    }

    scrollTimeFunc(dur, cur) {
        const percent = dur / 100;
        this.scrollTimer.value = Math.floor(cur / percent)
    }

    fullscreenFunc() {
        this.fullscreenElem.src = this.offscreen
        if (document.fullscreenElement) {
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
        } else {
            this.playerPanel.requestFullscreen()
        }
    }


    generateHtml() {
        this.video.setAttribute("src", this.autors[0].video);
        this.video.poster = this.autors[0].poster
        this.scrollTimer.value = 0
        this.video.classList.add('video-palyer')
        this.github.href = 'https://github.com/maksimyou'
        this.video.addEventListener('timeupdate', () => {
            this.scrollTimeFunc(this.video.duration, this.video.currentTime)
            this.timerCurent.textContent = this.generMinutesSecund(this.video.currentTime)
            if (this.video.currentTime === this.video.duration) this.prevNextSound('next')
        })
        this.title.textContent = 'Видео плеер'
        this.timerCurent.textContent = '0:00'
        this.video.addEventListener("loadedmetadata", () => {
            this.timerAll.textContent = this.generMinutesSecund(this.video.duration);
        });
        this.scrollValue.type = 'range'
        this.scrollValue.addEventListener('input', (e) => {
            this.video.muted = false
            this.video.volume = (e.target.value * 0.01)
        })
        this.playerPanelNavigationRight.append(this.titlesElem, this.settingElem, this.theaterElem, this.tvElem, this.fullscreenElem)
        this.fullscreenElem.addEventListener('click', () => {
            this.fullscreenFunc()
        })
        this.fullscreenElem.src = this.fullscreen
        this.theaterElem.src = this.theater
        this.titlesElem.src = this.titles
        this.tvElem.src = this.tv
        this.settingElem.src = this.setting
        this.playButtonElem.src = this.playButton
        this.valueIcon.addEventListener('click', () => {
            this.video.muted = true
            console.log(this.video.muted)
        })
        this.valueIcon.src = './assets/img/ico-sound.png'
        this.valuePanel.append(this.valueIcon, this.scrollValue)
        this.scrollTimer.type = 'range'
        this.logo.src = this.logoSrc;
        this.playerPanel.append(this.video)
        this.playerPanel.append(this.playButtonElem)
        this.timerAllCurent.append(this.timerCurent, this.timerAll)
        this.scrollTimer.addEventListener('input', (e) => {
            this.scrollTimeFunc2(this.video.duration, e.target.value)
            console.log(this.video.currentTime)
        })
        this.video.addEventListener('click', () => {
            this.audioSwitch()
        })
        this.playButtonElem.addEventListener('click', () => {
            this.audioSwitch()
        })
        this.navPlayPause.addEventListener('click', () => {
            this.audioSwitch()
        })
        this.navPrev.addEventListener('click', () => {
            this.prevNextSound('prev')
        })
        this.navNext.addEventListener('click', () => {
            this.prevNextSound('next')
        })
        this.panelNavigation.append(this.navPrev, this.navPlayPause, this.navNext)
        this.playerPanelNavigationLeft.append(this.panelNavigation)
        this.playerPanelNavigationLeft.append(this.valuePanel)
        this.playerPanelNavigationLeft.append(this.timerAllCurent)
        this.playerPanelNavigation.append(this.playerPanelNavigationLeft)
        this.playerPanelNavigation.append(this.playerPanelNavigationRight)

        this.playerPanel.append(this.scrollTimer)
        this.playerPanel.append(this.playerPanelNavigation)
        this.headerContainer.append(this.logo)
        this.headerContainer.append(this.title)
        this.header.append(this.headerContainer)
        this.mainContainer.append(this.playerPanel)
        this.main.append(this.mainContainer)
        this.footerContainer.append(this.github)
        this.githubImg.src = this.rsSchoolImg
        this.footerContainer.append(this.githubImg)
        this.footer.append(this.footerContainer)
        this.app.append(this.header, this.main, this.footer)
    }


    createElement(classs, tag, text = '') {
        const elem = document.createElement(tag);
        elem.classList.add(classs)
        elem.textContent = text;
        return elem;
    }


    audioSwitch() {
        if (this.isPlayed) {
            console.log(this.isPlayed)
            this.video.play()
            this.navPlayPause.style.backgroundImage = `url(${this.pause})`
            this.isPlayed = !this.isPlayed
            this.playButtonElem.classList.add('hidden-btn')
        } else {
            console.log(this.isPlayed)
            this.video.pause()
            this.navPlayPause.style.backgroundImage = `url(${this.play})`
            this.isPlayed = !this.isPlayed
            this.playButtonElem.classList.remove('hidden-btn')
        }
    }


    audioAddSounds(str) {
        console.log(this.isPlayed)
        this.video.src = str;
        if (this.isPlayed) {
            this.video.pause()
        } else {
            this.video.play()
        }
    }


    prevNextSound(str) {
        if (str === 'next') {
            this.currentSound++;
            if (this.currentSound >= this.autors.length) this.currentSound = 0;
        }
        if (str === 'prev') {
            this.currentSound--;
            if (this.currentSound === 0) this.currentSound = (this.autors.length - 1);
        }

        this.audioAddSounds(this.autors[this.currentSound].video)
        this.video.poster = this.autors[this.currentSound].poster
        this.video.addEventListener("loadedmetadata", () => {
            this.timerAll.textContent = this.generMinutesSecund(this.video.duration);
            this.scrollTimer.value = 0
        });
    }

}


const sound = new App(document.querySelector('.app'))

sound.generateHtml();
