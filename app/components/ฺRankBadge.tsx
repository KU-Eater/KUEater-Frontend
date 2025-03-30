import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RankBadgeProps {
  rank: number;
  backgroundColor?: string;
  triangleColor?: string;
}

const RankBadge: React.FC<RankBadgeProps> = ({
  rank,
  backgroundColor = '#006664',
  triangleColor = '#006664',
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.badgeBody, { backgroundColor }]}>
        <Text style={styles.topText}>TOP</Text>
        <Text style={styles.rankText}>{rank}</Text>
      </View>
      <View style={[styles.triangle, { borderTopColor: triangleColor }]} />
    </View>
  );
};

export default RankBadge;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    width: 40,
    zIndex: 2,
    alignItems: 'center',
  },
  badgeBody: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 8,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 6,
  },
  rankText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#006664',
  },
});
