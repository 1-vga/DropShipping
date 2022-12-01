import React, { useEffect, useState } from "react";
import styles from './section-two.module.css';
import Plotly from 'plotly.js-dist-min'
import { review_data } from './data';
import { StarRating } from "../star-rating";

interface Props {
}

const SectionTwo: React.FC<Props> = (props) => {
    const [hoveredInfo, setHoveredInfo] = useState({
        hover_review_headline: '',
        hover_review_body: '',
        hover_star_count: 0,
        hover_review_name: ''
    });

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

    review_data.forEach(review => {
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

    const reviews = review_data.map(review => {
        return {
            x: [review.x], y: [review.y], z: [review.z],
            mode: 'markers',
            customdata: {
                "hover_review_headline": review.hover_review_headline,
                "hover_review_body": review.hover_review_body,
                "hover_star_count": review.hover_star_count,
                "hover_review_name": review.hover_review_name
            },
            marker: {
                color: review.color,
                size: 12,
                line: {
                    color: 'black',
                    width: 2
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        }
    })

    const d1 = {
        x: [-0.36595743894577026], 
        y: [-0.24895744025707245], 
        z: [0.16074533760547638],
        mode: 'markers',
        customdata: {
            "hover_review_headline": "Good Deal",
            "hover_review_body": "It was just what I was looking for. It's not a Bose but for the price it has a lot better sound then the ones I was looking at in Best Buy in its class. Small but mighty.  I use it in the kitchen and the basmentand in the yard.  Love it. Worth the $59 .",
            "hover_star_count": 5,
            "hover_review_name": "woozy-seashell-hornet"
        },
        marker: {
            color: 'red',
            size: 12,
            line: {
                color: 'red',
                width: 2
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    }

    const d2 = {
        x: [-0.2127450555562973], 
        y: [-0.11527466028928757], 
        z: [0.2792665362358093],
        mode: 'markers',
        customdata: {
            hover_review_headline: "Well Worth the Money",
            hover_review_body: "Everything good you have read about this radio is true. It has excellent audio, is sturdily built, and is very sensitive to AM signals, making it a good radio for MW DXing. My only quibbles with it are that the dial scale is really off (about 200 KHz) and it picks up local noise more than my other radios. I have taken to marking the dial scale with a small black marker to indicate true tuning, and I  turn off the TV set when I use this radio. I don't have to do that with my other radios.<br /><br />But all things considered, this is a very good looking radio that is well worth the price.",
            hover_star_count: 3.5,
            hover_review_name: "shaky-sepia-shrimp"
        },
        marker: {
            color: 'yellow',
            size: 12,
            line: {
                color: 'yellow',
                width: 2
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    }

    useEffect(() => {
        const data = [D]; // [...reviews]
        const layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            },
            hovermode: false,
        };
        const  config = {
            displayModeBar: false
        }

        //@ts-ignore
        Plotly.newPlot('myDiv', data, layout, config).then(r => {
            const myPlot = document.getElementById('myDiv') as any;
            myPlot.on('plotly_hover', function(data: any) {
                // setHoveredInfo(data.points[0].data.customdata);
                setHoveredInfo(JSON.parse(data.points[0].text))
            });
        });
    }, [])

    return (
        <section className={styles.sectionTwo}>
            <div id='myDiv' className={styles.scatterContainer}></div>
            <div className={styles.info}>
                <h1 className={styles.title}>{hoveredInfo.hover_review_name}</h1>
                <p className={styles.text}>{hoveredInfo.hover_review_body}</p>
                <StarRating rating={hoveredInfo.hover_star_count}/>
            </div>
        </section>
    );
};

export default SectionTwo;
