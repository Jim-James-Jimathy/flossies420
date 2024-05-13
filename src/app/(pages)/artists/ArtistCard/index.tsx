import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss'

const ArtistCard = ({ data }) => {
  return (
    <Link href={data.href} className={classes.container}>
      <div className={classes.artistCard}>
        <Image src={data.src} alt={data.title} fill />
        <div className={classes.artistText}>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArtistCard
