console.warn(`sw in public folder`)
const self = this;

// install SW
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open('static')
        .then(cache => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/contact',
                '/about',
                '/site',
                '/projects',
                '/crypto',
                '/login',
                '/resume',
                '/index.html',
                '/',
                'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap',
                '/images/about-profile.jpg',
                '/images/projects/shop.jpg',
                '/images/projects/filmapp.jpg',
                '/images/projects/java.jpg',
                '/images/pablo/pablo-a-5-star.png',
                '/images/pablo/pablo-fashion.png',
                '/images/pablo/pablo-handshake.png'
            ])
        }))
})

// activate SW
self.addEventListener('activate', e => {
    return self.clients.claim()
})

// fetch SW
self.addEventListener('fetch', e => {

    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request)
            .then( res => {
                if(res){
                    return res
                }
                let reqURL = e.request.clone();
                fetch(reqURL)
            })
        )    
    }
    // else{
    //     return fetch(e.request)
    // }
})