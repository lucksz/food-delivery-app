import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary: {
    container: 'bg-blue-600 border border-blue-600',
    text: 'text-white font-semibold',
  },
  secondary: {
    container: 'bg-white border border-blue-600',
    text: 'text-blue-600 font-semibold',
  },
  ghost: {
    container: 'bg-transparent border border-transparent',
    text: 'text-blue-600 font-semibold',
  },
};

const sizeStyles = {
  sm: { container: 'px-4 py-2 rounded-lg', text: 'text-xs' },
  md: { container: 'px-5 py-3 rounded-xl', text: 'text-sm' },
  lg: { container: 'px-6 py-4 rounded-xl', text: 'text-base' },
};

export default function AppButton({
  label,
  variant = 'primary',
  size = 'md',
  ...props
}: Props) {
  const vs = variantStyles[variant];
  const ss = sizeStyles[size];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`items-center justify-center ${vs.container} ${ss.container}`}
      {...props}
    >
      <Text className={`${vs.text} ${ss.text}`}>{label}</Text>
    </TouchableOpacity>
  );
}
