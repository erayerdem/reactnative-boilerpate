import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="search_svg__feather search_svg__feather-search"
      {...props}>
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  );
}

export default SvgSearch;
