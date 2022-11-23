import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Card, Container} from "react-bootstrap";

export default function Database() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/read")
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(data)

    return (
        <div>
            <Container>
                <h2>Data Base of user logins</h2>
            </Container>
            {data.map((item, index)=>{
            return(
                <div key={index}>
                    <Card className="my-card rounded-0" style={{ width: '100%'}}>
                        <Card.Body>
                            <Card.Text >
                                <span className="text-info fw-bold">User Name: </span>{item.user_name}
                            </Card.Text>

                            <Card.Text>
                                <span className="text-info fw-bold">Password: </span> {item.password}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                )
            })}

        </div>
    )
}