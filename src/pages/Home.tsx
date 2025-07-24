import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Menu from "@/fragments/Menu";
import type { PropsWithChildren } from "@kitajs/html";

export default function (
  props: PropsWithChildren<{ isHTMX: boolean }>,
): JSX.Element {
  const menu = <Menu selectedMenuId="home" />;
  const content = Array(20)
    .fill(0)
    .map(() => (
      <>
        <div class="h-[100px] bg-red-400" />
        <div class="h-[100px] bg-blue-400" />
      </>
    ));

  if (props.isHTMX) {
    return (
      <>
        {content}
        <div hx-swap-oob="innerHTML:#sidebar-menu">{menu}</div>
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
