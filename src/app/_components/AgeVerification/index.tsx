import Link from 'next/link'

import { useVerify, VerifyState } from '../../lib/store'

import classes from './index.module.scss'

const AgeVerification = () => {
  const { setVerified } = useVerify() as VerifyState

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.textWrap}>
          <div className={classes.text}>
            <h1>Are you 21</h1>
            <h1>or older?</h1>
            <div className={classes.finePrint}>
              <p>This website requires you to be 21 years of age or older.</p>
              <p>Please verify your age to view the content, or click "Exit" to leave.</p>
            </div>
          </div>
        </div>
        <div className={classes.btns}>
          <Link className={classes.no} href="https://www.google.com">
            <span>no</span>
          </Link>
          <div onClick={setVerified} className={classes.yes}>
            <span>yes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeVerification
