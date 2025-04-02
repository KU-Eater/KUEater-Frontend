// mock/reviewApi.ts

export const fetchMockReviewData = async (stallId: number) => {
    // จำลอง delay เหมือน fetch จริง
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    return {
      stallID: stallId,
      stallName: 'Mr. Raw Fried Chicken',
      ratingSummary: {
        avgStallRating: 4.96,
        totalReviews: 119,
        totalLikes: 1678,
        totalLoved: 617,
        totalSaved: 553,
        byStars: {
          five: { total: 90, percent: 75 },
          four: { total: 20, percent: 16.7 },
          three: { total: 5, percent: 4.2 },
          two: { total: 3, percent: 2.5 },
          one: { total: 1, percent: 1.6 },
        },
      },
      reviews: [
        {
          name: 'Anonymous',
          role: 'KU Student',
          gender: 'Perfer not to say',
          date: '2025-03-20T10:00:00Z',
          stars: 5,
          content:
            'fried chicken is crispy outside, juicy inside, and not greasy at all — exactly what I crave for a quick protein boost',
          recommendMenus: ['Deep-fried battered chicken thigh'],
        },
        {
          name: 'Sweetless plsss',
          role: 'KU Student',
          gender: 'Male',
          date: '2025-02-20T10:00:00Z',
          stars: 4,
          content:
            'loved the flavor and texture, but the portion size felt a bit small for the price. Still, definitely one of the better fried chickens around here',
          recommendMenus: [],
        },
        {
            name: 'Proud',
            role: 'KU Student',
            gender: 'Female',
            date: '2025-03-20T10:00:00Z',
            stars: 3,
            content:
              'too oily for me, sorry!',
            recommendMenus: ['pandan juice'],
          },
          {
            name: 'Chicken',
            role: 'Guest',
            gender: 'Male',
            date: '2025-02-20T10:00:00Z',
            stars: 5,
            content:
              'super crispy and flavorful!',
            recommendMenus: [],
          },
      ],
    };
  };
  

// Defines the structure for rating counts by star level
interface StarRating {
  total: number;
  percent: number;
}

// Defines the structure for ratings by star level (1-5)
interface RatingByStars {
  five: StarRating;
  four: StarRating;
  three: StarRating;
  two: StarRating;
  one: StarRating;
}

// Defines the structure for overall rating summary
interface RatingSummary {
  avgStallRating: number;
  totalReviews: number;
  totalLikes: number;
  totalLoved: number;
  totalSaved: number;
  byStars: RatingByStars;
}


// Defines the structure for a single review
export interface Review {
  name: string;
  role: string;
  gender: string;
  date: string;
  stars: number;
  content: string;
  recommendMenus: string[];
}

// Main interface for the stall data
export interface RatingReviews {
  stallID: string;
  stallName: string;
  ratingSummary: RatingSummary;
  reviews: Review[];
}