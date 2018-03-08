Config
------
#### `config.json`
Should be a map of global application settings
- `hostname` - the ip address or domain name of the server
- `sessionDuration` - session timeout in seconds

#### `media.json`
Should be a list of video sources with metadata including:
- `mediaId` - the uid used to reference this stream in the application
- `sourceFilename` - the filename of the video source
- `deviceId` - the uid of the chromecast device that will play the video
- `duration` - duration of the video in milliseconds

#### `scenes/[mediaId].json`
Should be a list of scenes with metadata, including:
- `startTime` - time distance in milliseconds from the beginning of the stream to the start of the scene
