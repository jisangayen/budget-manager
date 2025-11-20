import { View, Text } from "react-native";

export default function ExpenseCard({ item }) {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "#f5f5f5",
        marginVertical: 8,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Text style={{ fontSize: 16 }}>₹{item.amount}</Text>
    </View>
  );
}
