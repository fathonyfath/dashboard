import Layout from "@components/Layout";
import Page from "@components/Page";
import Navigation from "@fragments/Navigation";
import type { PropsWithChildren } from "@kitajs/html";

export default function (
  props: PropsWithChildren<{ isHTMX: boolean }>,
): JSX.Element {
  const menu = <Navigation selected="ingredients" />;
  const content = Array(20)
    .fill(0)
    .map(() => (
      <>
        <div class="h-[100px] bg-amber-400" />
        <div class="h-[100px] bg-blue-950" />
      </>
    ));

  if (props.isHTMX) {
    return (
      <>
        {content}
        <Page.SideBarPart>{menu}</Page.SideBarPart>
      </>
    );
  } else {
    return (
      <Layout title="Home">
        <Page sidebar={menu}>{content}</Page>
      </Layout>
    );
  }
}
