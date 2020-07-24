import * as React from "react"
import { Flexbox, H1 } from "@reflexjs/components"
import { ButtonLink } from "@reflexjs/gatsby-theme-core/src/button-link"
import { Icon } from "@reflexjs/gatsby-theme-core/src/icon"

export const Pager = ({ previousPagePath, nextPagePath, ...props }) => (
  <Flexbox
    justifyContent="space-between"
    alignItems="center"
    my="4|6|10"
    {...props}
  >
    <H1>Hello world</H1>

    {previousPagePath && (
      <ButtonLink to={previousPagePath} textDecoration="none" variant="link">
        <Icon name="arrow-left" mr="2" /> Previous
      </ButtonLink>
    )}
    {nextPagePath && (
      <ButtonLink
        to={nextPagePath}
        textDecoration="none"
        ml="auto"
        variant="link"
      >
        Next <Icon name="arrow-right" ml="2" />
      </ButtonLink>
    )}
  </Flexbox>
)
