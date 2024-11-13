import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { RatioDefault, RatioActive, ArrowRightGray } from '../../assets/svgs/atoms';

type Tprops = {
    text: string;
    isActive: boolean;
    onPressHandler: () => void;
    option?: {
        renderRequirementText?: boolean,
        renderOptionalText?: boolean,
        isDefaultTextBolder?: boolean;
    },
}

function AgreeTermText({text, isActive, onPressHandler, option}: Tprops){

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.rootContainer}>
                <View style={styles.textContainer}>
                    <View style={{marginRight: 8}}>
                        {
                            !isActive ? 
                            <RatioDefault />
                            : 
                            <RatioActive />
                        }
                    </View>
                    {option && option.renderRequirementText ? <Text style={styles.requirementText}>{'[필수] '}</Text> : null}
                    {option && option.renderOptionalText ? <Text style={styles.requirementText}>{'[선택] '}</Text> : null}
                    <Text style={option && option.isDefaultTextBolder ? styles.defaultBolderText : styles.defaultText}>{text}</Text>
                </View>
                <View>
                    <ArrowRightGray />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    requirementText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 700,
        color: '#1F5FFF',
    },
    optionalText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 700,
        color: '#808080',
    },
    defaultBolderText:{
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 16,
        fontWeight: 700,
        color: '#1F5FFF',
    },
    defaultText: {
        fontFamily: 'NanumSquareRoundB',
        fontSize: 14,
        fontWeight: 700,
        color: '#4D4D4D',
    },
})

export default AgreeTermText;