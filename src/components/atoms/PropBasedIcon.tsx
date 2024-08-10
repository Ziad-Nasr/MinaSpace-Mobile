import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';

// Define the props for the `PropBasedIcon` component
type PropBasedIconProps = {
  component: React.ComponentType<IconProps>;
  name: string;
  color: string;
  size: number;
};

// Use the props to render the icon component
const PropBasedIcon: React.FC<PropBasedIconProps> = ({
  component: IconComponent,
  name,
  color,
  size,
}) => {
  return <IconComponent name={name} size={size} color={color} />;
};

export default PropBasedIcon;
