// FooterPurchase.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import CheckBox from '../Item/CheckBox';

export default function FooterPurchase() {
  // Giả sử bạn có một state hoặc prop để lưu trữ tổng số tiền
  const totalPrice = '20$'; // Thay thế bằng giá trị thực tế từ state/props

  return (
    <View style={styles.container}>
      <CheckBox/>
      <Text style={styles.selectAllText}>Select all</Text>
      <Text style={styles.totalPrice}>Total payment: {totalPrice}</Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Purchase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Sắp xếp các phần tử con theo hàng ngang
    justifyContent: 'space-between', // Cách đều các phần tử
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    width: "100%",
    padding: 10, // Thêm padding để không gian trở nên rộng rãi hơn
  },
  selectAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectAllText: {
    marginLeft: 8,
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#20A090',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
