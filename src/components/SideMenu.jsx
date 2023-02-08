import React from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

const SideMenu = () => {
  return (
    <div>
      {/* Side menu */}
      <div className='App' id="outer-container">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        <Sidebar>
          <Menu>
            <SubMenu label="Meny">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Priser </MenuItem>
            <MenuItem> Media </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  )
}

export default SideMenu
