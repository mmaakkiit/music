input.onButtonPressed(Button.A, function () {
    音 += 1
})
input.onButtonPressed(Button.B, function () {
    音 += -1
})
let 音 = 0
basic.forever(function () {
    music.playTone(262 + 音, music.beat(BeatFraction.Whole))
    music.playTone(294 + 音, music.beat(BeatFraction.Whole))
    music.playTone(330 + 音, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262 + 音, music.beat(BeatFraction.Whole))
    music.playTone(294 + 音, music.beat(BeatFraction.Whole))
    music.playTone(330 + 音, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(392 + 音, music.beat(BeatFraction.Whole))
    music.playTone(330 + 音, music.beat(BeatFraction.Whole))
    music.playTone(294 + 音, music.beat(BeatFraction.Whole))
    music.playTone(262 + 音, music.beat(BeatFraction.Whole))
    music.playTone(294 + 音, music.beat(BeatFraction.Whole))
    music.playTone(330 + 音, music.beat(BeatFraction.Whole))
    music.playTone(294 + 音, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
})
