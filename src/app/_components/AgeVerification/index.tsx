import Link from 'next/link'

import { useVerify, VerifyState } from '../../lib/store'
import { Button } from '../Button'

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
          <Link
            className={classes.no}
            href="https://static.wikia.nocookie.net/spongebob/images/1/19/No_Weenies_Allowed_200.png/revision/latest/scale-to-width-down/1200?cb=20200806153155"
          >
            no
          </Link>
          <Button onClick={setVerified} className={classes.yes}>
            yes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AgeVerification
