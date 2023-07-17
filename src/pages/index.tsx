import { Alert, Button, Expander, ExpanderItem, Flex, Menu, MenuItem, SliderField, StepperField, SwitchField, TextField } from "@aws-amplify/ui-react";


export default function Home() {
  return (
    <Flex direction="column" padding="xxl">
      <Flex direction="row">
        <Button variation="primary">Primary</Button>
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
    </Flex>
  )
}
