import Head from 'next/head'

const URL = 'https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.js'
const API_KEY = 'OTM1ODBiOTAtMDdhYy00NzVmLWJkMGUtYjZmNTgwODVlYTYxNjM3Mzk2ODgxNzczODQxNjUx'

export const SnipcartHead = () => (
  <Head>
    <link rel="preconnect" href="https://app.snipcart.com" />
    <link rel="preconnect" href="https://cdn.snipcart.com" />
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.css" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener("DOMContentLoaded", function(event) {
          setTimeout(function() {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = "${URL}"

              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(script, s);
          }, 0)
        });
        `,
      }}
    />
  </Head>
)

export const SnipcartWrapper = () => (
  <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key={API_KEY}
    style={{ zIndex: 9999 }}
    hidden
  />
)

const Snipcart = () => (
  <div style={{ display: 'fixed', zIndex: 999 }}>
    <SnipcartHead />
    <SnipcartWrapper />
  </div>
)

export default Snipcart
