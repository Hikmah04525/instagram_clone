import PostFeed from "../../components/Feed/Feed";
import Story from "../../components/Story/Story";
import Suggestions from "../../components/Suggestions/Suggestions";


/*const Home = () => {
  return (
    <>
      <Story />
      <div className="relative flex flex-col items-center">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[600px]">
            <PostFeed />
          </div>
        </div>

        <div className="hidden lg:block absolute top-[100px] right-8 w-[350px]">
          <Suggestions />
        </div>
      </div>
    </>
  );
};

export default Home;*/
const Home = () => {
  return (
    <div className="min-h-screen pt-4"> 
      
      <Story /> 
      
      {/*         MAIN CONTENT WRAPPER: 
        1. `flex justify-center` centers the entire Feed + Suggestions block.
        2. Removed `relative` and `absolute` to prevent overlap.
      */}
      <div className="flex justify-center w-full mt-6">
        
        {/*           1. The Post Feed column (w-full max-w-[600px] ensures it takes up full width 
              on mobile and stops growing at 600px on desktop.)
        */}
        <div className="w-full max-w-[600px]">
          <PostFeed />
        </div>

        {/*           2. The Suggestions column (Only visible on large screens)
              `ml-16` adds the necessary space between the feed and the suggestions.
              `pt-4` slightly pushes the suggestions down to align better.
        */}
        <div className="hidden lg:block w-[320px] ml-16 pt-4">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Home;

