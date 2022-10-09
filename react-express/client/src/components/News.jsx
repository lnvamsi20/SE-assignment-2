import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import moment from 'moment'

export default function News() {
    const [news, setNews] = useState([])

    const API_KEY = '3639ad6a550a48cfad97068aadf5ac32'
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`


    useEffect(() => {
        axios.get(API_URL)
            .then(({ data }) => setNews(data.articles))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='my-5'>
            <h2 className='pb-2'>Top headline News</h2>
            <div className='news'>
                {
                    news?.map((n, key) => n.urlToImage ? (
                        <Card key={key} data-source={n.source.name}>
                            <Card.Header>
                                <Card.Img src={n.urlToImage} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{n.title}</Card.Title>
                                <p>{n.description}</p>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href={n.url} target='_blank' >Read more</Card.Link>
                                <span>{moment(n.publishedAt).format('YYYY/MM/YY HH:MM')}</span>
                            </Card.Footer>
                        </Card>
                    ) : null)
                }
            </div>
        </div>
    )
}
