import { Slider } from '@fluentui/react';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
`;

interface RangeSelectionProps {
    range: [number, number];
    left: number;
    right: number;
    onValueChange: (range: [number, number]) => void;
}
const RangeSelection: React.FC<RangeSelectionProps> = props => {
    const { range, left, right, onValueChange } = props;

    return <Container>
        <Slider
            label='range'
            min={range[0]}
            max={range[1]}
            value={right}
            lowerValue={left}
            ranged
            onChange={(_v, r) => {
                r && onValueChange(r);
            }}
            styles={{
                root: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                },
                container: {
                    display: 'flex',
                },
                slideBox: {
                    flex: 1,
                },
                valueLabel: {
                    minWidth: '40px',
                    width: 'unset',
                },
            }}
        />
    </Container>
}

export default RangeSelection;
