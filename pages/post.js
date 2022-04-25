import React, {useState, useEffect} from 'react'
import Head  from 'next/head'
import Link  from 'next/link'
import { Container }  from 'react-bootstrap'
import { Row }  from 'react-bootstrap'
import { Col }  from 'react-bootstrap'
import { Card }  from 'react-bootstrap'
import { Button }  from 'react-bootstrap'
import Nav from './navigation'
const Post = () =>{
    const [meals, setMeals] = useState(null);

    

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res=>res.json())
            .then(result=> setMeals(result.meals))
            .catch(e=>console.log(e))
        
    }, [])
    return(
        <div className='container'>
            <Head>
                <title>Halaman Post</title>
            </Head>
            <Nav/>
            <h1 className='text-center pt-5'>Post</h1>
            <Container>
            <Row xs={1} md={3} className="g-3">
            {
                meals && meals.map(meal => (
                    <Col key={meal.idMeal}>
                        <div className='ms-3 py-3'>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={meal.strMealThumb} />
                                <Card.Body>
                                    <Card.Title>{meal.strMeal}</Card.Title>
                                    <Button variant="warning">Detail</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))
            }
            </Row>
      </Container>
        </div>
        
    )
}

export default Post;