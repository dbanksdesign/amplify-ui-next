import { Theme, defaultDarkModeOverride, defaultTheme } from "@aws-amplify/ui-react";
import { DefaultTheme } from "@aws-amplify/ui";

type ColorPalette = typeof defaultTheme.tokens.colors.blue;

const colorPalette: typeof defaultTheme.tokens.colors = {
  red: {
    10: 'hsla(0, 100%, 98%, 1)',
    20: 'hsla(0, 76%, 92%, 1)',
    40: 'hsla(0, 76%, 68%, 1)',
    // Original 60 is too bright
    // 60: 'hsla(0, 82%, 47%, 1)',
    60: 'hsla(0, 76%, 47%, 1)',
    80: 'hsla(0, 82%, 35%, 1)',
    90: 'hsla(0, 81%, 20%, 1)',
    100: 'hsla(0, 80%, 14%, 1)',
  },
  orange: {
    10: 'hsla(36, 100%, 97%, 1)',
    20: 'hsla(36, 100%, 88%, 1)',
    // original orange 40 is smile orange which blows
    // 40: 'hsla(36, 100%, 50%, 1)',
    40: 'hsla(36, 90%, 70%, 1)',
    60: 'hsla(36, 87%, 50%, 1)',
    80: 'hsla(36, 94%, 40%, 1)',
    90: 'hsla(36, 93%, 23%, 1)',
    100: 'hsla(36, 92%, 15%, 1)',
  },
  yellow: {
    10: 'hsla(51, 94%, 93%, 1)',
    20: 'hsla(51, 100%, 85%, 1)',
    40: 'hsla(51, 100%, 70%, 1)',
    // Original 60 is too muddy
    // 60: 'hsla(51, 82%, 47%, 1)',
    60: 'hsla(51, 98%, 50%, 1)',
    80: 'hsla(51, 93%, 28%, 1)',
    90: 'hsla(51, 93%, 20%, 1)',
    100: 'hsla(51, 92%, 15%, 1)',
  },
  // Not in Figma, but yolo
  green: {
    10: 'hsla(125, 44%, 96%, 1)',
    20: 'hsla(125, 54%, 86%, 1)',
    40: 'hsla(125, 57%, 70%, 1)',
    60: 'hsla(125, 68%, 41%, 1)',
    80: 'hsla(125, 69%, 31%, 1)',
    90: 'hsla(125, 67%, 18%, 1)',
    100: 'hsla(125, 67%, 12%, 1)',
  },
  teal: {
    10: 'hsla(175, 44%, 96%, 1)',
    20: 'hsla(175, 54%, 86%, 1)',
    40: 'hsla(175, 57%, 70%, 1)',
    60: 'hsla(175, 68%, 41%, 1)',
    80: 'hsla(175, 69%, 31%, 1)',
    90: 'hsla(175, 67%, 18%, 1)',
    100: 'hsla(175, 67%, 12%, 1)',
  },
  blue: {
    10: 'hsla(207, 73%, 97%, 1)',
    20: 'hsla(208, 76%, 90%, 1)',
    40: 'hsla(207, 96%, 70%, 1)',
    60: 'hsla(207, 100%, 50%, 1)',
    80: 'hsla(209, 92%, 43%, 1)',
    90: 'hsla(209, 90%, 25%, 1)',
    100: 'hsla(209, 90%, 16%, 1)',
  },
  purple: {
    10: 'hsla(252, 100%, 98%, 1)',
    20: 'hsla(253, 100%, 95%, 1)',
    40: 'hsla(252, 100%, 85%, 1)',
    60: 'hsla(259, 63%, 68%, 1)',
    80: 'hsla(259, 62%, 60%, 1)',
    90: 'hsla(256, 42%, 34%, 1)',
    100: 'hsla(257, 42%, 14%, 1)',
  },
  pink: {
    10: 'hsla(316, 100%, 98%, 1)',
    20: 'hsla(316, 76%, 92%, 1)',
    40: 'hsla(316, 76%, 68%, 1)',
    60: 'hsla(316, 82%, 47%, 1)',
    80: 'hsla(316, 82%, 37%, 1)',
    90: 'hsla(316, 81%, 20%, 1)',
    100: 'hsla(316, 81%, 13%, 1)',
  },
  neutral: {
    10: 'hsla(0, 0%, 98%, 1)',
    20: 'hsla(0, 0%, 96%, 1)',
    //@ts-ignore
    30: 'hsla(216, 12%, 90%, 1)',
    // This color blows
    // 40: 'hsla(213, 16%, 66%, 1)',
    40: 'hsla(213, 16%, 75%, 1)',
    // @ts-ignore
    50: 'hsla(213, 12%, 54%, 1)',
    60: 'hsla(213, 12%, 43%, 1)',
    80: 'hsla(213, 28%, 19%, 1)',
    // currently 90 doesn't have a use, it is too close to 100
    // to have any noticeable difference
    90: 'hsla(213, 47%, 11%, 1)',
    100: 'hsla(221, 100%, 4%, 1)',
  },
}

// type ColorKey = 10 | 20 | 40 | 60 | 80 | 90 | 100;

// const darkKeys = {
//   10: 100,
//   20: 90,
//   40: 80,
//   60: 60,
//   80: 40,
//   90: 20,
//   100: 10
// }

// const darkPalette = (color: ColorPalette): ColorPalette => {
//   return Object.entries(color).reduce((acc, [key, value]) => {
//     return {
//       ...acc,
//       [darkKeys[(key as unknown as ColorKey)]]: value
//     }
//   }, {} as ColorPalette)
// }

export const theme: Theme = {
  name: 'amplify-design-system',
  tokens: {
    colors: {
      ...colorPalette,
      brand: {
        primary: {
          10: '{colors.purple.10}',
          20: '{colors.purple.20}',
          40: '{colors.purple.40}',
          60: '{colors.purple.60}',
          80: '{colors.purple.80}',
          90: '{colors.purple.90}',
          100: '{colors.purple.100}',
        }
      },

      background: {
        secondary: '{colors.neutral.10}',
        tertiary: '{colors.neutral.20}',
        disabled: '{colors.background.tertiary}',

        success: '{colors.green.10}',
        info: '{colors.blue.10}',
        error: '{colors.red.10}',
        warning: '{colors.orange.10}'
      },
      border: {
        primary: '{colors.neutral.60}',
        secondary: '{colors.neutral.40}',
        tertiary: '{colors.neutral.30}',

        active: '{colors.brand.primary.60}',
        focus: '{colors.brand.primary.80}',
        // @ts-ignore
        success: '{colors.green.40}',
        // @ts-ignore
        info: '{colors.blue.40}',
        // @ts-ignore
        error: '{colors.red.40}',
        // @ts-ignore
        warning: '{colors.orange.40}',
      },
      font: {
        secondary: '{colors.neutral.80}',
        tertiary: '{colors.neutral.60}'
      }
    },
    fonts: {
      default: {
        // Note: this will be for console only
        static: 'Amazon Ember',
        // Note: Ember doesn't have a variable font
        variable: 'Amazon Ember'
      }
    },
    radii: {
      small: '0.375rem'
    },
    borderWidths: {
      medium: '1.5px'
    },
    components: {
      alert: {
        backgroundColor: '{colors.background.secondary}',
        // alert doesn't have border tokens
      },

      field: {
        gap: '{space.xxxs}'
      },
      fieldmessages: {
        description: {
          color: '{colors.font.tertiary}'
        }
      },

      button: {
        borderColor: '{colors.neutral.40}',
        primary: {
          backgroundColor: '{colors.brand.primary.20}',
          color: '{colors.brand.primary.90}',
          borderColor: '{colors.brand.primary.60}',
          _hover: {
            backgroundColor: '{colors.brand.primary.60}',
            color: '{colors.brand.primary.100}',
          },
          _active: {

          }
        },
        _disabled: {
          backgroundColor: '{colors.background.secondary}',
          borderColor: '{colors.border.secondary}'
        }
      },
      fieldcontrol: {
        borderColor: '{colors.border.secondary}'
      },
      expander: {
        boxShadow: 'none',
        item: {

        }
      },
      radio: {
        button: {
          padding: '{borderWidths.large}',
          borderColor: '{colors.border.secondary}',
          _checked: {
            color: ''
          }
        }
      },
      menu: {
        // borderWidth: '0',
        borderColor: '{colors.border.secondary}',
        boxShadow: '{shadows.small}',
        item: {

        }
      },
      switchfield: {
        track: {
          backgroundColor: '{colors.border.secondary}',
          padding: '{borderWidths.large}',

          // checked: {
          //   backgroundColor: '{colors.border.success}'
          // }
        },
        thumb: {
          borderColor: '{colors.border.primary}',
          // border color doesn't work
          // box shadow doesn't work either
        }
      },
      sliderfield: {
        track: {
          backgroundColor: '{colors.border.tertiary}',
        },
        range: {
          backgroundColor: '{colors.brand.primary.60}'
        },
        thumb: {
          borderWidth: '{borderWidths.small}',
          borderColor: '{colors.border.secondary}'
        }
      },
      tabs: {
        borderWidth: '{borderWidths.small}',
        borderColor: '{colors.border.secondary}',
        item: {
          borderWidth: '{borderWidths.large}',
          borderColor: 'transparent',
          color: '{colors.font.tertiary}',
          _active: {
            borderColor: '{colors.border.active}'
          }
        }
      },
      checkbox: {
        button: {
          before: {
            borderColor: '{colors.border.secondary}'
          }
        },
        icon: {
          backgroundColor: '{colors.font.interactive}',
          // @ts-ignore
          _checked: {
            _disabled: {
              backgroundColor: '{colors.border.disabled}'
            }
          },
          // @ts-ignore
          _indeterminate: {
            _disabled: {
              backgroundColor: '{colors.border.disabled}'
            }
          }
        }
      },
      stepperfield: {
        button: {
          _disabled: {
            backgroundColor: '{colors.background.disabled}'
          }

        }
      }
    }
  },
  overrides: [
    // defaultDarkModeOverride,
    {
      colorMode: 'dark',
      tokens: {
        components: {
          button: {
            primary: {
              backgroundColor: '{colors.brand.primary.40}',
              borderColor: '{colors.brand.primary.20}',
              // color: '{colors.brand.primary.20}'
            }
          }
        },
        colors: {
          background: {
            primary: '{colors.neutral.100}',
            secondary: '{colors.neutral.90}',
            tertiary: '{colors.neutral.80}',

            success: '{colors.green.100}',
            info: '{colors.blue.100}',
            error: '{colors.red.100}',
            warning: '{colors.orange.100}'
          },
          border: {
            primary: '{colors.neutral.50}',
            secondary: '{colors.neutral.60}',
            tertiary: '{colors.neutral.80}',
            active: '{colors.brand.primary.40}',
            // @ts-ignore
            success: '{colors.green.60}',
            info: '{colors.blue.60}',
            error: '{colors.red.60}',
            warning: '{colors.orange.60}'
          },
          font: {
            primary: '{colors.neutral.10}',
            secondary: '{colors.neutral.20}',
            tertiary: '{colors.neutral.30}',
            inverse: '{colors.neutral.100}',
            interactive: '{colors.brand.primary.40}',
            // @ts-ignore
            success: '{colors.green.20}',
            info: '{colors.blue.20}',
            error: '{colors.red.20}',
            warning: '{colors.orange.20}'
          },
          // red: darkPalette(colorPalette.red),
          // orange: darkPalette(colorPalette.orange),
          // yellow: darkPalette(colorPalette.yellow),
          // green: darkPalette(colorPalette.green),
          // teal: darkPalette(colorPalette.teal),
          // blue: darkPalette(colorPalette.blue),
          // purple: darkPalette(colorPalette.purple),
          // pink: darkPalette(colorPalette.pink),
          // neutral: {
          //   10: colorPalette.neutral[100],
          //   20: colorPalette.neutral[90],
          //   // @ts-ignore
          //   30: colorPalette.neutral[80],
          //   40: colorPalette.neutral[60],
          //   // 50
          //   60: colorPalette.neutral[40],
          //   // 70:
          //   // @ts-ignore
          //   80: colorPalette.neutral[30],
          //   90: colorPalette.neutral[20],
          //   100: colorPalette.neutral[10],
          // },
          // background: {
          //   tertiary: '{colors.neutral.30}'
          // }
        }
      }
    }
  ]
}
