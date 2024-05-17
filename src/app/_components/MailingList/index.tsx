import classes from './index.module.scss'

const MailingList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h2>Join our mailing list</h2>
          <ul>
            <li>Get the latest updates</li>
            <li>Get the latest updates</li>
            <li>Get the latest updates</li>
            <li>Get the latest updates</li>
          </ul>
        </div>
        <div className={classes.btn}></div>
      </div>
    </div>
  )
}

export default MailingList
