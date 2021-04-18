import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import store from '../../config/store'
import {axe as axe1}  from '../player/movement'

import './styles.css'


function getTileSprite(type) {
  switch(type) {
    case 0:
      return 'grass'
    case 2:
      return 'axe'
    case 3:
      return 'tree'
    case 4:
      return 'chest'
    case 5:
      return 'tree'
    case 6:
      return 'rock'

  }
}

function MapTile(props) {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}
  />
}

function MapRow(props) {
  return <div
    className="row"
    style={{
      height: SPRITE_SIZE,
    }}
  >
  {
    props.tiles.map( tile => <MapTile tile={tile} /> )
  }
  </div>
}

function Map(props) {
  console.log(axe1)

  return (
    <div
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '800px',
        height: '480px',
        border: '4px solid white',
      }}
    >
      {
        props.tiles.map( row => <MapRow tiles={row} /> )
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(mapStateToProps)(Map)
