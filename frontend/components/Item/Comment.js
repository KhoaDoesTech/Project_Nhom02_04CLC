import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export default function Comment(props) {
  return (
    <SafeAreaView>
        <SafeAreaView style={[styles.rowContainer, {marginBottom: 0}]}>
            <Text style={styles.userName}>Anonymous guest:</Text>
        </SafeAreaView>
        <Text style={styles.reviewContent}>{props.content}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
  },
  userName: {
      fontSize: 16,
      fontWeight: '600',
  },
  reviewContent: {
      fontSize: 16,
      marginBottom: 10
  }
});
