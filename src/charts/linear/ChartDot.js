import React, { useContext } from 'react';
import Animated from 'react-native-reanimated';
import ChartContext from '../../helpers/ChartContext';
import withReanimatedFallback from '../../helpers/withReanimatedFallback';
import LinearGradient from 'react-native-linear-gradient';

function ChartDot({ style, size = 10, indicator = false, indicatorColor = ["#000", "#000"], ...props }) {
	const { dotStyle, indicatorStyle, positionX, positionY } = useContext(ChartContext);

	const renderIndicator = () => {
		if (indicator) {
			return (
				<Animated.View
					style={[
						indicatorStyle,
						{
							width: 1.5,
							transform: [
								{ translateX: positionX.value + 4 },
								{ translateY: positionY.value + 2 }
							]
						}]}>
					<LinearGradient
						colors={indicatorColor}
						style={{
							height: "100%", width: "100%"
						}}
					/>
				</Animated.View>
			)
		} else return null;
	}

	return (
		<Animated.View
			{...props}
			pointerEvents="none"
			style={[
				dotStyle,
				{
					borderRadius: size / 2,
					height: size,
					left: -size / 2,
					position: 'absolute',
					top: -size / 2,
					width: size
				},
				style,
			]}
		>
			{renderIndicator()}
		</Animated.View >
	);
}

export default withReanimatedFallback(ChartDot);
