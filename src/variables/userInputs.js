const userInputs = {
  tracks: [],
  artists: [],
  excludeTracks: [],
  excludeArtists: [],

  setTrack(track) {
    this.tracks.push(track);
  },

  removeTrack(track) {
    this.tracks.splice(track, 1);
  },

  setArtist(artist) {
    this.artists.push(artist);
  },

  removeArtist(artist) {
    this.artists.splice(artist, 1);
  },

  setExcludeTrack(track) {
    this.excludeTracks.push(track);
  },

  removeExcludeTrack(track) {
    this.excludeTracks.splice(track, 1);
  },

  setExcludeArtist(artist) {
    this.excludeArtists.push(artist);
  },

  removeExcludeArtist(artist) {
    this.excludeArtists.splice(artist, 1);
  },
};

export default userInputs;
