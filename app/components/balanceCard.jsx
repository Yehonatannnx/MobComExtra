import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSQLiteContext } from "expo-sqlite";


const balanceCard = () => {
  const db = useSQLiteContext();

  const getBalanceForUser = async () => {
    try {
      // Retrieve user session from AsyncStorage
      const userSession = await AsyncStorage.getItem('userSession');
      if (!userSession) {
        console.log('No user session found');
        return null;
      }

      const { user_id } = JSON.parse(userSession);

      // Query the overall balance from the database for the current user
      const userBalance = await db.getFirstAsync(
        'SELECT balance FROM expenses',
        [user_id]
      );

      return userBalance ? userBalance.balance || 0 : 0;
    } catch (error) {
      console.log('Error fetching balance:', error);
      return 0;
    }
  };

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Fetch the balance when the component is mounted
    const fetchBalance = async () => {
      const currentBalance = await getBalanceForUser();
      setBalance(currentBalance);
    };

    fetchBalance();
  }, []);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.label}>Overall Balance</Text>
        <Text style={styles.cash}>Php {balance.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default balanceCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 100,
    backgroundColor: "#588157",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  label: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  cash: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
  },
});
