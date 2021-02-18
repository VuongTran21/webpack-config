import Recipes from './Recipes';
import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>this is my configuration for webpack</h1>
        </section>
        <Recipes />
      </main>
    </>
  );
};

export default App;
