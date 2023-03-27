'use client';

import Script from 'next/script';
import config from 'data/config';

const Scripts = () => (
	<>
		<Script
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsID}`}
		/>
		<Script
			id="gtag"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.googleAnalyticsID}', {
            page_path: window.location.pathname,
          });
        `,
			}}
		/>
		<Script
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
          if ('serviceWorker' in navigator) {
            console.log("Puedes usar el service worker");

            navigator.serviceWorker.register('./sw.js')
              .then(res => console.log("SW cargado correctamente", res))
              .catch(err => console.log("Service Worker No se ha podido registrar", err));

          } else {
            console.log("No se puede usar el service worker");
          }
        `,
			}}
		/>
	</>
);

export default Scripts;