import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";

const cn = (...classNames) => classNames.join(" ");

const buttonVariants = {
  primary: {
    backgroundColor: COLORS.primary,
    color: "white",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    color: "black",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
  },
  outline: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
  },
};

const Button = ({ variant = "default", onPress, children, style }) => {
  const variantStyles = buttonVariants[variant] || buttonVariants.default;

  return (
    <TouchableOpacity
      style={[styles.button, variantStyles, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
};

export default Button;
