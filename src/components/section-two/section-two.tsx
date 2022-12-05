import React, { useEffect, useState } from "react";
import styles from './section-two.module.css';
import Plotly from 'plotly.js-dist-min'
import { review_data } from './data';
import { StarRating } from "../star-rating";
import { Root } from "../../pages/main/types";
import ReactHtmlParser from 'react-html-parser';
import { Button } from "../button";

interface Props {
    data: Root | null
}

const SectionTwo: React.FC<Props> = ({ data }) => {
    const [hoveredInfo, setHoveredInfo] = useState({
        hover_review_headline: '',
        hover_review_body: '',
        hover_star_count: 0,
        hover_review_name: ''
    });

    useEffect(() => {
        const D = {
            x: [] as number[],
            y: [] as number[],
            z: [] as number[],
            mode: 'markers',
            text: [] as string[],
            marker: {
                color: [] as string[],
                size: 12,
                line: {
                    color: null,
                    width: 2
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };

        data?.review_data.forEach(review => {
            D.x.push(review.x);
            D.y.push(review.y);
            D.z.push(review.z);
            D.text.push(JSON.stringify({
                hover_review_headline: review.hover_review_headline,
                hover_review_body: review.hover_review_body,
                hover_star_count: 3.5,
                hover_review_name: review.hover_review_name
            })) //@ts-ignore
            D.marker.color.push(`rgb(${review.color[0]}, ${review.color[1]}, ${review.color[2]})`)
        })

        const layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            },
            hovermode: false,
        };
        const config = {
            displayModeBar: false
        }

        //@ts-ignore
        Plotly.newPlot('myDiv', [D], layout, config).then(r => {
            const myPlot = document.getElementById('myDiv') as any;
            myPlot.on('plotly_hover', function (data: any) {
                setHoveredInfo(JSON.parse(data.points[0].text))
            });
        });
    }, [data])

    return (
        <section className={styles.sectionTwo}>
            <div id='myDiv' className={styles.scatterContainer}></div>
            <div className={styles.desktopContainer}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{hoveredInfo.hover_review_name}</h1>
                    <p className={styles.text}>{ReactHtmlParser(hoveredInfo.hover_review_body)}</p>
                    <StarRating rating={hoveredInfo.hover_star_count} />
                </div>
                <div className={styles.buttonWrapper}>
                    <a href={data?.product_purchase_link} target="_blank">
                        <Button />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
