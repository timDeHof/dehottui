import CustomButton from "./components/Button/Button";
import CustomCard from "./components/Card/Card";
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
        <CustomCard />
      </section>
      <TestArea>
        <Button
          ClassName='bg-yellow-700 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-700 hover:border-2 text-yellow-50'
          onClick={() => console.log("good bye" + " " + new Date())}>
          Good Bye!!!
        </Button>
        <CustomCard
          ClassName='bg-red-400'
          src='https://source.unsplash.com/A5rCN8626Ck'
          title='The Coldest Sunset'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
          tags={["photography", "travel", "winter"]}
        />
      </TestArea>
    </>
  );
};

export default App;
