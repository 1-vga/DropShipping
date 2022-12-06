import React, { useEffect, useState } from "react";
import { SectionOne } from "../../components/section-one";
import { SectionThree } from "../../components/section-three";
import { SectionTwo } from "../../components/section-two";
import styles from './main.module.css';
import { responseData } from '../../data';
import { Root } from "./types";;

interface Props {
}

const Main: React.FC<Props> = (props) => {
    const [data, setData] = useState<Root | null>(null);
    useEffect(() => {
        try {
            fetch('http://ec2-34-230-59-218.compute-1.amazonaws.com:8080/data/?product_name=hand%20warmers',
            {
                method: 'GET',
                headers: {
                  'Access-Control-Allow-Origin': '*'
                },
              }
        )
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
        } catch (error) {
            console.log(error);
        }
        
        if (responseData) {
            setData(responseData);
        }

    }, [])

    return (
        <div className={styles.main}>
            <SectionOne data={data} />
            <SectionTwo data={data} />
            <SectionThree data={data} />
        </div>
    );
};

export default Main;
