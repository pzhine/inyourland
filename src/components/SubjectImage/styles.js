const dims = {
  width: 225,
  height: 150,
}

const styles = {
  container: {
    ...dims,
    position: 'relative',
    justifyContent: 'stretch',
    transition: 'all 300ms ease-in-out',
  },
  shadowImage: {
    ...dims,
    position: 'absolute',
    zIndex: 1,
    filter: 'blur(13px)',
    opacity: 0.7,
    transformOrigin: 'center, center',
    transform: 'scale(1.15)',
    borderRadius: 10,
  },
  image: {
    ...dims,
    position: 'absolute',
    zIndex: 2,
    borderRadius: 10,
  },
  active: {
    transform: 'translateY(-350px)',
  },
}

export default styles
