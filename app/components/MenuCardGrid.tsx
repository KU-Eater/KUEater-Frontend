// component/MenuCardGrid.tsx
import React from 'react';
import { FlatList, StyleSheet, View, ScrollView, ScrollViewComponent } from 'react-native';
import MenuCard from './MenuCard';

interface MenuItem {
    id: number;
    menuName: string;
    price: string;
    likes: number;
    dislikes: number;
    stallName: string;
    stallLock: string;
    imageUrl: string;
}

interface MenuCardGridProps {
    data: MenuItem[];
    showStallName?: boolean;
    customWidthPercent?: number;
    scrollEnabled?: boolean;
}

const MenuCardGrid: React.FC<MenuCardGridProps> = ({
    data,
    showStallName = true,
    customWidthPercent = 47,
}) => {
    // ✅ เติม null ถ้าเป็นเลขคี่
    const adjustedData: (MenuItem | null)[] =
        data.length % 2 === 1 ? [...data, null] : data;

    return (
        <ScrollView>
            <FlatList
                data={adjustedData}
                keyExtractor={(item, index) =>
                    item ? item.id.toString() : `empty-${index}`
                }
                numColumns={2}
                columnWrapperStyle={styles.menuColumn}
                contentContainerStyle={[styles.listContent, { flexGrow: 1 }]} // <<<
                scrollEnabled={false}
                style={{ flexGrow: 1 }} // <<<

                renderItem={({ item }) =>
                    item ? (
                        <MenuCard
                            menuName={item.menuName}
                            price={item.price}
                            likes={item.likes}
                            dislikes={item.dislikes}
                            stallName={item.stallName}
                            stallLock={item.stallLock}
                            imageUrl={item.imageUrl}
                            showStallName={showStallName}
                            customWidthPercent={customWidthPercent}
                        />

                    ) : (
                        // กรณี null → เว้นว่าง
                        <View style={{ width: `${customWidthPercent}%` }} />
                    )
                }
            />
        </ScrollView>
    );
};

export default MenuCardGrid;

const styles = StyleSheet.create({
    menuColumn: {
        justifyContent: 'space-evenly',
        marginBottom: 8,
    },
    listContent: {
        paddingTop: 8,
        paddingBottom: 16,
    },
});
