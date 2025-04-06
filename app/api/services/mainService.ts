import {ACCESS_TOKEN_PATH, getBackendClient} from "../grpcClient";

import { UserPreferences } from "../../context/UserPreferencesContext";
import { CreateAccountRequest, GetPreferencesRequest, GetPreferencesResponse, GetStallRequest, SavedItemsRequest, SavedItemsResponse, SavedStallsRequest, SavedStallsResponse, SavePreferencesRequest, SaveProfileRequest, StallItemsRequest } from "../../generated/data/main_pb";
import { ForYouMsg, ForYouProps, GetRecommendationsMsg, InferLikeMsg, InferLikeProps, RecommendationsList, TopMenuProps, TopStallProps } from '../../generated/data/home_pb';
import { Empty } from "../../generated/shared_pb";
import { RpcError } from "grpc-web";
import { DislikeItemMsg, LikeItemMsg, SaveItemMsg, SaveStallMsg } from "../../generated/data/activity_pb";
import { MenuCardProps } from "../../components/MenuCard";
import { MenuCardGridConstructor, MenuCardProps as MP, ReviewCardProps, StallDataTypeProps as SDT } from "../../generated/data/types_pb";
import { TopStallRequest } from "../../generated/data/index_pb";
import { StallCardProps } from "../../components/StallCard";
import { SearchRequest, SearchResponse } from "../../generated/data/search_pb";
import { RatingReviews, Review } from "../reviewApi";
import { ListReviewsRequest, ListReviewsResponse, PostReviewRequest, PostReviewResponse } from "../../generated/data/review_pb";

export const createAccount = (preferences: UserPreferences): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new CreateAccountRequest();
            req.setName(preferences.username);
            req.setRole(preferences.role || "Guest");
            req.setGender(preferences.gender || "Prefer not to say");
            req.setDietaryList(preferences.dietaryPreferences);
            req.setAllergiesList(preferences.allergies);
            req.setCuisinesList(preferences.favoriteCuisines);
            req.setDislikesList(preferences.dislikedIngredients);
            req.setLikesList(preferences.favoriteDishes);

            client.createAccount(req, header, (err: RpcError, _) => {
                if (err) {
                    reject("Error while creating your account");
                }
                resolve()
            });
        },
        (reason) => {
            reject(reason);
        }
    )
});

export const writeToPreferences = (preferences: UserPreferences): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new SavePreferencesRequest();
            req.setDietaryList(preferences.dietaryPreferences);
            req.setAllergiesList(preferences.allergies);
            req.setCuisinesList(preferences.favoriteCuisines);
            req.setDislikesList(preferences.dislikedIngredients);
            req.setLikesList(preferences.favoriteDishes);

            client.savePreferences(req, header, (err: RpcError, _) => {
                if(err) {
                    reject("Error while saving your preferences");
                }
                resolve()
            })
        })
});

export const writeToProfile = (preferences: UserPreferences): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new SaveProfileRequest();
            req.setUsername(preferences.username);
            req.setRole(preferences.role || "Guest");
            req.setGender(preferences.gender || "Prefer not to say");

            client.saveProfile(req, header, (err: RpcError, _) => {
                if(err) {
                    reject("Error while saving your profile");
                }
                resolve()
            })
        })
});

export const submitLikeItem = (menu: string): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new LikeItemMsg();
            req.setItemId(menu);
            client.likeItem(req, header);
        }
    )
});

export const submitDislikeItem = (menu: string): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new DislikeItemMsg();
            req.setItemId(menu);
            client.dislikeItem(req, header);
        }
    )
});

export const submitSaveItem = (menu: string): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new SaveItemMsg();
            req.setItemId(menu);
            client.saveItem(req, header);
        }
    )
});

export const submitSaveStall = (stall: string): Promise<void> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new SaveStallMsg();
            req.setItemId(stall);
            client.saveStall(req, header);
        }
    )
});

const menuCardPropsFactory = (lst: Array<MP>): MenuCardProps[] => {
    return lst.map<MenuCardProps>(
        (item): MenuCardProps => {
            return {
                id: item.getUuid(),
                name: item.getName(),
                price: item.getPrice().toString(),
                likes: item.getLikes(),
                dislikes: item.getDislikes(),
                stallId: item.getStallId(),
                stallName: item.getStallName(),
                stallLock: item.getStallLock(),
                imageUrl: item.getImageUrl(),
                score: item.getScore(),
                reason: item.getReason(),
                liked: item.getLiked(),
                disliked: item.getDisliked(),
                saved: item.getSaved()
            }
        }
    )
}

const stallCardPropsFactory = (lst: Array<SDT>): StallCardProps[] => {
    return lst.map<StallCardProps>(
        (item): StallCardProps => {
            return {
                id: item.getUuid(),
                rank: item.getRank(),
                stallName: item.getName(),
                imageUrl: item.getImageUrl(),
                location: item.getLocation(),
                operatingHours: item.getOperatinghours(),
                priceRange: item.getPricerange(),
                tags: item.getTags(),
                reviews: item.getReviews(),
                likes: item.getLikes(),
                rating: item.getRating(),
                saved: item.getSaved()
            }
        }
    )
}

export const getHomeTopLikeMenu = (): Promise<MenuCardProps[]> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new Empty();

            client.homeTopMenu(req, header, (err: RpcError, resp: TopMenuProps) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getProps()?.getMenusList() === undefined) resolve([]);
                resolve(menuCardPropsFactory(resp.getProps()?.getMenusList()!));
            })
        },
        (e) => {
            reject(e);
        }
    )
});

export const getHomeForYou = (): Promise<MenuCardProps[]> => new Promise((resolve, reject) => {

    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new ForYouMsg();

            client.homeForYou(req, header, (err: RpcError, resp: ForYouProps) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getProps()?.getMenusList() === undefined) resolve([]);
                resolve(menuCardPropsFactory(resp.getProps()?.getMenusList()!));
            })
        },
        (e) => {
            reject(e);
        }
    )
});

export const getBecauseYouLike = (word: string): Promise<MenuCardProps[]> => new Promise((resolve, reject) => {
    if (word == "") {
        resolve([]); // TODO: Work on adding preferences context to home page so we can choose word.
    }
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new InferLikeMsg();
            req.setWord(word);

            client.homeInferLike(req, header, (err: RpcError, resp: InferLikeProps) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getProps()?.getMenusList() === undefined) resolve([]);
                resolve(menuCardPropsFactory(resp.getProps()?.getMenusList()!));
            })
        },
        (e) => {
            reject(e);
        }
    )
});

export const getHomeTopStall = (): Promise<StallCardProps[]> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new TopStallRequest();

            client.homeTopStall(req, header, (err: RpcError, resp: TopStallProps) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getProps()?.getDataList() === undefined) resolve([]);
                resolve(stallCardPropsFactory(resp.getProps()?.getDataList()!));
            })
        },
        (e) => {
            reject(e);
        }
    )
});

export const firstRecommends = (): Promise<{menus: MenuCardProps[], nextPageToken: string, scoreToken: string}> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new GetRecommendationsMsg();

            client.homeGetRecommendations(req, header, (err: RpcError, resp: RecommendationsList) => {
                if (err) {
                    console.error(err.message);
                    resolve({
                        menus: [],
                        nextPageToken: "",
                        scoreToken: ""
                    });
                }
                if (resp.getMenuList() === undefined) resolve({
                    menus: [],
                    nextPageToken: "",
                    scoreToken: ""
                });
                resolve({
                    menus: menuCardPropsFactory(resp.getMenuList()),
                    nextPageToken: resp.getNextIndexToken(),
                    scoreToken: resp.getScoreToken()
                });
            });
    })
});

export const moreRecommendations = (nextPage: string, score: string): Promise<{menus: MenuCardProps[], nextPageToken: string, scoreToken: string}> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new GetRecommendationsMsg();
            req.setIndexToken(nextPage);
            if (score != "") {
                req.setScoreToken(score)
            };

            client.homeGetRecommendations(req, header, (err: RpcError, resp: RecommendationsList) => {
                if (err) {
                    resolve({
                        menus: [],
                        nextPageToken: "",
                        scoreToken: ""
                    });
                }
                if (resp.getMenuList() === undefined) resolve({
                    menus: [],
                    nextPageToken: "",
                    scoreToken: ""
                });
                resolve({
                    menus: menuCardPropsFactory(resp.getMenuList()),
                    nextPageToken: resp.getNextIndexToken(),
                    scoreToken: resp.getScoreToken()
                });
            });
    })
});

export const getStallDetail = (id: string): Promise<StallCardProps> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new GetStallRequest()
            req.setStallId(id);
            client.getStall(req, header, (err: RpcError, item: SDT) => {
                if (err) {
                    console.error(err);
                    reject("Cannot get stall detail");
                }
                resolve({
                    id: item.getUuid(),
                    rank: item.getRank(),
                    stallName: item.getName(),
                    imageUrl: item.getImageUrl(),
                    location: item.getLocation(),
                    operatingHours: item.getOperatinghours(),
                    priceRange: item.getPricerange(),
                    tags: item.getTags(),
                    reviews: item.getReviews(),
                    likes: item.getLikes(),
                    rating: item.getRating(),
                    saved: item.getSaved()
                })
            })
        }
    )
});

export const getUserPreference = (): Promise<UserPreferences> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new GetPreferencesRequest();

            client.getPreferences(req, header, (err: RpcError, resp: GetPreferencesResponse) => {
                if (err) {
                    console.error(err);
                    reject("Cannot get user preferences");
                }
                resolve({
                    userID: resp.getUserId(),
                    gmail: resp.getEmail(),
                    username: resp.getUsername(),
                    role: resp.getRole(),
                    gender: resp.getGender(),
                    dietaryPreferences: resp.getDietaryList(),
                    allergies: resp.getAllergiesList(),
                    favoriteCuisines: resp.getCuisinesList(),
                    dislikedIngredients: resp.getDislikesList(),
                    favoriteDishes: resp.getLikesList()
                })
            });
        });
});

export const getMenuOfStall = (id: string): Promise<MenuCardProps[]> => new Promise((resolve, reject) => {

    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new StallItemsRequest();
            req.setStallId(id);

            client.stallItems(req, header, (err: RpcError, resp: MenuCardGridConstructor) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getDataList() === undefined) resolve([]);
                resolve(menuCardPropsFactory(resp.getDataList()));
            })
        },
        (e) => {
            reject(e);
        }
    )
});

export const getSavedItems = (): Promise<MenuCardProps[]> => new Promise((resolve, reject) => {

    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new SavedItemsRequest();

            client.savedItems(req, header, (err: RpcError, resp: SavedItemsResponse) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getMenusList() === undefined) resolve([]);
                resolve(menuCardPropsFactory(resp.getMenusList()));
            })
        },
        (e) => {
            reject(e);
        }
    )

});

export const getSavedStalls = (): Promise<StallCardProps[]> => new Promise((resolve, reject) => {

    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;

            const req = new SavedStallsRequest();

            client.savedStalls(req, header, (err: RpcError, resp: SavedStallsResponse) => {
                if (err) {
                    console.error(err.message);
                    resolve([]);
                }
                if (resp.getStallsList() === undefined) resolve([]);
                resolve(stallCardPropsFactory(resp.getStallsList()));
            })
        },
        (e) => {
            reject(e);
        }
    )

});

export const performSearch = (query: string): Promise<{
    menus: MenuCardProps[],
    stalls: StallCardProps[]
}> => new Promise((resolve, reject) => {

    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new SearchRequest();
            req.setQuery(query);

            client.search(req, header, (err: RpcError, resp: SearchResponse) => {
                if (err) {
                    console.error(err.message);
                    resolve({
                        menus: [],
                        stalls: []
                    });
                }

                let menu: MenuCardProps[] = [];
                let stall: StallCardProps[] = [];

                if (resp.getMenusList()) {
                    menu = menuCardPropsFactory(resp.getMenusList());
                }

                if (resp.getStallsList()) {
                    stall = stallCardPropsFactory(resp.getStallsList());
                    
                resolve({
                    menus: menu,
                    stalls: stall
                });
            }
            });
        }
    )

});

export const getReviews = (stall: string): Promise<
    RatingReviews
> => new Promise((resolve, reject) => {

    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new ListReviewsRequest();
            req.setStallId(stall);
            req.setPageSize(10);

            client.listReviews(req, header, (err: RpcError, resp: ListReviewsResponse) => {
                if (err) {
                    console.error(err.message);
                    reject("Cannot retrieve said resource");
                }
                resolve(
                    {
                        stallID: resp.getStallId(),
                        stallName: resp.getStallName(),
                        ratingSummary: {
                            avgStallRating: resp.getRatingSummary()!.getAvgStallRating(),
                            totalReviews: resp.getRatingSummary()!.getTotalReviews(),
                            totalLikes: resp.getRatingSummary()!.getTotalLikes(),
                            totalLoved: resp.getRatingSummary()!.getTotalMenuSaved(),
                            totalSaved: resp.getRatingSummary()!.getTotalStallSaved(),
                            byStars: {
                                five: {
                                    total: resp.getRatingSummary()!.getByStars()!.getFive()!.getTotal(),
                                    percent: resp.getRatingSummary()!.getByStars()!.getFive()!.getPercent(),
                                },
                                four: {
                                    total: resp.getRatingSummary()!.getByStars()!.getFour()!.getTotal(),
                                    percent: resp.getRatingSummary()!.getByStars()!.getFour()!.getPercent(),
                                },
                                three: {
                                    total: resp.getRatingSummary()!.getByStars()!.getThree()!.getTotal(),
                                    percent: resp.getRatingSummary()!.getByStars()!.getThree()!.getPercent(),
                                },
                                two: {
                                    total: resp.getRatingSummary()!.getByStars()!.getTwo()!.getTotal(),
                                    percent: resp.getRatingSummary()!.getByStars()!.getTwo()!.getPercent(),
                                },
                                one: {
                                    total: resp.getRatingSummary()!.getByStars()!.getOne()!.getTotal(),
                                    percent: resp.getRatingSummary()!.getByStars()!.getOne()!.getPercent(),
                                }
                            }
                        },
                        reviews: reviewFactory(resp.getReviewsList())
                    }
                )
            });
        }
    )
});

const reviewFactory = (lst: Array<ReviewCardProps>): Review[] => {
    return lst.map<Review>((review): Review => {
        return {
            name: review.getUsername(),
            role: review.getRole(),
            gender: review.getGender(),
            date: review.getCreatedAt(),
            stars: review.getStars(),
            content: review.getContent(),
            recommendMenus: []
        }
    });
};

export const sendReview = (
    stall: string,
    rating: number,
    comment: string
): Promise<
    Review
> => new Promise((resolve, reject) => {
    getBackendClient().then(
        (obj) => {
            const { client, header } = obj;
            const req = new PostReviewRequest();
            req.setStallId(stall);
            req.setRating(rating);
            req.setContent(comment);

            client.postReview(req, header, (err: RpcError, resp: PostReviewResponse) => {
                if (err) {
                    console.error(err.message);
                    reject("Error while posting review");
                }
                const props = resp.getReview()!;
                resolve(
                    {
                        name: props.getUsername(),
                        role: props.getRole(),
                        gender: props.getGender(),
                        date: props.getCreatedAt(),
                        stars: props.getStars(),
                        content: props.getContent(),
                        recommendMenus: []
                    }
                );
            });
        }
    )
});