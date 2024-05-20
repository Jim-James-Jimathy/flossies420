import Link from 'next/link'

import { useVerify, VerifyState } from '../../lib/store'

import classes from './index.module.scss'

const AgeVerification = () => {
  const { setVerified } = useVerify() as VerifyState

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.question}>
          <h1>Are you 21 or older?</h1>
        </div>
        <div className={classes.requirements}>
          <p>You must be 21 or older to enter this site.</p>
          <p>by clicking yes, you are verifying that you are at least 21 years old.</p>
        </div>
        <div className={classes.btns}>
          <Link href="https://www.google.com" className={classes.no}>
            No
          </Link>
          <div className={classes.yes} onClick={setVerified}>
            Yes
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeVerification
