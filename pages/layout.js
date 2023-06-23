import NavScrollExample from "./nav";
import { Noto_Sans_Thai } from "next/font/google";
import Footer from "./footer";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans_Thai({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
      <div className={noto.className}>
        <NavScrollExample />
        <main>{children}</main>
        <Footer />
      </div>
  );
}
