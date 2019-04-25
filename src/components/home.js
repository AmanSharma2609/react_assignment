import React, {useContext} from 'react'
import { Container, Row, Col, } from 'reactstrap';
import Card from './reusableComponent/card'
import {CardContext} from '../card-data-context'
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function Home(props) {
    const {data}  = useContext(CardContext)
    React.useEffect(() => {
        console.log(data)
    },[])
    const navigationToDetail = (url,name) => {
        localStorage.setItem('video', url)
        localStorage.setItem('name', name)
        props.history.push('/CardsDetail')
    }

    return(
        <div className='home_container'>
        <Container className='home_middle_container'>
        <Row className='w-100 d-flex justify-content-center align-items-center'>
        {data.map((item,index) =>{
            return(
                <Col
                 key={index} xs={10} sm={8} md={4} lg={3} xl={3} onClick={() => navigationToDetail(item.videoLink,item.name)}>  
                 <Card name={item.name} bg={item.bgClass} image={item.image}/>
                 </Col>
                
            )
        })}
        </Row>
        </Container>
       </div>
    )
}
export default withRouter(Home);