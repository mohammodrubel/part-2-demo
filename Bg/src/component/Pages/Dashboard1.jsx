import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const Dashboard1 = () => {
    const [freeBesy,setFreeBesy]=useState('free')
    console.log(freeBesy)
    const {
        data: user = [], isLoading, refetch, } = useQuery({
            queryKey: ["instructorData"],
            queryFn: async () => {
                const res = await fetch("http://localhost:5000/users");
                const data = await res.json();
                return data;
            },
        });

    const freeButton = (id, update) => {
        const information = {
            timeStatus: new Date().toLocaleTimeString(),
            dateStatus: new Date().toLocaleDateString(),
            id: id,
            timeManagment: update,
        };
        fetch(`http://localhost:5000/users`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    };

    console.log(user)


    return (
        <Container>
            <Row>
                <div className="d-flex mb-3">
                    <button onClick={()=>setFreeBesy('free')} className="p-2 btn flex-fill text-center text-white bg-success">
                        Free
                    </button>
                    <button onClick={()=>setFreeBesy('busy')} className="p-2 btn flex-fill text-center text-white bg-danger">
                        Busy
                    </button>
                </div>
            </Row>
            <Row>
                {
                    user.filter(item => item.timeManagment === freeBesy).map((item) => <div className="mt-4 d-flex justify-content-between align-items-center p-2 gap-2" style={{ boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>
                        <div className="d-flex gap-3">
                            <img src={item.useUrl} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                            <div>
                                <b className="text-primary">{item.username}</b>
                                <div className="d-flex gap-4">
                                    <small>{item.mobile}</small>
                                    <small>{item.email}</small>
                                </div>
                                <small>{item.Address}</small>
                                <small>{item.Address}</small> <br />
                                {item.timeManagment === 'free'? <p className="text-success">Free</p> : <p className="text-danger">Besy</p>}
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => freeButton(item._id, 'free')}>free </button> <br /> <br />
                            <button className="btn btn-primary" onClick={() => freeButton(item._id, 'busy')}>besy</button>
                        </div>
                    </div>)
                }
            </Row>
        </Container>
    );
};

export default Dashboard1;
