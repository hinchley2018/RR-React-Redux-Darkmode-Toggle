import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
// connect to data
import { useSelector, useDispatch, connect } from 'react-redux'
//mutate data
import { setDarkTheme, setLightTheme } from './features/themeSlice';
function App() {
  const dispatch = useDispatch()
  //select a chunk of state from redux
  const theme = useSelector((state) => state.theme)
  console.log("state from redux", theme)
  //color1 is bg
  //color5 is font color

  const handleOnClick = () => {
    //if dark do this
    if(theme.darkMode){
      dispatch(setLightTheme())
    }
    //what to do if light?
    else{
      dispatch(setDarkTheme())
    }
  }
  return (
    <div style={{ backgroundColor: theme.color1, color: theme.color5 }} className="App">
      <button onClick={handleOnClick}>Set Theme</button>
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
