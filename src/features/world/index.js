import React from 'react'
import Map from '../map'
import Player from '../player'

import { tiles } from '../../data/maps/1'
import store from '../../config/store'

function World(props) {
  store.dispatch({ type: 'ADD_TILES', payload: {
    tiles,
  }})
  return (
    
    <div
      style={{
        position: 'relative',
        width: '800px',
        height: '400px',
        margin: '20px auto',
      }}
    >
      
      <Map />
      <Player />
      <h3 style={{ 
        zIndex: '99', 
        color: 'red',
        textAlign: 'center'
        }}>Pick up the axe to go through woods</h3>
    </div>
  )
}

export default World
