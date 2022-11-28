import { Feature, FeatureCollection } from "geojson";
import { v4 as uuidv4 } from "uuid";

export function toGeoJSON(data: any): FeatureCollection {
    const nearbyVacancies: FeatureCollection = {
      type: "FeatureCollection",
      features: [],
    };

    // {
    //     "type": "Feature",
    //     "geometry": {
    //       "type": "Point",
    //       "coordinates": [125.6, 10.1]
    //     },
    //     "properties": {
    //       "name": "Dinagat Islands"
    //     }
    //   }
  
    data.map((elem: any) => {
      const feature: Feature = { // @ts-ignore
        id: uuidv4(),
        type: "Feature" as "Feature", // @ts-ignore
        geometry: {
            type: "Point",
            coordinates: [elem.x, elem.y]
          },
        properties: {
            hover_review_headline: elem.hover_review_headline,
            hover_review_body: elem.hover_review_body,
            hover_star_count: elem.hover_star_count,
            color: elem.color,
            hover_review_name: elem.hover_review_name,
        },
      };
  
      nearbyVacancies.features.push(feature);
  
      return null;
    });
  
    return nearbyVacancies;
  }