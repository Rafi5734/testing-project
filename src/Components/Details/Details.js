import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Details = () => {
    const [newData, setData] = useState({});

    useEffect(() => {
        fetch("./products.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);

    const { name, detailsId } = useParams();

    const findData = newData.find((p) => p.id === detailsId);
    console.log(findData);

    return (
        <div>
            {/* {newData.find((n) => n.id === detailsId)} */}
            <p>{name}</p>
            <h1>I am from details.{detailsId}</h1>
        </div>
    );
};

export default Details;
