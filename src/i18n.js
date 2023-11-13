import { createI18n } from 'vue-i18n'
import en from './locals/en.json'
import ar from './locals/ar.json'
function loadLocalMessages(){
    const locales=[{en:en},{ar:ar}]
    const messages={}
    locales.forEach(lang=>{
        const key=Object.keys(lang)
        messages[key]=lang[key]
    })
    return messages
}
export default createI18n({
    locale:'ar',
    fallbacklocale:'en',
    messages:loadLocalMessages()
})