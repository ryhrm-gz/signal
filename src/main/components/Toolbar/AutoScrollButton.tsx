import styled from "@emotion/styled"
import { KeyboardTab } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import { VFC } from "react"
import { localized } from "../../../common/localize/localizedString"
import { StyledToggleButton } from "./ToolSelector"

const AutoScrollIcon = styled(KeyboardTab)`
  height: 2rem;
  font-size: 1.3rem;
`

export interface AutoScrollButtonProps {
  onClick: () => void
  selected: boolean
}

export const AutoScrollButton: VFC<AutoScrollButtonProps> = ({
  onClick,
  selected,
}) => (
  <StyledToggleButton onClick={onClick} selected={selected} value="autoScroll">
    <Tooltip title={localized("auto-scroll", "Auto-Scroll")}>
      <AutoScrollIcon />
    </Tooltip>
  </StyledToggleButton>
)
