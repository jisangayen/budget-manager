import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import useExpenses from "../hooks/useExpenses";

export default function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { addExpense } = useExpenses();
  const router = useRouter();

  const handleAdd = () => {
    addExpense(title, amount);
    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" onChangeText={setTitle} />
      <TextInput placeholder="Amount" keyboardType="numeric" onChangeText={setAmount} />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
