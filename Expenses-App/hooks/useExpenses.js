import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadExpenses();
  }, []);

  useEffect(() => {
    const sum = expenses.reduce((acc, x) => acc + Number(x.amount), 0);
    setTotal(sum);
    saveExpenses(expenses);
  }, [expenses]);

  const loadExpenses = async () => {
    const data = await AsyncStorage.getItem("expenses");
    if (data) setExpenses(JSON.parse(data));
  };

  const saveExpenses = async (data) => {
    await AsyncStorage.setItem("expenses", JSON.stringify(data));
  };

  const addExpense = (title, amount) => {
    const newExpense = {
      id: Date.now().toString(),
      title,
      amount,
    };
    setExpenses([...expenses, newExpense]);
  };

  return { expenses, addExpense, total };
}
