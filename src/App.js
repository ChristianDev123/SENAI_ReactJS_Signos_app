import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Listing from "./Components/Signos listing/listing_signos";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Listing />
      </main>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        *{
          padding:0;
          margin:0;
          box-sizing:border-box;
          font-family:'Roboto',sans-serif;
        }
      `}</style>
    </>
  );
}