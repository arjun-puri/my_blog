import Script from 'next/script';

export default function CodePenEmbed( {height, defaultTab, slugHash, user} ) {
    const scriptURL = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

    return(
        <>
            <div className="codepen" data-height={height} data-default-tab={defaultTab} data-slug-hash={slugHash} data-user={user} >
            </div>
            <Script src={scriptURL} strategy='afterInteractive'></Script>
        </>
        
    );
}