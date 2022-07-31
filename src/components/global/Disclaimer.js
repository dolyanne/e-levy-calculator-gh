import { h } from 'preact'

const Disclaimer = () => {
  return (
    <>
      <span className='disclaimer'>
        Disclaimer: We did our best to provide accurate results however, you may
        experience differences in real-world usage, since Information on Telco
        and GHIPPS charges are inconsistent.
      </span>
      <a className='privacy' href='/privacy-policy/'>
        Privacy Policy
      </a>
    </>
  )
}

export default Disclaimer
