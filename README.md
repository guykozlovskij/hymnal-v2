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

### PWA and offline use

The production build includes a service worker that caches the app and bundled hymn data after the app has loaded online. Hymn text remains available offline after that initial load; music playback uses the hymnal.net widget and requires an internet connection.

To check the production PWA locally, build it and run `npm run preview`. The development server does not provide the same installed-PWA and service-worker behavior as the production build.


