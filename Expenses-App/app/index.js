import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import ExpenseCard from "../components/ExpenseCard";
import useExpenses from "../hooks/useExpenses";

export default function Home() {
  const { expenses, total } = useExpenses();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Total: ₹{total}
      </Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseCard item={item} />}
      />

      <Link href="/add-expense">
        <Text style={{ fontSize: 32, textAlign: "center" }}>➕</Text>
      </Link>
    </View>
  );
}
