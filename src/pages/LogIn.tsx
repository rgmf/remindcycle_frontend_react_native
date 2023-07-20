import { Formik, useField } from "formik";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
  email: '',
  password: ''
}

const FormikInputValue = ({ name, ...props }: any) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value: any) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
}

const LogIn = () => {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => {
        return <View style={styles.form}>
          <FormikInputValue
            name='email'
            placeholder='E-mail'
          />
          <FormikInputValue
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <Button onPress={handleSubmit} title='Log In' />
        </View>
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
});

export default LogIn;