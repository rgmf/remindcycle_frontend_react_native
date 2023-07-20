import { StyleSheet, TextInput } from "react-native";

const StyledTextInput = ({ style = {}, ...props }: any) => {
    const inputStyle = {
      ...styles.textInput,
      ...style
    };

    return <TextInput style={inputStyle} {...props} />
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWith: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: {
    borderColor: 'red'
  }
});

export default StyledTextInput;