import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Menu from "@/fragments/Menu";
import { PropsWithChildren } from "@kitajs/html";

export default function (
  props: PropsWithChildren<{ isHTMX: boolean }>,
): JSX.Element {
  const menu = <Menu selectedMenuId="products" />;
  const content = Array(20)
    .fill(0)
    .map(() => (
      <>
        <div class="h-[100px] bg-cyan-950" />
        <div class="h-[100px] bg-fuchsia-600" />
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
