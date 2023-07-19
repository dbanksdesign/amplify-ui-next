import { Alert, Button, CheckboxField, Expander, ExpanderItem, Flex, Menu, MenuItem, Radio, RadioGroupField, SliderField, StepperField, SwitchField, TabItem, Tabs, Text, TextField, View, useTheme } from "@aws-amplify/ui-react";


export default function Home() {
  const { tokens: { colors } } = useTheme();
  return (
    <Flex direction="column" padding="xxl">
      <Flex direction="row">
        <Button variation="primary">Primary</Button>
        <Button variation="primary" isDisabled>Primary</Button>
        <Button>Secondary</Button>
        <Button isDisabled>Disabled</Button>
        <Button variation="link">Link</Button>
      </Flex>
      <Alert heading="Heading">Body</Alert>
      <Alert variation="success" heading="Heading">Body</Alert>
      <Alert variation="warning" heading="Heading">Body</Alert>
      <Alert variation="error" heading="Heading">Body</Alert>
      <Alert variation="info" heading="Heading">Body</Alert>
      <TextField
        label="label"
        placeholder="placeholder"
        descriptiveText="description"
      />
      <SliderField
        label="label"
        defaultValue={50}
        min={0}
        max={100}
      />
      <Flex direction="row">
        <SwitchField
          label="label"
        />
        <SwitchField
          isDisabled
          label="label"
        />
        <SwitchField
          defaultChecked
          label="label"
        />
        <SwitchField
          defaultChecked
          isDisabled
          label="label"
        />
      </Flex>
      <Flex direction="row">
        <CheckboxField
          label="label"
          name="label"
          value="label"
        />
        <CheckboxField
          label="label2"
          name="label2"
          value="label2"
          defaultChecked
        />
        <CheckboxField
          label="label2"
          name="label2"
          value="label2"
          isIndeterminate
        />
        <CheckboxField
          label="label3"
          name="label3"
          value="label3"
          isDisabled
        />
        <CheckboxField
          label="label3"
          name="label3"
          value="label3"
          defaultChecked
          isDisabled
        />
        <CheckboxField
          label="label3"
          name="label3"
          value="label3"
          isIndeterminate
          isDisabled
        />
      </Flex>
      <Flex direction="row">
        <RadioGroupField
          name="label"
          label="label"
        >
          <Radio value="html">HTML</Radio>
          <Radio value="html">CSS</Radio>
          <Radio value="html">Javascript</Radio>
        </RadioGroupField>
      </Flex>
      <Tabs>
        <TabItem title="Tab 1">Tab 1 Content</TabItem>
        <TabItem title="Tab 2">Tab 2 Content</TabItem>
      </Tabs>
      <Menu>
        <MenuItem>Test</MenuItem>
        <MenuItem>Another one</MenuItem>
        <MenuItem isDisabled>Tester</MenuItem>
      </Menu>
      <StepperField
        label="label"
        min={0}
        max={4}
      />
      <Expander type="single">
        <ExpanderItem title="Is it accessible?" value="demo-item-1">
          Yes! It adheres to the WAI-ARIA design pattern.
        </ExpanderItem>
        <ExpanderItem title="Can I customize the styling?" value="demo-item-2">
          Of course! See the section on CSS Styling below.
        </ExpanderItem>
        <ExpanderItem
          title="Is it a great way to organize content?"
          value="demo-item-3"
        >
          Most definitely!
        </ExpanderItem>
      </Expander>
      <Flex direction="row">
        <View width="100px" height="100px" backgroundColor="background.primary">
        </View>
        <View width="100px" height="100px" backgroundColor="background.secondary" />
        <View width="100px" height="100px" backgroundColor="background.tertiary">
        </View>
        <View width="100px" height="100px" backgroundColor="background.primary" border={`1px solid ${colors.border.primary}`} />
        <View width="100px" height="100px" backgroundColor="background.primary" border={`1px solid ${colors.border.secondary}`} />
        <View width="100px" height="100px" backgroundColor="background.primary" border={`1px solid ${colors.border.tertiary}`} />
      </Flex>
      <Flex direction="row">
        <Text fontWeight="bold" color="font.primary">Primary</Text>
        <Text fontWeight="bold" color="font.secondary">Secondary</Text>
        <Text fontWeight="bold" color="font.tertiary">Tertiary</Text>
      </Flex>
    </Flex>
  )
}
