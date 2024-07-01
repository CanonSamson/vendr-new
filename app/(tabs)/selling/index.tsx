import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import TasksCard from "@/components/TasksCard";
import { Platform } from "react-native";
import CustomKeyBoardView from "@/components/CustomKeyBoardView";
import Animated, { FadeOut, FadeInDown } from 'react-native-reanimated';
import { usePathname, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const Tasks = () => {

    const pathname = usePathname();
    const [inView, setInView] = useState(false)

    useEffect(() => {
        console.log(pathname)
        if (pathname === "/selling") setInView(true)


        return () => setInView(false)
    }, [pathname]);

    return (
        <CustomKeyBoardView>
            <View className="gap-y-2 px-1">
                {
                    inView ?
                        <>
                            <TouchableOpacity  >
                                <Animated.View entering={FadeInDown.delay(70).withInitialValues({ transform: [{ translateY: -25 }] })} exiting={FadeOut} style={[styles.container]} className="mx-1 bg-white rounded-xl">
                                    <View className="flex-row justify-between items-center px-4 pt-2">
                                        <Text style={styles.mainHeadingText}>Requests</Text>
                                    </View>
                                    <View className="">
                                        <TasksCard message="Message requests need approval" unseen_task={3} />
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity  >
                                <Animated.View
                                    entering={FadeInDown.delay(150).withInitialValues({ transform: [{ translateY: -25 }] })} exiting={FadeOut} style={[styles.container]} className="mx-1 bg-white rounded-xl">
                                    <View className="flex-row justify-between items-center px-4 pt-2">
                                        <Text style={styles.mainHeadingText}>Replies</Text>
                                    </View>
                                    <View className="">
                                        <TasksCard message="Buyers are awaiting responses" unseen_task={2} />
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity  >
                                <Animated.View entering={FadeInDown.delay(250).withInitialValues({ transform: [{ translateY: -25 }] })} exiting={FadeOut} style={[styles.container]} className="mx-1 bg-white rounded-xl">
                                    <View className="flex-row justify-between items-center px-4 pt-2">
                                        <Text style={styles.mainHeadingText}>Feedback</Text>
                                    </View>
                                    <TasksCard message="Buyers need to be given feedback" unseen_task={6} />
                                </Animated.View>
                            </TouchableOpacity>

                        </>
                        : <></>
                }

            </View>
        </CustomKeyBoardView>
    );
};

export default Tasks;

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    mainHeadingText: {
        fontSize: 26,
        fontWeight: "700",
    },
    filterButton: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    filterButtonTest: {
        color: Colors.primary,
        fontSize: 14,
    },
});
