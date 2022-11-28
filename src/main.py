from fastapi import Body, FastAPI
import uvicorn

app = FastAPI()
"""

Screen 1
produt_rank
product_image_url
product_title
product_top_keywords
product_top_review
product_purchase_link
product_star_count
product_review_count
product_price
product_exlusion_price

Screen 2
product_description
rankings_product_list

Screen 3
review_html
hover_review_name
hover_star_count
hover_review_text

Screen 4
product_purchase_link
neutral_review_list

Screen 5
related_product_list

"""
#create a test api for development that returns the data
@app.post("/product_data/")
async def create_product_details(product_data: dict):
    print(product_data['product_name'])
    #load positive_map.html from disk
    with open('positive_map.html', 'r') as f:
        positive_map = f.read()
    
    return {
            "product_rank": 1, 
        "product_image_url": "https://m.media-amazon.com/images/I/91RmQzKenOL._AC_SX679_.jpg", 
        "product_title": "Apple iPhone 11 (64GB) - Black",
        "product_top_keywords": ["Apple", "iPhone", "11", "64GB", "Black"],
        "product_top_review": //only here 
            {
            "text": "This product is amazing. It completely changed my life and helped me accomplish all of my dreams", 
            "bold_index": [(0, 2), (9, 10)]
            },
        "product_purchase_link": "https://www.amazon.com/",
        "product_star_count": 4.5,
        "product_review_count": 1000,
        "product_price": "$13.99",
        "product_exlusion_price": "$17.99",
        "product_description": "This product is amazing. It completely changed my life and helped me accomplish all of my dreams. This product is amazing. It completely changed my life and helped me accomplish all of my dreams. This product is amazing. It completely changed my life and helped me accomplish all of my dreams. This product is amazing. It completely changed my life and helped me accomplish all of my dreams",
        "rankings_product_list": [
            {
                "product_rank": 2,
                "product_image_url": "https://m.media-amazon.com/images/I/91RmQzKenOL._AC_SX679_.jpg",
                "product_title": "Apple iPhone 11 (64GB) - Black",
                "product_price": "$13.99",
                "is_prime": True,
                "star_count": 4.5,
                "review_count": 1000,
                "product_purchase_link": "https://www.amazon.com/",

            },
            {
                "product_rank": 3,
                "product_image_url": "https://m.media-amazon.com/images/I/91RmQzKenOL._AC_SX679_.jpg",
                "product_title": "Apple iPhone 13 (64GB) - Black",
                "product_price": "$14.99",
                "is_prime": False,
                "star_count": 4.5,
                "review_count": 1000,
                "product_purchase_link": "https://www.amazon.com/",
            }
        ],
        "review_html": positive_map,
        "hover_review_name": "John Doe",
        "hover_star_count": 4.5,
        "hover_review_text": "This product is amazing. It completely changed my life and helped me accomplish all of my dreams",
        "neutral_review_list": [
            {
                "review_name": "John Doe",
                "star_count": 4.5,
                "review_text": "This product is amazing. It completely changed my life and helped me accomplish all of my dreams", // balded here
                "bold_index": [(0, 2), (9, 10)]
            },
            {
                "review_name": "John Boe",
                "star_count": 3.5,
                "review_text": "This product is amazing. It completely changed my life and helped me accomplish all of my dreams",
                "bold_index": [(0, 5), (9, 10)],
            }
        ],
        "related_product_list": [
            
            {
                "product_rank": 1,
                "product_image_url": "https://m.media-amazon.com/images/I/91RmQzKenOL._AC_SX679_.jpg",
                "product_title": "Apple iPhone 11 (64GB) - Black",
                "product_price": "$113.99",
                "is_prime": True,
                "star_count": 4.5,
                "review_count": 1000,
                "product_purchase_link": "https://www.amazon.com/",
            },
            {
                "product_rank": 1,
                "product_image_url": "https://m.media-amazon.com/images/I/91RmQzKenOL._AC_SX679_.jpg",
                "product_title": "Apple iPhone 13 (64GB) - Black",
                "product_price": "$114.99",
                "is_prime": False,
                "star_count": 4.5,
                "review_count": 1000,
                "product_purchase_link": "https://www.amazon.com/",
            }
        ]
    }








    
if __name__ == "__main__":
    uvicorn.run('main:app', host="0.0.0.0", port=8080, reload=True)
    