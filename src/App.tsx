import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button.tsx";

const App: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex", marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <Button> Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello Large </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Hello Small </Button>
        <Button disabled btnType={ButtonType.Link} href='www.baidu.com'> BaiDu Link </Button>
        <Button btnType={ButtonType.Link} target="_blank" href='https://www.baidu.com'> BaiDu Link </Button>
      </div>
    </>
  )
}

export default App
