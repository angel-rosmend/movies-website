import { Body, TextButton } from "../../foundations/Typography";
import Link from "next/link";
import cx from "classnames";
import { Box } from "../../foundations/Box/Box";
import { Icons } from "../../foundations/Icons";
import { Accordion } from "../Accordion/Accordion";
import { FontWeightVariant } from "../../foundations/Typography/_fonts";
import { Divider } from "../Divider/Divider";
import { Container } from "../../foundations/Container/Container";

export interface FooterProps {
  className?: string;
  itemsMainSection: {
    title: { label: string; url: string };
    links: { label: string; url: string }[];
  }[];
  itemsBottomSection: { label: string; url: string }[];
  brandEmail: string;
  social: { type: string; url: string }[];
  copyright: string;
}

export function Footer(props: FooterProps) {
  return (
    <>
      <FooterDesktop {...props} className="!hidden sm:!flex" />
      <FooterMobile {...props} className="!block sm:!hidden" />
    </>
  );
}

function FooterDesktop(props: FooterProps) {
  return (
    <Container
      variant="default"
      className="py-10"
      component="footer"
      classNameWrapper={cx(props.className, "bg-black-06")}
    >
      <Box grow column className="w-full m-auto" hAlignContent="center">
        <Box grow className="pb-4 mb-4 w-full justify-between">
          {props.itemsMainSection.map((item, index) => {
            return (
              <Box key={index} className="gap-3" column>
                <Link href={item.title.url}>
                  <Body
                    weight={FontWeightVariant.Bold}
                    color="text-white"
                    size="m"
                  >
                    {item.title.label}
                  </Body>
                </Link>
                <Box className="gap-1" column>
                  {item.links.map((link, index) => {
                    return (
                      <Link href={link.url} key={index}>
                        <Body color="text-grey-60" key={index} size="xs">
                          {link.label}
                        </Body>
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box grow column className="w-full" hAlignContent="left">
          <Box grow className="w-full pb-2" hAlignContent="right">
            <Link href={props.social[2].url}>
              <Box vAlignContent="center" className="gap-3 w-full" >
                <Box width={24} height={24} type="submit" role="button">
                  <Icons.Email
                    className="stroke-white fill-none"
                    size="m"
                    id="email"
                  />
                </Box>

                <TextButton color="text-grey-60" size="s">
                  {props.brandEmail}
                </TextButton>
              </Box>
            </Link>
          </Box>

          <Divider dark />
          <Box grow vAlignContent="center" className="w-full justify-between pt-2">
            <Body color="text-grey-60" size="xs">
              {props.copyright}
            </Body>
            <Box className="gap-0.5">
              {props.itemsBottomSection.map((item, index) => {
                return (
                  <Link key={index} href={item.url} target="_blank">
                    <TextButton className="text-grey-60" size="m">
                      {item.label}
                    </TextButton>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

function FooterMobile(props: FooterProps) {
  return (
    <Box column className={cx(props.className, "bg-black-06 p-2 gap-4")}>
      <Box>
        <Box className="gap-3">
          <Link href={props.social[0].url}>
            <Box width={24} height={24}>
              <Icons.Email
                className="fill-none stroke-white"
                id="linkedIn"
                size="m"
              />
            </Box>
          </Link>
          <Link href={props.social[1].url}>
            <Box width={24} height={24}>
              <Icons.Facebook
                className="fill-none stroke-white"
                id="linkedIn"
                size="m"
              />
            </Box>
          </Link>
        </Box>
        <Box />
      </Box>
      <Accordion
        theme="dark"
        variant="small"
        id="footer-mobile-accordion"
        items={props.itemsMainSection.map((item, index) => ({
          title: item.title.label,
          content: (
            <Box column key={index}>
              {item.links.map((i, index) => {
                return (
                  <Link key={index} href={i.url}>
                    <Body color="text-grey-60" size="m">
                      {i.label}
                    </Body>
                  </Link>
                );
              })}
            </Box>
          ),
        }))}
      />
      <Link href={props.social[2].url}>
        <Box vAlignContent="center" className="w-full gap-1">
          <Box width={24} height={24}>
            <Icons.Email
              className="stroke-white fill-none"
              size="m"
              id="email"
            />
          </Box>

          <TextButton color="text-grey-60" size="s">
            {props.brandEmail}
          </TextButton>
        </Box>
      </Link>
      <Box>
        <Box>
          {props.itemsBottomSection.map((item, index) => {
            return (
              <Link href={item.url} key={index} target="_blank">
                <TextButton color="text-grey-60" size="s">
                  {item.label}
                </TextButton>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Body color="text-grey-60" size="s">
          {props.copyright}
        </Body>
      </Box>
    </Box>
  );
}
