import React, {useContext} from 'react'
import { Container, Row, Col, } from 'reactstrap';
import Card from './reusableComponent/card'
import {CardContext} from '../card-data-context'
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
    const {data}  = useContext(CardContext)
    React.useEffect(() => {
        console.log(data)
    },[])

    return(
        <div className='home_container'>
        <Container className='home_middle_container'>
        <Row className='w-100 d-flex justify-content-center align-items-center'>
        {data.map((item,index) =>{
            return(
                <Col key={index} xs={10} sm={8} md={4} lg={3} xl={3}> <Card name={item.name} bg={item.bgClass} image={item.image}/></Col>
                
            )
        })}
        </Row>
        </Container>
       </div>
    )
}
export default Home;