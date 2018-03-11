function timer({ io, mediaId, nextSceneIndex, delay }) {
  console.log(`set scene change timer for ${mediaId}`)
  setTimeout(() => {
    console.log(`emit scene change event for ${mediaId}`)
    io.emit('action', {
      type: 'SCENE_CHANGE',
      payload: { mediaId, nextSceneIndex },
    })

    // TODO: set timeout for next scene change
  }, delay)
}

export default timer
