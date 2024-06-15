export function TabBarIcon({ Icon, style, color, ...rest }) {
  return <Icon size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
