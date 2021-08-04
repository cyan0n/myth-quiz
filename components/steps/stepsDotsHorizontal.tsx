import { Popover, Steps } from 'antd';
import Layout from 'antd/lib/layout/layout'
import React from 'react'

interface StepsHorizontalProps {}

const customDot = (dot, { status, index }) => (
    <Popover
        content = {
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

const StepsDotsHorizontal: React.FC<StepsHorizontalProps> = ({}) => {
    return (
        <div>
            <Steps current={0} progressDot={customDot}>
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

export default StepsDotsHorizontal;