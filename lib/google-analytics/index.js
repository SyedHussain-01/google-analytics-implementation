export const pageView = (url) => {
    window.gtag('config',process.env.GOOGLE_ANALYTICS_ID,{
        path_url : url
    })
}

export const customEvent = ({ action, country }) => {
    window.gtag('event',action,{
        country
    })
}