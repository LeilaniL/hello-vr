## VR Hello World
#### by Leilani Leach

Following along with <a href="https://www.lynda.com/React-js-tutorials/Learning-React-VR/614316-2.html">Learning React VR from Lynda/LinkedIn Learning</a>.

###
Setup Instructions:

- Clone project
- Run `npm install` in terminal at project root level
- Run `npm run start`
- Open browser at http://localhost:8081/vr/

For VR headset:

Same as above, but also
- Locate your IP address (`ipconfig` in Windows command prompt)
- Ensure VR headset is connected to same WiFi network
- In browser app of headset, navigate to {your ip address}:8081/vr

###
Known Bugs:

- If "error Invalid regular expression...unterminated character class" comes up on starting the server, either downgrade to Node v12.10 or edit node_modules/metro-bundler/src/blacklist.js, replacing `sharedBlacklist` with:

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start