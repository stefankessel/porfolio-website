export default function swDev(){
    let swURL = `${process.env.PUBLIC_URL}/serviceworker.js`
    navigator.serviceWorker.register(swURL).then(res => console.log('response: ', res)).catch( err => console.warn(err))
}