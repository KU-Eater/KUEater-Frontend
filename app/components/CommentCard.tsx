// CommentCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePicture from './ProfilePicture';
import Stars from './Stars';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Props = {
  username: string;
  role: string;
  gender: string;
  date: string | Date;
  stars: number;
  content: string;
  recommendMenus?: string[];
};

const CommentCard: React.FC<Props> = ({
  username,
  role,
  gender,
  date,
  stars,
  content,
  recommendMenus,
}) => {
  
  let dater = dayjs(date); // eg: Today, 3 days ago, etc.
  const displayDate = dater.fromNow();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <ProfilePicture size={50} role={role} gender={gender} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.inlineStarsAndDate}>
            <Stars rating={stars} size={80} />
            <Text style={styles.date}>{displayDate}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.content}>{content}</Text>

      {recommendMenus && recommendMenus.length > 0 && (
        <Text style={styles.recommend}>
          Recommend menu: {recommendMenus.join(', ')}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: '#00695C',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inlineStarsAndDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
    marginTop: 4,
  },
  date: {
    marginLeft: 8,
    color: '#999',
    fontSize: 12,
  },
  content: {
    color: '#442C0A',
    fontSize: 14,
    lineHeight: 22,
  },
  recommend: {
    fontSize: 13,
    color: '#999',
  },
});

export default CommentCard;
