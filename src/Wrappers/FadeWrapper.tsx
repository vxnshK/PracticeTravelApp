import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

const FadeWrapper = ({ children }: any) => {
  const isFocused = useIsFocused();
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(isFocused ? 1 : 0, { duration: 300 });
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    flex: 1,
  }));

  return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FadeWrapper;
