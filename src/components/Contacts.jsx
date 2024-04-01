import "./contacts.css";
import Header from "../ui/Header";
import Form from "./Form";
import White from "./White";
import Green from "./Green";
import Footer from "../ui/Footer";

function Contacts() {
  return (
    <>
      <Header />
      <div className="contacts">
        <White>
          <Form />
        </White>
        <Green />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
