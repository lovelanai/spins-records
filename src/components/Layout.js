import Header from "./Header";
import Main from "./Main";
import Store from "./Store";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="layout">
      <Header></Header>
      <Main></Main>
      <Store></Store>
    </div>
  );
}
