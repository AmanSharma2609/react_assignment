import React from 'react'
import { Container, Row, Col, } from 'reactstrap';
import Loading from './reusableComponent/loader'

function CardsDetail(props){
    const [url,setUrl] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [course, setCourse] = React.useState('')
    React.useEffect(() => {
        const link = localStorage.getItem('video')
        const name = localStorage.getItem('name')
        setCourse(name)
        setUrl(link)
        setTimeout(() =>{
            setLoading(false)
        },400)
    }, [])
    return(
        <div className='cards_detail_container'>
        {loading ?<Loading /> :  <Container className='h-100 w-100 d-flex justify-content-center align-items-center '>
            <Row className='d-flex justify-content-center align-items-center w-100 mt-2 mb-2'>
                <Col xs={12} sm={12} md={6} lg={5} xl={5} className='d-flex justify-content-center align-items-center'><iframe width="350" height="350" src={url} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                <Col xs={12} sm={12} md={6} lg={5} xl={5} className='d-flex content justify-content-center align-items-start'>
                <div className='medium_font_Size '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui</div></Col>
            </Row>
        </Container>}
        </div>
    )
}
export default CardsDetail