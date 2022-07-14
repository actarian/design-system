import { Button, Layout, Page } from '@components';

export default {
  title: 'Components',
  component: Button,
}

const ButtonStory = () => <>
  <Layout>
    <Page>
      <Button>Button</Button>
    </Page>
  </Layout>
</>

export { ButtonStory as Button };
