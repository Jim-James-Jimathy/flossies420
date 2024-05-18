import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss'

const MailingList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div>
          <div className={classes.text}>
            <h2>Join our mailing list</h2>
            <p>here are a few reasons why you should!</p>
            <ul>
              <li>Join our inner circle of high rollers and elevate your experience</li>
              <li>Sign up now to unlock exclusive discounts on top-notch products</li>
              <li>stay in the loop with upcoming events and where we're rolling up</li>
              <li>Don't miss out on the buzz</li>
            </ul>
          </div>
        </div>
        <div className={classes.btn}>
          <div className={classes.imageWrap}>
            <div>
              <Image
                src="/assets/images/book-toad.jpg"
                alt="image of a toad sitting on a mushroom reading a book"
                fill
              />
            </div>
          </div>
          <div className={classes.link}>
            <p>Click here to join</p>
            <Link href="/signup">JOIN</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailingList
