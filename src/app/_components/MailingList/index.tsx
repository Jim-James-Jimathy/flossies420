import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss'

const MailingList = () => {
  return (
    <div className={classes.mailingList}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <div className={classes.content}>
            <h2>Subscribe to our mailing list</h2>
            <ul>
              <li>Join our inner circle of high rollers and elevate your experience</li>
              <li>Sign up now to unlock exclusive discounts on top-notch products</li>
              <li>stay in the loop with upcoming events and where we're rolling up</li>
            </ul>
          </div>
        </div>
        <div className={classes.btn}>
          <div className={classes.btnInner}>
            <h4>subscribe today and keep your stash stocked!</h4>
            <Link href="/https://sitch.app/s/6EDoz0X">subscribe</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailingList
