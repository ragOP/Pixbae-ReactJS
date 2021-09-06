import React from 'react'
import { AppBar,Toolbar,Typography } from '@material-ui/core'
import CollectionsIcon from '@material-ui/icons/Collections';

const Navbar = () => {
    return (
        <AppBar position="static">
  <Toolbar>
   <CollectionsIcon/>
   <Typography variant="h5"style={{marginLeft:50}} >PixFinder by Rag</Typography>
   {/* <BreadCrumb style={{marginLeft:500}}/> */}
  </Toolbar>
</AppBar>
    )
}

export default Navbar
