import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../themes/styles';
import style from './style';

interface State {

}

const contacts = ['Cao Minh', 'Đỗ Chiến', 'Chiến Dũng', 'Đăng Khoa', 'Đắc Danh', 'Huy Hoàng'];

const Contact = () => {
    return (
        <SafeAreaView style={[styles.container, styles.padding15]}>
            <StatusBar barStyle={'dark-content'} />
            <FlatList
                data={contacts}
                keyExtractor={(item, key) => `${key}`}
                ItemSeparatorComponent={() => <View style={[style.separator]} />}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.paddingVertical5}>
                            <Text style={style.text16Black}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Text>ABDADMBSADBNAS</Text>
        </SafeAreaView>
    )
}

export default Contact;
