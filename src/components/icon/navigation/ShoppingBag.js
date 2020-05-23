import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShoppingBag(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shopping-bag_svg__feather shopping-bag_svg__feather-shopping-bag"
      {...props}>
      <Path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </Svg>
  );
}

export default SvgShoppingBag;
