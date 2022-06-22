import { Layout, Page, Text } from '@components';

export default {
  title: 'Components',
  component: Text,
}

const TextStory = () => <>
  <Layout>
    <Page>
      <Text as="h1" type="h1">Header H1</Text>
      <Text as="h2" type="h2">Header H2</Text>
      <Text as="h3" type="h3">Header H3</Text>
      <Text as="h4" type="h4">Header H4</Text>
      <Text as="h5" type="h5">Header H5</Text>
      <Text as="h6" type="h6">Header H6</Text>
      <Text type="default">Default text</Text>
      <Text type="small">Small text</Text>
      <Text type="smaller">Smaller text</Text>
      <Text type="smallest">Smallest text</Text>
    </Page>
  </Layout>
</>

export { TextStory as Text };
