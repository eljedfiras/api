import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Cardd({data}) {
  return (
    <div>
      <Card style= {{ width: '18rem'}}>
<Card.Body>
    <Card.Title> {data.name} </Card.Title>
    <Card.Text>
{data.email}
    </Card.Text>
    <Card.Text>
{data.address.city}
    </Card.Text>

</Card.Body>

      </Card>
    </div>
  )
}
