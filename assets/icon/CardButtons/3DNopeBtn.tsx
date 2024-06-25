import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import NopeBtn2 from "@/assets/icon/CardButtons/NopeBtn2";

const CardButtons = () => {
    return (
        <TouchableOpacity style={styles.outerCircle}>
            <View style={styles.innerCircle}>
                <NopeBtn2 width={115} height={115} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outerCircle: {
        width: 67,
        height: 67, 
        borderRadius: 115,
        overflow: 'visible', // Remove overflow hidden to allow icons to extend outside
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ee363c',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 8,
    },
    innerCircle: {
        width: 47, 
        height: 47, 
        borderRadius: 50,
        overflow: 'visible', // Remove overflow hidden to allow icons to extend outside
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
    },
    icon: {
        position: 'absolute',
        top: -33,
        left: -36.5,
        width: 84,
        height: 84,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,//might want to tweak this
            height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        elevation: 1,
    }
});

export default CardButtons;