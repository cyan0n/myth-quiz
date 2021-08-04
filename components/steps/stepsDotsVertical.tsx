import { Popover, Steps } from 'antd';
import Layout from 'antd/lib/layout/layout'
import React from 'react'

interface StepsProps {}

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

const StepsDotsVertical: React.FC<StepsProps> = ({}) => {
    return (
        <div>
            <Steps current={0} progressDot={customDot} direction="vertical">
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

export default StepsDotsVertical;