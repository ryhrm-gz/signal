import styled from "@emotion/styled"
import Slider from "@mui/material/Slider"
import { observer } from "mobx-react-lite"
import React, { FC, useCallback } from "react"
import { setTrackPan } from "../../actions"
import { useStores } from "../../hooks/useStores"

const LightSlider = styled(Slider)`
  color: ${({ theme }) => theme.textColor};
`

const Container = styled.div`
  display: flex;
  width: 8rem;
  margin-left: 1rem;
  margin-right: 2rem;
`

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: ${({ theme }) => theme.secondaryTextColor};
`

export interface PanSliderProps {
  trackId: number
}

const _PanSlider: FC<PanSliderProps> = observer(({ trackId }) => {
  const rootStore = useStores()
  const onChange = useCallback(
    (value: number) => setTrackPan(rootStore)(trackId, value),
    [rootStore, trackId]
  )
  const pan = rootStore.pianoRollStore.currentPan

  return (
    <Container>
      <Label>Pan</Label>
      <LightSlider
        size="small"
        value={pan}
        onChange={(_, value) => onChange(value as number)}
        min={0}
        max={127}
        defaultValue={64}
        marks={[{ value: 64 }]}
      />
    </Container>
  )
})

export const PanSlider = React.memo(_PanSlider)
