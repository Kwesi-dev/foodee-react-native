import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyledTextInput, StyledView } from '../components/styledComponents/StyledComponents'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <StyledView>
        <KeyboardAvoidingView>
            <StyledTextInput placeholder="email address" value={email} onChangeText={(newText) => setEmail(newText)}/>
            <StyledTextInput  autoCorrect={false} secureTextEntry={true} textContentType="password" value={password} onChangeText={(newText) => setPassword(newText)}/>
        </KeyboardAvoidingView>
    </StyledView>
  )
}

export default Login