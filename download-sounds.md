# Quick Guide: Downloading Animal Sounds

## Method 1: Freesound.org (Recommended)

1. Go to https://freesound.org
2. Create a free account (required for downloads)
3. Search for each animal name (e.g., "cow moo", "dog bark")
4. Filter by:
   - License: Creative Commons 0 (public domain) or CC-BY
   - File type: MP3 or WAV
   - Duration: Short (1-5 seconds works best)
5. Download and rename to match the required filename
6. Place in the `sounds` folder

## Method 2: YouTube to MP3 (Quick but check licensing)

1. Find animal sound videos on YouTube
2. Use a YouTube to MP3 converter (e.g., ytmp3.cc)
3. Download and trim to 2-5 seconds using Audacity (free)
4. Export as MP3
5. Rename and place in `sounds` folder

## Method 3: Record Your Own

1. Use your phone's voice recorder
2. Visit a farm, zoo, or pet store
3. Record animal sounds
4. Transfer to computer
5. Convert to MP3 if needed
6. Place in `sounds` folder

## Recommended Sound Characteristics

- **Format**: MP3
- **Duration**: 2-10 seconds (will loop automatically)
- **Quality**: 128kbps or higher
- **Sample Rate**: 44.1kHz
- **Channels**: Mono or Stereo

## Priority Animals to Start With

If you want to start with just a few sounds, download these popular ones first:

1. Dog (dog.mp3)
2. Cat (cat.mp3)
3. Cow (cow.mp3)
4. Lion (lion.mp3)
5. Elephant (elephant.mp3)
6. Rooster (rooster.mp3)
7. Duck (duck.mp3)
8. Owl (owl.mp3)
9. Wolf (wolf.mp3)
10. Frog (frog.mp3)

## Bulk Download Tips

### Using Freesound API (Advanced)

You can use the Freesound API to batch download sounds. Here's a Python script example:

```python
import requests
import os

API_KEY = "your_api_key_here"
animals = ["cow", "dog", "cat", "lion", "elephant"]

for animal in animals:
    url = f"https://freesound.org/apiv2/search/text/?query={animal}&token={API_KEY}"
    response = requests.get(url)
    # Download first result
    # (Full implementation would require more code)
```

## Audio Editing (Optional)

If you need to edit sounds:

1. **Audacity** (Free, Open Source)
   - Download: https://www.audacityteam.org
   - Trim, fade in/out, normalize volume
   - Export as MP3

2. **Online Tools**
   - MP3Cut.net - Trim MP3 files
   - Online-audio-converter.com - Convert formats
   - AudioTrimmer.com - Quick edits

## Legal Considerations

- Always check the license before using sounds
- Creative Commons 0 (CC0) = Public domain, free to use
- Creative Commons BY (CC-BY) = Free to use with attribution
- Avoid copyrighted sounds without permission
- Recording your own sounds = Always safe

## Troubleshooting

**Sound not playing?**
- Check filename matches exactly (lowercase, hyphens for spaces)
- Ensure file is in MP3 format
- Check browser console for errors
- Try a different browser

**Sound quality poor?**
- Use higher bitrate MP3 (192kbps or 320kbps)
- Ensure source audio is high quality
- Avoid over-compressed files

**File too large?**
- Trim to 2-5 seconds
- Use lower bitrate (128kbps is fine)
- Convert stereo to mono if needed
