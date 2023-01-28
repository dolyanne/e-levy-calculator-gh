import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import GetOnGooglePlay from '../../components/global/GetOnGooglePlay'
import { preserveChoice } from '../../utils/ux-enhancements'

const Home = ({ showAdvanced }) => {
  const elevyTax = 0.01 //1/100
  const [amount, setAmount] = useState('')
  const [transferAmount, setTransferAmount] = useState(0)
  const [elevyAmount, setElevyAmount] = useState(0)
  let elevyFormRef = useRef(null)
  let elevyChargeRef = useRef(null)

  useEffect(() => {
    if (amount == '') {
      setTransferAmount(0)
      setElevyAmount(0)
    } else if (amount > 100) {
      let taxableAmount = amount - 100
      let elevyCharge = taxableAmount * elevyTax
      let totalTransferAmount = amount + elevyCharge
      setTransferAmount(totalTransferAmount)
      setElevyAmount(elevyCharge)
    } else {
      setTransferAmount(amount)
      setElevyAmount(0)
    }
  }, [amount])

  const handleChange = event => {
    const parsedAmount = parseInt(event.target.value.replaceAll(',', ''), 10)
    if (!isNaN(parsedAmount)) {
      setAmount(parsedAmount)
    } else {
      // elevyFormRef.current.reportValidity();
      setAmount('')
    }
  }

  const handleTab = event => {
    if (event.keyCode == 13) {
      elevyChargeRef.current.focus()
    }
  }

  return (
    <main className='mainContainer'>
      <form className='gridContainer' ref={elevyFormRef} method='POST'>
        <div className='gridItem gridItemFull'>
          <div className='inputGroup centerFlex'>
            <h1 className='displayText'>E-LEVY CALCULATOR</h1>
            <h5 className='subDisplayText'>
              Find out how much you will be charged as e-levy for sending money
              electronically in Ghana
            </h5>
          </div>
        </div>
        <div className='gridItem gridItemFullMobileOnly'>
          <div className='inputGroup'>
            <label for='amount' className='labelText'>
              You want to send:
            </label>
            <div>
              <input
                tabIndex={1}
                type='text'
                name='amount'
                placeholder='0'
                pattern='[0-9,.]'
                inputMode='numeric'
                // required
                value={amount.toLocaleString('en-US')}
                onInput={handleChange}
                className='inputField'
                id='amount'
                onKeyUp={handleTab}
              />
              <span className='currency'>GHS</span>
            </div>
          </div>
        </div>
        <div className='gridItem gridItemFullMobileOnly'>
          <div className='inputGroup'>
            <label for='transferAmount' className='labelText'>
              You will pay:
            </label>
            <div>
              <input
                type='text'
                value={`${transferAmount.toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                })}`}
                readOnly
                name='transferAmount'
                className='inputField inputFieldEmphasis'
                id='transferAmount'
              />
              <span className='currency'>GHS</span>
            </div>
          </div>
        </div>
        <div className='gridItem gridItemFull'>
          <div className='inputGroup centerFlex'>
            <span className='labelText'>E-Levy Charge:</span>
            <span
              className='displayText charge'
              tabIndex={2}
              ref={elevyChargeRef}
            >
              + GHS{' '}
              {`${elevyAmount.toLocaleString('en-US', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })}`}
            </span>
            <span className='labelText'>Rate: 1%, first 100GHS exempt</span>
          </div>
        </div>
        <div className='gridItem gridItemFull'>
          <div className='inputGroup centerFlex'>
            <button
              className='labelText button'
              type='button'
              onClick={e => {
                e.preventDefault()
                preserveChoice({
                  advanced: true
                })
                showAdvanced()
                return false
              }}
            >
              Click for more Options
            </button>
          </div>
        </div>
        <div className='gridItem gridItemFull'>
          <div className='inputGroup centerFlex'>
            <GetOnGooglePlay />
          </div>
        </div>
        <div className='gridItem gridItemFull'>
          <div className='inputGroup centerFlex'>
            <span className='disclaimer'>
              Disclaimer: We did our best to provide accurate results however,
              you may experience differences in real-world usage.
            </span>
            <a className='privacy' href='/privacy-policy/'>
              Privacy Policy
            </a>
          </div>
        </div>
      </form>
      {/* <span className="footer">Made with love</span> */}
    </main>
  )
}

export default Home
