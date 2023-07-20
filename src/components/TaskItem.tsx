import { Image, StyleSheet, Platform, View } from "react-native"
import StyledText from "./StyledText";
import theme from "../theme";

const TaskItemHeader = ({ title }: any) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2, alignItems: 'center' }}>
      <Image style={styles.image} source={{ uri:  'https://cdn0.iconfinder.com/data/icons/business-finance-vol-14-2/512/69-512.png' }} />
      <StyledText color='primary' fontSize='subheading' fontWeight='bold'>{title}</StyledText>
    </View>
  );
}

const TaskItem = ({ item }: any) => {
  return (
    <View key={item.id} style={styles.container}>
      <TaskItemHeader title={item.title} />
      <StyledText color='secondary' style={styles.language}>{item.appointment}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purple'
    }),
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    margin: 'auto',
    borderRadius: 4
  }
})

export default TaskItem;