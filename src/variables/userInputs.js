const userInputs = {
    tracks: [],
    artists: [],

    setTrack(track) {
        this.tracks.push(track)
    },

    removeTrack(track) {
        this.tracks.splice(track, 1)
    },

    setArtist(artist) {
        this.artists.push(artist)
    },

    removeArtist(artist) {
        this.artists.splice(artist, 1)
    }
}

export default userInputs