import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss'

const ArtistCard = ({ data }) => {
  return (
    <Link href={data.href} className={classes.artistCard} rel="noopener noreferrer" target="_blank">
      <Image src={data.src} alt={data.title} width={350} height={350} />
      <div className={classes.artistText}>
        <h3>{data.title}</h3>
      </div>
    </Link>
  )
}

export default ArtistCard
