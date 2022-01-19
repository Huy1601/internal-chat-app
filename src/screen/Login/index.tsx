import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import ASSETS from '../../assets/ASSETS';
import colors from '../../themes/colors';
import styles from '../../themes/styles';
import style from './style';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { isValidEmail, isValidPassword } from '../../utilites/validations';



interface State {
    email: string,
    password: string,
    errorEmail: string,
    errorPassword: string
}


const Login = () => {

    const emailEr = 'email không đúng định dạng';
    const passwordEr = 'email không đúng định dạng';

    const [state, setState] = React.useState<State>({
        email: '',
        password: '',
        errorEmail: '',
        errorPassword: ''
    })
    return (
        <SafeAreaView style={[styles.container, styles.padding15]}>
            <View style={[styles.marginTop10, styles.alignSpace, styles.marginBottom20]}>
                <View style={style.with50}>
                    <Text style={style.title}>Already have an Account?</Text>
                </View>
                <View style={[style.with50]}>
                    <Image
                        source={ASSETS.chatIcon}
                        style={[style.chatIcon, style.itemCenter]}
                    />
                </View>
            </View>
            <View style={styles.marginBottom10}>
                <Text style={style.titleTextInput}>Email:</Text>
                <TextInput
                    placeholder='example@gmail.com'
                    style={style.textInput}
                    value={state.email}
                    onChangeText={(emailInput) => {
                        if (isValidEmail(emailInput) == false) {
                            setState({ ...state, errorEmail: 'email không đúng định dạng' });
                        } else {
                            setState({ ...state, errorEmail: '' });
                        }
                        setState({ ...state, email: emailInput });
                    }}
                />
            </View>
            <View style={styles.marginBottom10}>
                <Text style={style.titleTextInput}>Mật khẩu:</Text>
                <TextInput
                    placeholder='enter your password'
                    style={style.textInput}
                    value={state.password}
                    onChangeText={(passwordInput) => {
                        if (isValidPassword(passwordInput) == false) {
                            setState({ ...state, errorPassword: 'mật khẩu phải có ít nhất 3 ký tự' });
                        } else {
                            setState({ ...state, errorPassword: '' });
                        }
                        setState({ ...state, password: passwordInput })
                    }}
                />
                <Text></Text>
            </View>
            <TouchableOpacity
                style={[style.loginButton, style.top30]}
            >
                <Text style={style.textLoginButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.marginTop20, style.itemCenter]}
            >
                <Text style={style.textRegister}>New user? Register now</Text>
            </TouchableOpacity>
            <View style={[styles.alignCenter, style.top30]}>
                <View style={style.hr} />
                <Text style={style.otherMethods}>Use other methods?</Text>
                <View style={style.hr} />
            </View>
            <View style={[styles.alignCenter, style.itemCenter]}>
                <TouchableOpacity
                    style={styles.right10}
                >
                    <FontAwesome5Icon name='facebook' size={35} color={colors.facebook} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntIcon name='google' size={35} color={colors.google} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login;
