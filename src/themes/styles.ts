import { StyleSheet, } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    alignRow: {
        flexDirection: 'row',
    },
    alignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    alignSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    padding15: {
        padding: 15
    },
    paddingHorizontal10: {
        paddingHorizontal: 10
    },
    paddingHorizontal15: {
        paddingHorizontal: 15
    },
    paddingVertical10: {
        paddingVertical: 10
    },
    paddingVertical5: {
        paddingVertical: 5
    },
    marginTop10: {
        marginTop: 10
    },
    marginTop20: {
        marginTop: 20
    },
    marginBottom20: {
        marginBottom: 20
    },
    marginBottom10: {
        marginBottom: 10
    },
    right10: {
        marginRight: 10
    },
});

export default styles;