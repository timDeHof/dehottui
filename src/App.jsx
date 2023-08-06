import CustomButton from "./components/Button";
import { Button } from "dehottui";

import TestArea from "./testArea";
const App = () => {
  return (
    <>
      <section>
        <CustomButton
          ClassName='bg-red-700 hover:bg-yellow-600'
          onClick={() => console.log("clicked!!!")}>
          Hello World
        </CustomButton>
      </section>
      <TestArea>
        <Button
          ClassName='bg-yellow-700 hover:bg-teal-700'
          onClick={() => console.log("good bye" + " " + new Date())}>
          Good Bye!!!
        </Button>
      </TestArea>
    </>
  );
};

export default App;
