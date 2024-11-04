To do

[x] Fix avatar image size
[ ] Fix Terminal whitespace issue
[x] Favicon
[x] Fix project media layout on smaller screens
[ ] Add more projects
[ ] Add multilanguage support

Convert video with width of 544px and keep aspect ratio
```bash
ffmpeg -i input_video.mp4 -vf "scale=544:-2" -r 15 -c:v libx264 -crf 23 -preset slow -c:a aac output_video.mp4
```
