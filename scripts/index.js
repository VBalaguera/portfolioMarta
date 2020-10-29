 //this is the Downwards-menu script

 function toggleDownwardsMenu() {
    document.getElementById('downwards-menu').classList.toggle('active'); 
}



const makeNavLinksSmooth = () => { //smoothCrolling
    const navLinks = document.querySelectorAll('.navbar__link'); 

    for(let n in navLinks) {
        if(navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault(); 
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    behavior: 'smooth'
                });
            })
        }
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('main__content');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; 

        for(let s in sections) {
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
                const id = sections[s].id;
                document.querySelector('.navbar__link--active').classList.remove('navbar__link--active');

                document.querySelector('a[href*=${id}]').parentNode.classList.add('navbar__link--active'); 
            }
        }
    }
}

makeNavLinksSmooth(); 

spyScrolling(); 


//theme changing script 

var checkbox = document.querySelector('input[name=theme]');

// Apply the cached theme on reload; 



const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        /* document.documentElement.setAttribute('data-theme', 'light') */
        body.classList.replace('dark', 'light'); 
        localStorage.setItem('theme', 'light');
    } else {
        trans()
        /* document.documentElement.setAttribute('data-theme', 'dark') */
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
});

let trans = () => {
    document.documentElement.classList.add('transition'); 
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 500)
}

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}



