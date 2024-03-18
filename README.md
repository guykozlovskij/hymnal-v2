# Hymnal V2
A progressive web app serving as a hymnal for a Christian community in Lithuania.

Deployed at [himnynas.com](https://himnynas.com/).

## Customize Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
# For running locally
npm run dev

# Exposes Network IP. When run, follow the URL https://192.168.1.100:5173/ on your mobile device for testing
npm run dev -- --host  
```

### Compile and Minify for Production

```sh
npm run build
```

## **TODO**

- [x]  Conditional rendering in the home (search, lists)
- [x]  New hymn view
- [x]  Dynamic Hymn View
- [x]  Music
- [x]  A complete JSON dataset for the original hymnal
- [x]  Search feature - text, numbers, title
- [x]  Persisting search result
- [x]  Navbar
- [x]  New hymn section
- [x]  Home page list of all hymns
- [x]  Individual hymn component
- [x]  Adjust Button styling for hymns
- [x]  Clean up code
- [x]  Separate CSS files
- [x]  Display New hymns as a list, with no buttons
- [x]  Review css
- [x]  Replace search result as first-line rather than title
- [x]  Search needs to be a separate component
- [x]  rainbow search
- [x]  Adjust shrinking of the search results
- [x]  Implement a service worker
- [x]  clear search result button
- [x]  **settings** component/ route
    - [x]  Dark mode
- [x]  **Polishing**
    - [x]  swap search and index
    - [x]  Conditional language rendering. Example - hymn 90
    - [x]  Double-check new hymn correctness and melodies
    - [x]  loop short hymns
    - [x]  Back button logic
- [x]  **Final clean-up and refactor**
    - [x]  Go through all the files
    - [x]  Change the hymn index to a more modern variant
    - [x]  Adjust margins and paddings - add variables
    - [x]  Finalise Styling and consistency across devices
    - [x]  adjust padding for single verse but chorus containing hymns eg 97
- [x]  add git ignore
- [x]  Add all PWA icons
- [x]  Deploy!
- [x]  Write up the readme
- [x]  Fix iOS text-centering
- [x]  Re-add settings panel for updates notes
- [x]  Replace old hymns with new
- [x]  Add iOS PWA support
- [x]  Extend nav for iOS
- [x]  Add iOS splash screens 

### Design Work

- [x]  Extend the bottom Nav vertically to account for the touch navigation bar in iOS and sometimes Android
- [ ]  Set up dark mode? (Not sure about how necessary this is)
- [x]  Stylise the audio player (Android)
- [ ]  Stylise the audio player (iPhone)

### Settings Component

- [x]  Change log
- [ ]  Instructions for Installing
- [ ]  Font Size modifier
- [ ]  Font Type selector (Times New Roman, Arial, Sans-serif, etc)
- [ ]  Repeating Chorus?
- [ ]  Dark Mode **(have the prerequisites already set up)**

### Stretch Goals

*(Not part of MVP, should not hinder the base app usage)*

- [ ]  Chords
- [ ]  Lithuanian domain
- [ ]  Repeating Chorus


