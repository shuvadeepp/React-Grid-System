import {Button, Container, Row, Col, Form} from 'react-bootstrap';
import ProfilePic from './images/Remove.jpg';

export default function Gridsystem () {
    // alert(111);
    return(
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                    <Container fluid>
                        <Row>
                            <Col xs> 

                                <img src={ProfilePic} alt="ProfilePic" className='img-responsive' width={140} style={{margin:"15px 0 0 0", borderRadius:"50%"}}/>
                                
                                <a href=''> <h3 style={{margin:"20px 0 0 0"}} > User Name </h3></a>
                                <div>
                                    <a className='dropdown-item' href='#'> Home </a>
                                    <a className='dropdown-item' href='#'> Setting </a>
                                    <a className='dropdown-item' href='#'> Support & Help </a>
                                    <a className='dropdown-item' href='#'> Logout </a>
                                </div>
                            
                            </Col>
                            <Col xs={{ order: 12 }}> 
                            
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Default file input example</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                                    <Form.Control
                                        type="color"
                                        id="exampleColorInput"
                                        defaultValue="#563d7c"
                                        title="Choose your color"
                                    />
                                    <div>&nbsp;</div>

                                        <Button variant="success"> Submit </Button><span>&nbsp;&nbsp;&nbsp;</span>
                                        <Button variant="danger"> Reset </Button>
                                </Form>
                            
                            
                             </Col>
                            <Col xs={{ order: 1 }}> 
                            
                            {/* follow */}
                            <div className='col-6 col-md-12'>
                                <form className='follow-form'>
                                    <img src={ProfilePic} height={'50'} width={'50'} style={{borderRadius:"50%"}}/><span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant="primary"> Follow </Button><br /><br />
                                    <img src={ProfilePic} height={'50'} width={'50'} style={{borderRadius:"50%"}}/><span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant="primary"> Follow </Button><br /><br />
                                    
                                    <img src={ProfilePic} height={'50'} width={'50'} style={{borderRadius:"50%"}}/><span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant="primary"> Follow </Button><br /><br />

                                    <img src={ProfilePic} height={'50'} width={'50'} style={{borderRadius:"50%"}}/><span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant="primary"> Follow </Button><br /><br />

                                    <img src={ProfilePic} height={'50'} width={'50'} style={{borderRadius:"50%"}}/><span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant="primary"> Follow </Button><br /><br />

                                    <img src={ProfilePic} height={'50'} width={'50'} /><span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant="primary"> Follow </Button><br /><br />
                                    
                                    
                                </form>
                            </div>
                            
                             </Col>
                        </Row>
                    </Container>
            </div>
        </div>
    </div>
    )
}