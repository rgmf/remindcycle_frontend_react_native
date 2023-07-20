import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({children, to}: any) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [
    styles.text,
    active && styles.active
  ];

  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <AppBarTab to='/'>Tasks</AppBarTab>
        <AppBarTab to='/signin'>SignIn</AppBarTab>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
});

export default AppBar;