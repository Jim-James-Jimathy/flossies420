import Link from 'next/link'

import classes from './index.module.scss'

const MailingList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h2>Join our mailing list</h2>
          <ul>
            <li>Stay up to date on events & new inventory</li>
            <li>Stay up to date on events & new inventory</li>
            <li>Stay up to date on events & new inventory</li>
            <li>Stay up to date on events & new inventory</li>
          </ul>
        </div>
        <div className={classes.btn}>
          <h3>Click here to sign up</h3>
          <Link href="https://sitch.app/CustomForm?s=6EDoz0X">SIGN ME UP!</Link>
        </div>
      </div>
    </div>
  )
}

export default MailingList
