import React from 'react';
import { StyleSheet, Text, View, TextInput, InputModeOptions, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type Tprops = {
    title: string,
    errorMsg: string,
    isError: boolean,
    inputMode: InputModeOptions,
    placeholder: string,
    value: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    secureTextEntry?: boolean,
    isRequired?: boolean,
}

function TitleErrorInputBox({title, errorMsg, isError, inputMode, placeholder, value, setInputValue, secureTextEntry, isRequired}: Tprops){
    return (
        <View style={styles.titleErrorInputBoxRoot}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{title} {isRequired ? <Text style={styles.required}>*</Text> : null}</Text>
                {isError ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setInputValue(event.nativeEvent.text)}
                    secureTextEntry={secureTextEntry} 
                    inputMode={inputMode} 
                    style={styles.textInput} 
                    placeholder={placeholder} 
                    placeholderTextColor={'#B3B3B3'}
                    value={value} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleErrorInputBoxRoot: {

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
    },
    errorMsg: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 10,
        fontWeight: '700',
        color: '#FF5252',
    },
    inputContainer:{
        marginTop: 12,
    },
    textInput: {
        borderRadius: 16,
        height: 54,
        padding: 16,
        borderColor: '#E4E4E4',
        borderWidth: 1,
    },
    required: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: '700',
        color: '#1F5FFF',
    },
})

export default TitleErrorInputBox;