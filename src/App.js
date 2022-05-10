import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Review from "./components/Review";

const projectName = "Reviews Project";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-500 min-h-screen w-screen h-auto flex">
      <main className="container w-4/5 max-w-xl mx-auto flex flex-col justify-center items-center">
        <Header projectName={projectName}/>
        <Review />
        <Footer />
      </main>
    </div>
  );
};

export default App;
