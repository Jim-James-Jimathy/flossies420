import Link from 'next/link'

import { artists } from '../../constants'
import ArtistCard from './ArtistCard'

import classes from './index.module.scss'

export default function Artists() {
  return (
    <section className={classes.container}>
      <div className={classes.artistsWrapper}>
        {artists.map(artist => (
          <ArtistCard key={artist.id} data={artist} />
        ))}
      </div>
    </section>
  )
}
