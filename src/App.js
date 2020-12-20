import './App.css';
import { Button } from '@material-ui/core';
import News from './components/News/News';
import Upload from './components/News/Upload/Upload';
import ComplexButtons from './components/News/ComplexButtons/ComplexButtons';
import SpiltButtons from './components/News/SplitButtons/SpiltButtons';

function App() {
  return (
    <div className="App">
      {/* <Button color="primary">Hello World</Button> */}
      <News></News>
      {/* <br/>
      <Upload></Upload>
      <br/>
      <ComplexButtons></ComplexButtons>
      <br/>
      <SpiltButtons></SpiltButtons> */}
    </div>
  );
}

export default App;
