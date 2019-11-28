import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const CollapseQuiz = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
<p onClick={toggle} style={{ marginBottom: '1rem', color:"blue" }}>{props.question}</p>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.correct}
          {props.wrong1}
          {props.wrong2}
          {props.wrong3}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseQuiz;
