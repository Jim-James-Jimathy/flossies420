import Image from 'next/image'

import classes from './index.module.scss'

export default function Events() {
  return (
    <section className={classes.container}>
      <div className={classes.flyerWrapper}>
        <div className={classes.flyer}>
          <Image src="/assets/admin-ui/events/fc.png" alt="..." width={500} height={500} />
        </div>
        <div className={classes.flyer}>
          <Image src="/assets/admin-ui/events/ocf.png" alt="..." width={500} height={500} />
        </div>
      </div>
    </section>
  )
}
