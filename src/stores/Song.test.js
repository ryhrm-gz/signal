import assert from "assert"
import fs from "fs"
import path from "path"

import { read } from "../midi/MidiFileReader"
import Song from "./Song"

describe("Song", () => {
  const midi = read(fs.readFileSync(path.join(__dirname, "../../testdata/tracks.mid")))
  const song = Song.fromMidi(midi)

  it("fromMidi", () => {
    assert(song != null)
    const { tracks } = song
    assert.equal(tracks.length, 18)

    assert.equal(tracks[0].isConductorTrack, true)
    assert.equal(!tracks[1].isConductorTrack, true)
    assert.equal(tracks[1].channel, 0)
    assert.equal(tracks[2].channel, 1)
    assert.equal(tracks[3].channel, 1)
    assert.equal(tracks[17].channel, 15)

    assert.equal(tracks[0].tempo, 128)
    assert.equal(tracks[2].volume, 100)
    assert.equal(tracks[2].pan, 1)
    assert.equal(tracks[2].programNumber, 29)
  })
})