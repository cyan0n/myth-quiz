import { Button, Col, Popover, Row, Space, Steps } from 'antd';
import Layout from 'antd/lib/layout/layout'
import React from 'react'

interface StepsHorizontalProps {}

const steps = [
    {
      title: ' ',
      content: 'Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. ',
    },
    {
      title: ' ',
      content: 'Second-content',
    },
    {
      title: ' ',
      content: 'Last-content',
    },
    {
        title: ' ',
        content: 'Last-content',
    },
    {
        title: ' ',
        content: 'Second-content',
    },
    {
        title: ' ',
        content: 'Last-content',
    },
    {
        title: ' ',
        content: 'Second-content',
    },
    {
        title: ' ',
        content: 'Last-content',
    },
    {
        title: ' ',
        content: 'Second-content',
    },
    {
        title: ' ',
        content: 'Last-content',
    },
  ];

const StepsNumbersHorizontal: React.FC<StepsHorizontalProps> = ({}) => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const previous = () => {
        setCurrent(current - 1);
    };

    return (
        <div>
            <Row>
                <Col span={8}>
                    <Steps current={current} size="small" direction="vertical">
                        {steps.map(item => (
                            <Steps.Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </Col>
                <Col span={16}>
                    <div className="space-align-container mr-24">
                        <div className="space-align-block">
                            <Space align="center">
                                <div className="steps-content">{steps[current].content}</div>
                            </Space>
                        </div>
                    </div>
                    <div className="steps-action">
                        {current <steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current > 0 && (
                            <Button type="primary" onClick={() => previous()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default StepsNumbersHorizontal;