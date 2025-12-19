import Navbar from "./Components/Navbar/navbar"


const dashLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default dashLayout;