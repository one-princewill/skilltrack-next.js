import Navbar from "./(Components)/Nav Bar/NavBar";
import Footer from "./(Components)/Footer/Footer";

const layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout;