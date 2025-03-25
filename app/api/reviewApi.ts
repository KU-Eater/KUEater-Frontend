// mock/reviewApi.ts

export const fetchMockReviewData = async (stallId: number) => {
    // จำลอง delay เหมือน fetch จริง
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    return {
      stallID: stallId,
      stallName: 'Toei Kaew (Beverages)',
      ratingSummary: {
        avgStallRating: 4.92,
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
          gender: 'Female',
          date: '2025-03-20T10:00:00Z',
          stars: 5,
          content:
            'pandan juice are refreshing and unique and natural sweetness make it a perfect thirst quencher',
          recommendMenus: ['pandan juice'],
        },
        {
          name: 'Sweetless plsss',
          role: 'KU Student',
          gender: 'Male',
          date: '2025-02-20T10:00:00Z',
          stars: 3,
          content:
            'It’s disappointing that the drinks at this stall are consistently too sweet. Would be great if they offered sugar level customization.',
          recommendMenus: [],
        },
        {
            name: 'Anonymous',
            role: 'KU Student',
            gender: 'Female',
            date: '2025-03-20T10:00:00Z',
            stars: 5,
            content:
              'pandan juice are refreshing and unique and natural sweetness make it a perfect thirst quencher',
            recommendMenus: ['pandan juice'],
          },
          {
            name: 'Sweetless plsss',
            role: 'KU Student',
            gender: 'Male',
            date: '2025-02-20T10:00:00Z',
            stars: 3,
            content:
              'It’s disappointing that the drinks at this stall are consistently too sweet. Would be great if they offered sugar level customization.',
            recommendMenus: [],
          },
      ],
    };
  };
  