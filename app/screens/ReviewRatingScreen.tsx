import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Modal,
    ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';
import Stars from '../components/Stars';
import PercentBar from '../components/PercentBar';
import CommentCard from '../components/CommentCard';
import { fetchMockReviewData, RatingReviews } from '../api/reviewApi';
import ReviewModal from '../components/ReviewModal';
import { getReviews, sendReview } from '../api/services/mainService';

type ReviewRatingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ReviewRating'
>;

type RouteParams = {
  stallId: string;
};

const ReviewRatingScreen: React.FC = () => {
    const navigation = useNavigation<ReviewRatingScreenNavigationProp>();
    const route = useRoute();
    const { stallId } = route.params as RouteParams;
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<RatingReviews|undefined>();


    useEffect(() => {
        const loadData = async () => {
            const result = await getReviews(stallId)
            setData(result);
            setLoading(false);
        };
        loadData();
    }, [stallId]);

    if (loading || !data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00695C" />
            </View>
        );
    }

    const { stallName, ratingSummary, reviews } = data;
    const starOrder = ['five', 'four', 'three', 'two', 'one'] as const;



    return (
        <View style={styles.page}>
            {/* 🔒 TopBar Locked */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
                    <Ionicons name="arrow-back" size={24} color="#006664" />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>
                    {stallName}
                </Text>

            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* ⭐ Summary Section */}
                <View style={styles.summaryRow}>
                    <View style={styles.leftSummary}>
                        <Text style={styles.avgScore}>{ratingSummary.avgStallRating.toFixed(2)}</Text>
                        <Stars rating={ratingSummary.avgStallRating} size={100} style={{ marginBottom: 10 }} />
                        <Text style={styles.greenText}>{ratingSummary.totalReviews} Reviews</Text>
                        <Text style={styles.greenText}>{ratingSummary.totalLikes} Total Likes</Text>
                        <Text style={styles.redText}>{ratingSummary.totalLoved} Loved Menu</Text>
                        <Text style={styles.redText}>{ratingSummary.totalSaved} Stall Saved</Text>
                    </View>

                    <View style={styles.rightBars}>
                        {starOrder.map((key, i) => {
                            const star = 5 - i;
                            const { percent } = ratingSummary.byStars[key];
                            return (
                                <View key={star} style={styles.barRow}>
                                    <Stars rating={star} size={70} />
                                    <PercentBar percent={percent} width={120} height={12} />
                                </View>
                            );
                        })}
                    </View>
                </View>

                {/* ✍️ Rating Section */}
                <TouchableOpacity style={styles.reviewBox} onPress={() => setModalVisible(true)}>
                    <Text style={styles.sectionLabel}>Rating and Review</Text>
                    <Text style={styles.sectionStall}>{stallName}</Text>
                    <Stars rating={0} size={200} style={{ gap:10,justifyContent: "center"}}/>
                </TouchableOpacity>

                {/* 🗣️ Comment Section */}
                <Text style={styles.reviewTitle}>Reviews from EATER</Text>
                {reviews.map((r, idx) => (
                    <CommentCard
                        key={idx}
                        username={r.name}
                        role={r.role}
                        gender={r.gender}
                        date={r.date}
                        stars={r.stars}
                        content={r.content}
                        recommendMenus={r.recommendMenus}
                    />
                ))}

                {/* <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalWrapper}>
            <View style={styles.modalBox}>
              <Text style={{ fontSize: 16 }}>✨ Modal for review (coming soon)</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

                <ReviewModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    stallName={stallName}
                    onSubmit={(rating, comment) => {
                        console.log("Rating:", rating);
                        console.log("Comment:", comment);
                        // 🧠 ส่งไป backend ได้ตรงนี้
                        sendReview(stallId, rating, comment)
                        .then((r) => {
                            setData({
                                ...data,
                                reviews: [r, ...data.reviews],
                            }
                            )
                        });
                    }}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 16,
        paddingBottom: 40,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 55,
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        elevation: 2,
    },
    headerLeft: {
        width: 50,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    headerRight: {
        width: 30,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },

    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    leftSummary: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: 14,

    },

    avgScore: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#442C0A',
    },
    starContainer: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#442C0A',
    },
    greenText: {
        color: '#00695C',
        marginTop: 2,
        fontSize: 12,
    },
    redText: {
        color: '#880000',
        marginTop: 2,
        fontSize: 12,
    },
    rightBars: {
        flex: 1.5,
        justifyContent: 'center',
        gap: 18,
    },
    barRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 12,
    },

    reviewBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 30,
        alignItems: 'center',
        marginBottom: 24,
    },
    sectionLabel: {
        fontWeight: 'bold',
        color: '#00695C',
        fontSize: 16,
    },
    sectionStall: {
        fontWeight: 'bold',
        color: '#222',
        fontSize: 18,
        marginBottom: 8,
    },

    reviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00695C',
        marginBottom: 12,
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
    },
});

export default ReviewRatingScreen;
