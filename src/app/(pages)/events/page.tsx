import Image from 'next/image'

import classes from './index.module.scss'

export default function Events() {
  return (
    <section className={classes.container}>
      <div className={classes.flyerText}>
        <h2>upcoming events</h2>
      </div>
      <div className={classes.flyerWrapper}>
        <div className={classes.flyer}>
          <Image src="/assets/images/artist.jpg" alt="doin work" fill />
        </div>
        <div className={classes.flyer}>
          <Image src="/assets/images/artist.jpg" alt="doin work" fill />
        </div>
        <div className={classes.flyer}>
          <Image src="/assets/images/artist.jpg" alt="doin work" fill />
        </div>
      </div>
    </section>
  )
}
