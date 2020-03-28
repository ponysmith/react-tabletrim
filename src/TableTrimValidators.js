import React from 'react'


export const errors = {
  ACTIVECOL_OUT_OF_RANGE: 'activeCol - Out of range',
  STICKYCOL_OUT_OF_RANGE: 'stickyCol - Out of range',
  ACTIVECOL_STICKYCOL_CONFLICT: 'activeCol and stickyCol cannot be the same',
}

export const validateActiveCol = (props, propName) => {
  const activeCol = props[propName];
  if(activeCol < 0 || activeCol >= props.data.header.cells.length) {
    return new Error(errors.ACTIVECOL_OUT_OF_RANGE);
  }
  if(activeCol == props.stickyCol) {
    return new Error(errors.ACTIVECOL_STICKYCOL_CONFLICT);
  }
}

export const validateStickyCol = (props, propName) => {
  const stickyCol = props[propName];
  if(stickyCol < 0 || stickyCol >= props.data.header.cells.length) {
    return new Error(errors.STICKYCOL_OUT_OF_RANGE);
  }
  if(stickyCol == props.activeCol) {
    return new Error(errors.ACTIVECOL_STICKYCOL_CONFLICT);
  }
}

