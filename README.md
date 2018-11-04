# OSM Explorer Game Framework
The intent of this game framework is to build a game(s) which will help with crowd-sourcing data
to be stored in [OpenStreetMaps](http://www.openstreetmaps.org). The eventual goal is that the game will 
entice people to walk around their neighborhoods and various game challenges will help collect
information like building details, bathroom locations, restaurant and buisiness entrances, etc...
This data helps the [American Printing House for the Blind](https://www.aph.org/) provide 
better data for use in their "Nearby Explorer" app. The app assists people with sight impairment
to better navigate the world.

The game is currently being designed using [Quasar Framework](https://quasar-framework.org/) in order to allow
it to be easily deployed to both Android and iOS mobile devices. The maps are 
created using [Vue2 Leaflest](https://github.com/KoRiGaN/Vue2Leaflet) and an appropriate tile image provider like OpenStreetMap, USDA, USGS, etc...

## Game Play Ideas
- New players "wake up" with Amnesia in a post-disaster world which perfectly matches the real world
- They must navigate the real world to expose more views on the map
- Based on needs of the application and random chance, non-player characters will prompt players to enter information which can be aggregated back into OpenStreetMaps
- Exploring rewards players with "coins" to be used to purchase items in-game
- Completing challenges rewards players with "coins" used to purchase items in-game
- Leader board?
- Using Maching Learning to identify real-world elements from photos?

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```
