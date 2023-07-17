import React from "react";
import Button from "./components/Button/button.tsx";

const App: React.FC = () => {
  return (
    <>
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
