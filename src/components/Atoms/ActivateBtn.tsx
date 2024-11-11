import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import { SvgProps } from 'react-native-svg';

type Tprops = {
    text: string;
    DefaultIcon: React.FC<SvgProps>;
    ActivateIcon: React.FC<SvgProps>;
    isActive: boolean;
    onPressHandler: (event: GestureResponderEvent) => void;
}

function ActivateBtn({text, DefaultIcon, ActivateIcon, isActive, onPressHandler}: Tprops){

    return (
        <Pressable onPress={onPressHandler}>
            <View style={!isActive ? styles.defaltBtnRoot : styles.activeBtnRoot}>
                {!isActive ? 
                    <DefaultIcon />
                : 
                    <ActivateIcon />
                }
                <Text style={!isActive ? styles.defaultText : styles.activeText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    defaltBtnRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 12,
        paddingVertical: 8,
        height: 40,
        borderRadius: 16,
        backgroundColor: '#F4F4F4',
    },
    activeBtnRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 12,
        paddingVertical: 8,
        height: 40,
        borderRadius: 16,
        backgroundColor: '#1F5FFF',
    },
    activeText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    defaultText: {
        fontFamily: 'NanumSquareRoundEB',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
})

export default ActivateBtn;