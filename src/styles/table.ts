import { mode } from "@chakra-ui/theme-tools";

const parts = ["table", "thead", "tbody", "tr", "th", "td", "caption"];

const baseStyle = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full",
  },
  th: {
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start",
  },
  td: {
    textAlign: "start",
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium",
  },
};

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

const simpleVariant = (props: any) => {
  const { colorScheme: c } = props;

  return {
    th: {
      color: mode(`gray.600`, `gray.400`)(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    caption: {
      color: mode(`gray.600`, `gray.100`)(props),
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
};

const stripedVariant = (props: any) => {
  const { colorScheme: c } = props;

  return {
    th: {
      color: "#000",
      fontSize: "16px",
      borderBottom: "1px",
      borderColor: "transparent",
      paddingTop: "8px",
      paddingBottom: "22px",
      ...numericStyles,
    },
    td: {
      borderBottom: "1px",
      borderColor: "transparent",
      fontWeight: "bold",
      ...numericStyles,
    },
    caption: {
      color: mode(`gray.600`, `gray.100`)(props),
    },
    tbody: {
      tr: {
        borderColor: "transparent",
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: "transparent",
          },
          td: {
            background: mode("#F3F3F3", `${c}.700`)(props),
          },
        },
        td: {
          "&:nth-of-type(1)": {
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          },
          "&:last-child": {
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          },
        },
      },
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
};

const variants = {
  simple: simpleVariant,
  striped: stripedVariant,
  unstyled: {},
};

const sizes = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4",
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs",
    },
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5",
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm",
    },
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm",
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6",
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md",
    },
  },
};

const defaultProps = {
  variant: "simple",
  size: "md",
  colorScheme: "gray",
};

export default {
  parts,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
