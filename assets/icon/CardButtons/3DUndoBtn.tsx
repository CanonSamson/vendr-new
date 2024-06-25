import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import UndoBtn2 from "@/assets/icon/CardButtons/UndoBtn2";

const CardButtons = () => {
    return (
        <TouchableOpacity style={styles.outerCircle}>
            <View style={styles.shadow}>
                <View style={styles.innerCircle}>
                    <UndoBtn2 width={84} height={84} style={styles.icon} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outerCircle: {
        width: 49,
        height: 49, 
        borderRadius: 50,
        overflow: 'visible', // Remove overflow hidden to allow icons to extend outside
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDC48',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 8,
    },
    shadow: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.3,
        elevation: 8,
    },
    innerCircle: {
        width: 39, 
        height: 39, 
        borderRadius: 50,
        overflow: 'hidden', // Remove overflow hidden to allow icons to extend outside
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    icon: {
        position: 'absolute',
        top: -21,
        left: -24,
        width: 84,
        height: 84,
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1,
        elevation: 1,
    }
});

export default CardButtons;
