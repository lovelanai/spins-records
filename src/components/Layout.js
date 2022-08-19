import Header from "./Header";
import Main from "./Main";
import Store from "./Store";
import About from "./About";
import Contact from "./Contact";
import "./Mobile.css";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Store></Store>
      <Contact></Contact>
    </div>
  );
}
