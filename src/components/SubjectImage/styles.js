const dims = {
  width: 300,
  height: 200,
}

const styles = {
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'stretch',
  },
  shadowImage: {
    ...dims,
    position: 'absolute',
    zIndex: 1,
    filter: 'blur(13px)',
    opacity: 0.7,
    transformOrigin: 'center, center',
    transform: 'scale(1.3)',
  },
  image: {
    ...dims,
    position: 'absolute',
    zIndex: 2,
  },
}

export default styles
