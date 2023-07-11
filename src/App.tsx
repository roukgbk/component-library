import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button.tsx";

const App: React.FC = () => {
  return (
    <>
      <Button disabled> Hello </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Hello </Button>
      <Button disabled btnType={ButtonType.Link} href='www.baidu.com'> BaiDu Link </Button>
    </>
  )
}

export default App
