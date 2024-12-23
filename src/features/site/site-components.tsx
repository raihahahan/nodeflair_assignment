import { Anchor, AppShell, Navbar } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, useState } from "react";
import { Burger, Header, MediaQuery } from "@mantine/core";
import React from "react";
import useTheme from "../theme/theme-hooks";
import anchorData, { footerData } from "./site-data";
// import RectangleTitle from "../../common/components/branding";
// import { anchorTitles, routes } from "./site-types";
import ToggleThemeButton from "../theme/theme-components";
import { useGlobalMediaQuery } from "../theme/theme-hooks";

export function SiteLayout({ children }: { children: React.ReactElement }) {
  const [opened, setOpened] = useState(false);
  const { siteColors, colorTheme } = useTheme();

  return (
    <>
      <AppShell
        styles={{
          main: {
            borderWidth: 0,
          },
        }}
        style={{
          backgroundColor: siteColors.background,
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        padding={10}
        fixed
        navbar={<MyNavbar openControl={{ opened, setOpened }} />}
        header={<MainHeader openControl={{ opened, setOpened }} />}
        footer={<MyFooter />}
      >
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 0,
            color: siteColors.text.primary,
            overflow: "hidden",
          }}
        > */}
        {children}
        {/* </div> */}
      </AppShell>
    </>
  );
}

export function MyNavbar({
  openControl,
}: {
  openControl: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const { classes, siteColors } = useTheme();
  return (
    <Navbar
      className={`${classes.navbar}`}
      style={{ backgroundColor: siteColors.navbar }}
      width={{ base: "100%", sm: 0 }}
      hidden={!openControl.opened}
    >
      <AnchorLinks isSmall openControl={openControl} />
    </Navbar>
  );
}

export function AnchorLinks({
  isSmall,
  openControl,
}: {
  isSmall: boolean;
  openControl?: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  return (
    <div style={{ display: "flex", flexDirection: isSmall ? "column" : "row" }}>
      {anchorData.map((item) => {
        return (
          <CustomAnchor
            key={item.anchorRoute}
            title={item.title}
            anchorRoute={item.anchorRoute}
            openControl={openControl}
          />
        );
      })}
    </div>
  );
}

export function CustomAnchor({
  title,
  anchorRoute,
  openControl,
  extraTextStyles,
}: {
  title: string;
  anchorRoute: string;
  openControl?: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
  extraTextStyles?: CSSProperties | undefined;
}) {
  const { siteColors } = useTheme();
  const route = useRouter();
  return (
    <Link style={{ padding: 4 }} href={anchorRoute} passHref>
      <Anchor
        onClick={openControl ? () => openControl.setOpened(false) : undefined}
        style={{
          margin: 20,
          textDecoration: anchorRoute == route.pathname ? "underline" : "none",
          color: siteColors.text.primary,
          ...extraTextStyles,
        }}
      >
        {title}
      </Anchor>
    </Link>
  );
}

export function MyFooter({ extraStyles }: { extraStyles?: CSSProperties }) {
  const { siteColors: colors } = useTheme();
  const { sm } = useGlobalMediaQuery();

  return (
    <section
      id="FOOTER"
      style={{
        backgroundColor: colors.header,
        width: "100vw",
        height: "auto",
        display: "flex",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 20,
        ...extraStyles,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: sm ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {footerData.map((item) => {
          return (
            <CustomAnchor
              key={item.title}
              title={item.title}
              anchorRoute={item.anchorRoute}
              extraTextStyles={{ color: colors.text.secondary, fontSize: 14 }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default function MainHeader({
  openControl,
}: {
  openControl: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const { siteColors, classes, themeState } = useTheme();
  const { opened, setOpened } = openControl;
  return (
    <Header
      height={70}
      p="md"
      style={{
        borderWidth: 0,
        backgroundColor: siteColors.header,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            color={siteColors.text.primary}
            style={{ color: siteColors.text.primary }}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
        <Link href="/" passHref>
          <Anchor onClick={() => setOpened(false)}>
            {/* <RectangleTitle
              widthSize={200}
              type={themeState == "light" ? "default" : "dark"}
            /> */}
          </Anchor>
        </Link>
        <Link href="/" passHref>
          <Anchor>
            <div></div>
          </Anchor>
        </Link>
        <ToggleThemeButton color={siteColors.text.primary} size={24} />
        <div
          className={classes.links}
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          <AnchorLinks isSmall={false} />
        </div>
      </div>
    </Header>
  );
}
