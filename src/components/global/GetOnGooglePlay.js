import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

function getPWADisplayMode () {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  if (document.referrer.startsWith('android-app://')) {
    return 'twa'
  } else if (navigator.standalone || isStandalone) {
    return 'standalone'
  }
  return 'browser'
}

const GetOnGooglePlay = () => {
  const [showBadge, setShowBadge] = useState(false)
  useEffect(() => {
    const pwaDisplayMode = getPWADisplayMode()
    console.log('pwaDisplayMode', pwaDisplayMode)
    if (pwaDisplayMode !== 'twa') {
      setShowBadge(true)
    }
  }, [])
  return (
    <>
      {showBadge && (
        <a
          href='https://play.google.com/store/apps/details?id=com.e_levy_calculator.www.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            alt='Get it on Google Play'
            height={70}
            src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
          />
        </a>
      )}
    </>
  )
}

export default GetOnGooglePlay
