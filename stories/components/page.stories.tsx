import { Layout, Page } from '@components';

export default {
  title: 'Components',
  component: Page,
}

const PageStory = () => <>
  <Layout>
    <Page>Page</Page>
  </Layout>
</>

export { PageStory as Page };
