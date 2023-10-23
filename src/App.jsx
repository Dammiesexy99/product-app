import Description from './Component/Description';
import Name from './Component/Name';
import price from './Component/price';
import Image from './Component/Image';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {

  return (
    <>
     <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {<Image/>} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Price/>
        <Card.Text>
          <Description/>
        </Card.Text>
      </Card.Body>
    </Card>
     </div>
    </>
  )
}

export default App
