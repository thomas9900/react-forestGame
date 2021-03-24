import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './walk.png'
import handleMovement from './movement'
import axe from '../axe/axe-1.png'

function Player(props) {
  // console.log(props)

  const playerImg = `url('${walkSprite}')`
  const axePickedImg = `url('${axe}'), url('${walkSprite}')`
  const backImg = (props.axePicked === true ? axePickedImg : playerImg)

  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: backImg,
        backgroundPosition: props.spriteLocation,
        width: '40px',
        height: '40px',
        zIndex: 1
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(handleMovement(Player))
