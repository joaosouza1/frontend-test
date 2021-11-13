// Reference: https://www.yelp.com/developers/documentation/v3/business_search

export interface YelpError {
  "error"?: {
    "code": string,
    "description": string
  }
}

export interface YelpBusinessSearch extends YelpError {
  "total": number,
  "businesses": YelpBusiness[]
  "region": {
    "center": {
      "latitude": number
      "longitude": number
    }
  }
}

export type YelpBusinessDetail = YelpBusiness & YelpError

export interface YelpBusiness {
  "rating": number,
  "price"?: "$" | "$$" | "$$$" | "$$$$",
  "phone": string,
  "id": string,
  "alias": string,
  "is_closed": boolean,
  "categories": [
    {
      "alias": string,
      "title": string
    }
  ],
  "review_count": number,
  "name": string,
  "url": string,
  "coordinates": {
    "latitude": number,
    "longitude": number
  },
  "image_url": string,
  "location": {
    "city": string,
    "country": string,
    "address2": string,
    "address3": string,
    "state": string,
    "address1": string,
    "zip_code": string
  },
  "distance": number,
  "transactions": "pickup" | "delivery" | "restaurant_reservation"
}

export interface YelpReviewsResponse extends YelpError {
  "reviews": YelpReview[]
  "total": number
  "possible_languages": string[]
}

export interface YelpReview {
  "id": string
  "rating": number
  "user": {
    "id": string
    "profile_url": string
    "image_url": string
    "name": string
  }
  "text": string
  "time_created": string
  "url": string
}

// https://www.yelp.com/developers/documentation/v3/all_categories
export interface YelpCategoriesResponse extends YelpError {
  "categories": YelpCategory[]
}

export interface YelpCategory {
  "alias": string,
  "title": string,
  "parent_aliases": string[],
  "country_whitelist": string[],
  "country_blacklist": string[]
}
