import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022年2月22日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#b0b0b0" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022年2月22日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#b0b0b0" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022年2月22日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#b0b0b0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    color: '#484848',
    lineHeight: 16,
  },
});
