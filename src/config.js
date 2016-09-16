export const firebase = {
  apiKey: 'AIzaSyC3gQNF4LbIAOSMwa6bs1sWUgNjgioyL6c',
  authDomain: 'citrus-home.firebaseapp.com',
  databaseURL: 'https://citrus-home.firebaseio.com',
  storageBucket: 'citrus-home.appspot.com',
  messagingSenderId: '321604258506'
}

export const controlTypes = {
  button: 'button',
  slider: 'slider',
  select: 'select'
}

export const initial = {
  "devices": {
    "-KRgzTwOo3h6cCnqFPaO": {
      "controls": {
        "-KRh0FMX4qmPkZUlRhBH": "53",
        "-KRh0TJzRGrkoQp_MP6c": "1"
      },
      "label": "Livingroom Player",
      "typeId": "-KRgwFmyQEAyxuswDD1p"
    },
    "-KRh1wz_6kFecUSzUDvg": {
      "label": "Livingroom Lights",
      "typeId": "-KRh10PJcrrZjK0QIh8G"
    },
    "-KRmF3edrKRc2PSI1YgN": {
      "controls": {
        "-KRmExINNcIe2JpXLsRr": "42"
      },
      "label": "Bedroom Apple TV",
      "typeId": "-KRmEtF945-wE3DDiaKs"
    }
  },
  "devicesTypes": {
    "-KRgwFmyQEAyxuswDD1p": {
      "controls": {
        "-KRh-tP2G3MAjAFmLG1d": {
          "label": "Power",
          "type": "button"
        },
        "-KRh0FMX4qmPkZUlRhBH": {
          "label": "Volume",
          "type": "slider"
        },
        "-KRh0TJzRGrkoQp_MP6c": {
          "label": "Playlist",
          "options": [
            "When the Sun Goes Down",
            "The Greatest",
            "Do I Wanna Know?"
          ],
          "type": "select"
        }
      },
      "label": "Samsung Audio"
    },
    "-KRh10PJcrrZjK0QIh8G": {
      "controls": {
        "-KRh1NVLAfRMs2Vre05c": {
          "label": "On/Off",
          "type": "button"
        }
      },
      "label": "Citrus Lights"
    },
    "-KRmEtF945-wE3DDiaKs": {
      "controls": {
        "-KRmEu2qgM6QjYFDtNQm": {
          "label": "Power",
          "type": "button"
        },
        "-KRmExINNcIe2JpXLsRr": {
          "label": "Brightness",
          "type": "slider"
        },
        "-KRmEzsPnqglNfKcT2GK": {
          "label": "Volume",
          "type": "slider"
        }
      },
      "label": "Apple TV"
    },
    "-KRmFBilJkn0v3gcxgpW": {
      "controls": {
        "-KRmFD53vd9SeY8_FBsq": {
          "label": "Power",
          "type": "button"
        },
        "-KRmFD7ia0vrL2iEYclm": {
          "label": "Volume",
          "type": "slider"
        },
        "-KRmFDHfp2k7m075CtNF": {
          "label": "Playlist",
          "options": [
            "Discover",
            "Favourites",
            "Best of Punk"
          ],
          "type": "select"
        }
      },
      "label": "Sony Audio"
    }
  }
}
