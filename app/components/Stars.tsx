// Stars.tsx
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type StarsProps = {
  rating?: number;
  size?: number;
  touchable?: boolean;
  onRatingChange?: (rating: number) => void;
  style?: StyleProp<ViewStyle>;
};

const Stars: React.FC<StarsProps> = ({
  rating = 0,
  size = 100,
  touchable = false,
  onRatingChange,
  style,

}) => {
  const starSize = size / 5;
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const displayRating = touchable ? selectedRating : rating;

  const yellow = '#DAA038';
  const gray = '#D0CECE';

  const handlePress = (index: number) => {
    if (!touchable) return;
    const newRating = index + 1;
    setSelectedRating(newRating);
    onRatingChange?.(newRating);
  };

  const renderStar = (index: number) => {
    let fill = 0;
    if (displayRating >= index + 1) {
      fill = 1;
    } else if (displayRating > index) {
      fill = 0.5;
    }

    let starIcon;
    if (fill === 1) {
      starIcon = <Ionicons name="star" size={starSize} color={yellow} />;
    } else if (fill === 0) {
      starIcon = <Ionicons name="star" size={starSize} color={gray} />;
    } else {
      // ⭐ ครึ่งดาวแบบ overlay (ซ้ายเหลือง, ขวาเทา)
      starIcon = (
        <View style={{ width: starSize, height: starSize }}>
          {/* Gray star as background */}
          <Ionicons
            name="star"
            size={starSize}
            color={gray}
            style={StyleSheet.absoluteFillObject}
          />
          {/* Yellow star clipped to left half */}
          <View
            style={{
              width: starSize / 2,
              height: starSize,
              overflow: 'hidden',
            }}
          >
            <Ionicons name="star" size={starSize} color={yellow} />
          </View>
        </View>
      );
    }

    if (touchable) {
      return (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          {starIcon}
        </TouchableOpacity>
      );
    } else {
      return <View key={index}>{starIcon}</View>;
    }
  };

  return (
    <View
      style={[
        styles.container,
        { width: size, height: starSize },
        style,
      ]}
    >
      {Array.from({ length: 5 }).map((_, index) => renderStar(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Stars;
