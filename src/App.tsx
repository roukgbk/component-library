import React from "react";
import Button from "./components/Button/button.tsx";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem.tsx";

const App: React.FC = () => {
  return (
    <>
      <Menu defaultIndex={0} onSelect={(index) => {
        console.log(index)
      }}>
        <MenuItem index={0}>1</MenuItem>
        <MenuItem index={1} disabled>2</MenuItem>
        <MenuItem index={2}>3</MenuItem>
      </Menu>
      <div style={{ display: "flex", marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <Button> Hello </Button>
        <Button btnType='default' size='lg'> Default </Button>
        <Button btnType='primary' size='lg'> Hello Large </Button>
        <Button btnType='danger' size='sm'> Hello Small </Button>
        <Button disabled btnType='link' href='https://www.baidu.com'> BaiDu Link </Button>
        <Button btnType='link' target="_blank" href='https://www.baidu.com'> BaiDu Link </Button>
      </div>
    </>
  )
}

export default App
