import timer from './timer'
// import { getReceivers, playMedia } from '../cast'
import media from '../../../content/media.json'

async function start({ io }) {
  console.log('scene startup')
  // const inputMedia = await getReceivers()
  // const outputMedia = []
  // await Promise.all(
  //   inputMedia.map(async mediaEntry => {
  //     outputMedia.push(await playMedia(mediaEntry))
  //   })
  // )
  const outputMedia = media

  outputMedia.forEach(m => {
    const scenes = require(`../../../content/scenes/${m.mediaId}`)
    timer({
      delay: scenes[1].startTime,
      mediaId: m.mediaId,
      nextSceneIndex: 1,
      io,
    })
  })
}

export default start
