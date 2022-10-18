import React from "react";
import 'antd/dist/antd.css';
import { Card, Col } from 'antd'
import { Form, Input, Row, Button } from 'antd';
import img1 from '../assets/Sriram.jpeg'
import '../Content.css';


const App3 =() =>{
return(
<div className="App3">


    <div className="Signin4">
      <Card className="Main-Card4">
        <div className="Img">
          <img src={img1} alt="" />
        </div>

        <div className="Text-Label">
          <h3>Login</h3> <hr />
        </div>
        <Form className="Signin-Form4">
          <Row>
            <Col>
              <Form.Item
                label="Mobile Number"
                className="Mobile-Number-label"
                name="username"
                rules={[{ message: 'Please Enter Your Phone Number!' }]}
              ></Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
            <Input className="Input-Field" placeholder="+91" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="Password"
                className="Password-label"
                name="username"
                rules={[{ message: 'Please Enter Your Phone Number!' }]}
              ></Form.Item>
            </Col>
          </Row>

          <Row>
            <Col>
              <Input.Password className="Input-Field2" placeholder="Enter Password" />
            </Col>
          </Row>
          
          <Row>
            <Col>
            <p className='Forgot-Password'>Forgot Password</p>
            </Col>
          </Row>

          <Row>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Row>
        </Form>
      </Card>

     

      
    
    </div>

</div>


)


}
export default App3;