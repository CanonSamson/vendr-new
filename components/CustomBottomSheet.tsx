import { View, StyleProp, ViewStyle } from "react-native";
import React, { forwardRef, useMemo, ReactNode, useCallback } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  title: string;
  children?: ReactNode;
  snapPoints?: string[];
  handleIndicatorStyle?: StyleProp<ViewStyle>;
}

type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
  const { children, snapPoints = ["60%"], handleIndicatorStyle = {} } = props;
  const memoizedSnapPoints = useMemo(() => snapPoints, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={memoizedSnapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      handleIndicatorStyle={handleIndicatorStyle}
      keyboardBehavior="extend"
    >
      {children}
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;
