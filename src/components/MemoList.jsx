import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from './Icon';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022年2月22日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022年2月22日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022年2月22日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
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
