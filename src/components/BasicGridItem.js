import React from 'react'

import { GridListTile, GridListTileBar} from '@material-ui/core'

const BasicGridItem = (props) => {
  const {item_name, item_price, itemOwner} = props.item

  console.log(props.item)
  return (
    <GridListTile>
      <img src='https://via.placeholder.com/500/' alt='stuff' />
      <GridListTileBar
        title={item_name}
        subtitle={<div className='tile-subtitle'>
          <span>${item_price}</span>
          <span>By: {itemOwner.fullname}</span>
        </div>}
      >
      </GridListTileBar>
    </GridListTile>
  )
}

export default BasicGridItem
