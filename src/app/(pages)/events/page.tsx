import classes from './index.module.scss'

export default function Events() {
  return (
    <section className={classes.container}>
      <div className={classes.flyerWrapper}>
        <div className={classes.flyerText}>
          <h2>upcoming</h2>
          <h2>events</h2>
        </div>
        <div className={classes.flyer} />
        <div className={classes.flyer} />
        <div className={classes.flyer} />
      </div>
    </section>
  )
}
