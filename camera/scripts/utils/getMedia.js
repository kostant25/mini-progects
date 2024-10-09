const defaultConstraints = {
    // эти ограничения должны быть определены явно
    video: {
        pan: true,
        tilt: true,
        zoom: true
    }
}

async function getMedia(
    constraints = defaultConstraints
) {
    try {
        // TODO
    } catch (e) {
        console.error(e)
    }
}

export default getMedia
