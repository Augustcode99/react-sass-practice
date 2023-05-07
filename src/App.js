import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import "./scss/app.scss";
import cardStyle from "./scss/card.module.scss";
import data from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <div className={cardStyle.container}>
        {data.map((item) => {
          const { id, name, role, comment, img } = item;
          return (
            <Card
              key={id}
              name={name}
              role={role}
              comment={comment}
              img={img}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
