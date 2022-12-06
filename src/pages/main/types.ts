export interface Root {
  product_rank: number
  product_image_url: string
  product_title: string
  product_top_keywords: string[]
  product_top_review: ProductTopReview
  product_purchase_link: string
  product_star_count: number
  product_review_count: number
  product_price: string
  product_exlusion_price: string
  product_description: string
  rankings_product_list: RankingsProductList[]
  review_data: ReviewDaum[]
  neutral_review_list: NeutralReviewList[]
  related_product_list: RelatedProductList[]
}

export interface ProductTopReview {
  text: string
  bold_index: number[][]
}

export interface RankingsProductList {
  product_rank: number
  product_image_url: string
  product_title: string
  product_price: string
  is_prime: boolean
  star_count: number
  review_count: number
  product_purchase_link: string
}

export interface ReviewDaum {
  hover_review_headline: string
  hover_review_body: string
  hover_star_count: number
  x: number
  y: number
  z: number
  color: number[]
  hover_review_name: string
}

export interface NeutralReviewList {
  review_name: string
  star_count: number
  review_text: string
  bold_index: number[][]
}

export interface RelatedProductList {
  product_rank: number
  product_image_url: string
  product_title: string
  product_price: string
  is_prime: boolean
  star_count: number
  review_count: number
  product_purchase_link: string
}
