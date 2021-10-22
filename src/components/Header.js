import { AppBar } from '@material-ui/core'
import React from 'react'
import Loginpage from './Loginpage'
const Header = () => {
    return (
        <div>
            <AppBar position="relative"
            color="secondary"
            variant="elevation"


            
            >Registration form</AppBar>
          <Loginpage/>
            </div>
    )
}

export default Header
