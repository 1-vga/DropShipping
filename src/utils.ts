import { Feature, FeatureCollection } from "geojson";
import { v4 as uuidv4 } from "uuid";

export function toGeoJSON(data: any): FeatureCollection {
    const nearbyVacancies: FeatureCollection = {
      type: "FeatureCollection",
      features: [],
    };
  
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

export const makeBold = (strings: string, bold_index: any[]) => {
    const sentences = strings.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/gm);
    
    sentences.forEach((sentence, i) => {
      const words = sentence.split(' ');
      const sentenceBoldIndexes = bold_index[i];

      if(sentenceBoldIndexes) {
        words.splice(sentenceBoldIndexes[0], 0, '<strong>');
        words.splice(sentenceBoldIndexes[1] + 2, 0, '</strong>');
      }      
      sentences[i] = words.join(' ');
    })

    return sentences.join(' ');
}

export default function isScrolledIntoView (el: Element, { offset = 0, full = false } = {}) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  if (full) {
      // Only completely visible elements return true:
      return (elemTop >= 0) && (elemBottom <= window.innerHeight);
  } else {
      // Partially visible elements return true:
      return elemTop + offset < window.innerHeight && elemBottom >= 0;
  }
}

