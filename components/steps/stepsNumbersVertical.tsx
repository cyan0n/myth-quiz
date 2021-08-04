import { Popover, Steps } from 'antd';
import Layout from 'antd/lib/layout/layout'
import React from 'react'

interface StepsHorizontalProps {}

const StepsNumbersVertical: React.FC<StepsHorizontalProps> = ({}) => {
    return (
        <div>
            <Steps size="small" current={0} direction="vertical">
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
                <Steps.Step />
            </Steps>
        </div>
    );
};

export default StepsNumbersVertical;