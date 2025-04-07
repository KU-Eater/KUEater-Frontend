// components/StallCardList.tsx

import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import StallCard from './StallCard';

type StallDataType = {
    id: number;
    rank: number;
    stallName: string;
    imageUrl: string;
    location: string;
    operatingHours: string;
    priceRange: string;
    tags: string;
    reviews: number;
    likes: number;
    rating: number;
};

interface StallCardListProps {
    data: StallDataType[];
    scrollEnabled?: boolean;
    title?: string;
    customTitleComponent?: React.ReactNode;
}

const StallCardList: React.FC<StallCardListProps> = ({
    data,
    title,
    customTitleComponent,
}) => {
    return (
        <ScrollView>
        <View style={styles.section}>
            {/* Title */}
            {customTitleComponent ? (
                customTitleComponent
            ) : title ? (
                <Text style={styles.sectionTitle}>{title}</Text>
            ) : null}
           
                {/* Stall list */}
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <StallCard
                            rank={item.rank}
                            stallName={item.stallName}
                            imageUrl={item.imageUrl}
                            location={item.location}
                            operatingHours={item.operatingHours}
                            priceRange={item.priceRange}
                            tags={item.tags}
                            reviews={item.reviews}
                            likes={item.likes}
                            rating={item.rating}
                        />
                    )}
                    style={{ flexGrow: 1 }}
                    contentContainerStyle={[styles.listContent, { flexGrow: 1 }]}
                />
            
        </View>
        </ScrollView>
    );
};

export default StallCardList;

const styles = StyleSheet.create({
    section: {
        marginTop: 4,
        backgroundColor: '#FAF5F0',
        paddingBottom: 6,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
        color: '#006664',
        marginTop: 16,
        marginHorizontal: 16,
    },
    listContent: {
        paddingTop: 5,
        paddingBottom: 6,
        paddingHorizontal: 4,
    },
});
