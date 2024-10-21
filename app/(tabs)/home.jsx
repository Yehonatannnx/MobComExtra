import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BalanceCard from "../components/balanceCard";
import IncomeExpenseCard from "../components/incomeExpenseCard";
import Transaction from "../components/transaction";
import AddButton from "../components/addButton";
import DatePicker from "../components/datePicker";

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container1}>
            <DatePicker></DatePicker>
          </View>
          <View style={styles.container}>
            <BalanceCard></BalanceCard>
          </View>
          <View style={styles.container}>
            <IncomeExpenseCard></IncomeExpenseCard>
          </View>

          <View style={styles.container}>
            <Transaction></Transaction>
          </View>
        </ScrollView>

        <AddButton></AddButton>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  container1: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
