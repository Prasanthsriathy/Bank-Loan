import React from "react";
import 'antd/dist/antd.css';
import { Button, Card, Col,Input,Row } from 'antd'
import './Loan.css';
import { Content, Header } from "antd/lib/layout/layout";

function Loan(){
    return(
<div>
    <Header>
<Card  className="head">
<Row>
    <Col offset={1}>
<h2> Business Loan Application </h2>
</Col>
</Row>

<Row>

    <Col offset={1}>
<h4> Personal Information </h4>
</Col>

</Row>

</Card>
</Header>

<Content>
<Card className="Content">
    <Row>
<Col offset={1}>
<label> Name Of Applicant <b className="red">*</b> </label> <br/>
<Input type="text "  style={{width:'80px'}}/><br/>
<h5>Prefix</h5>
</Col>

<Col >
<br/>
<Input type="text "  style={{width:'130px'}}/><br/>
<h5>First Name</h5>
</Col>

<Col offset={1}>
<br/>
<Input type="text "  style={{width:'130px'}}/><br/>
<h5>Middle Name</h5>
</Col>

<Col offset={1}>
<br/>
<Input type="text "  style={{width:'130px'}}/><br/>
<h5>Last Name</h5>
</Col>
    </Row>



    <Row>
<Col offset={1}>
<label> E-mail of Applicant <b className="red">*</b></label><br/>
<Input type="email"/>
</Col>

    </Row>


    <Row>


<Col offset={1}>
<label > Phone number of Applicant  <b className="red">*</b> </label> <br/>
<Input type="text "  style={{width:'80px'}}/><br/>
<h5>Area Code</h5>
</Col>

<Col >
<br/>
<Input type="text "  style={{width:'130px'}} className="Box2"/><br/>
<h5 className="Box2">Phone Number</h5>
</Col>
    </Row>


    <Row>
    <Col offset={1}>
<label >Mobile Phone number of Applicant  <b className="red">*</b> </label> <br/>
<Input type="text "  style={{width:'80px'}}/><br/>
<h5>Area Code</h5>
</Col>

<Col >
<br/>
<Input type="text "  style={{width:'130px'}} className="Box3"/><br/>
<h5 className="Box3"> Phone Number</h5>
</Col>
    </Row>


<Row>
    <Col offset={1}>
<label > Fax number of Applicant  <b className="red">*</b> </label> <br/>
<Input type="text "  style={{width:'80px'}}/><br/>
<h5>Area Code</h5>
</Col>

<Col >
<br/>
<Input type="text "  style={{width:'130px'}} className="Box4"/><br/>
<h5 className="Box4">Phone Number</h5>
</Col>
    </Row>


    <Row>
<Col offset={1}>
    <label> Address Of Applicant  <b className="red">*</b> </label> <br/>
    <Input type="text" style={{width:'350px'}}/><br/>
    <h5>Street Address</h5>
    
</Col>
    </Row>
    <Row>
        <Col offset={1}>
    <Input type="text" style={{width:'350px'}}/><br/>
    <h5>Street Address Line 2</h5>
    </Col>
    </Row>

    <Row>
<Col offset={1}>
<Input type="text" style={{width:'150px'}}/><br/>
    <h5> District</h5>
</Col>

<Col offset={1}>
<Input type="text" style={{width:'150px'}}/><br/>
    <h5> State</h5>
</Col>

    </Row>

    <Row>
        <Col offset={1}>
        <Button> Submit </Button>
        </Col>
    </Row>

</Card>
        
</Content>


</div>

    );
}

export default Loan;