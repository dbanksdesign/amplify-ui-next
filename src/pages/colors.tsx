import { Flex, Text, View, useTheme } from "@aws-amplify/ui-react"

const baseColors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink'];



export default function Colors() {
  const { tokens: { colors } } = useTheme();

  return (
    <Flex direction="column">
      {baseColors.map(color => (
        <View key={color}>
          <Text>{color}</Text>
          <Flex direction="row" gap="0" width="100%">
            {Object.keys(colors[color]).map(colorKey => (
              <View flex="1" key={colorKey} width="2rem" height="2rem" backgroundColor={`${color}.${colorKey}`} />
            ))}

          </Flex>
        </View>
      ))}
    </Flex>
  )
}