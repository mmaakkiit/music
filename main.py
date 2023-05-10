音 = 0

def on_forever():
    global 音
    音 = 0
    music.play_tone(262+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(294+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(330+音, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(262+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(294+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(330+音, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(392+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(330+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(294+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(262+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(294+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(330+音, music.beat(BeatFraction.WHOLE))
    music.play_tone(294+音, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.WHOLE))
basic.forever(on_forever)
