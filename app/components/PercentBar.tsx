// PercentBar.tsx
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type PercentBarProps = {
  percent: number; // 0–100
  width?: number; // ความกว้างรวม
  height?: number; // optional, ความสูงของ bar
  style?: StyleProp<ViewStyle>; // custom style เพิ่มเติม
};

const PercentBar: React.FC<PercentBarProps> = ({
  percent,
  width = 200,
  height = 20,
  style,
}) => {
  const safePercent = Math.max(0, Math.min(percent, 100)); // clamp 0-100

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius: height / 2,
          backgroundColor: '#EAEAEA',
        },
        style,
      ]}
    >
      <View
        style={{
          width: `${safePercent}%`,
          height: '100%',
          backgroundColor: '#CC8800',
          borderRadius: height / 2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default PercentBar;
