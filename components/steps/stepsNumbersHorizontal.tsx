import { useCounter } from "ahooks";
import { Button, Col, Row, Space, Steps } from "antd";
import React, { useEffect, useState } from "react";

interface StepsHorizontalProps {}

const steps = [
  {
    title: " ",
    content:
      "Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. ",
  },
  {
    title: " ",
    content: "Second-content",
  },
  {
    title: " ",
    content: "Last-content",
  },
  {
    title: " ",
    content: "Last-content",
  },
  {
    title: " ",
    content: "Second-content",
  },
  {
    title: " ",
    content: "Last-content",
  },
  {
    title: " ",
    content: "Second-content",
  },
  {
    title: " ",
    content: "Last-content",
  },
  {
    title: " ",
    content: "Second-content",
  },
  {
    title: " ",
    content: "Last-content",
  },
];

const StepsNumbersHorizontal: React.FC<StepsHorizontalProps> = ({}) => {
  const [step, { inc: nextStep, dec: prevStep, set: setStep }] = useCounter(0, {
    min: 0,
    max: 10,
  });
  const [current, setCurrent] = useState(steps[0]);

  useEffect(() => {
    setCurrent(steps[step]);
  }, [step]);

  return (
    <div>
      <Row>
        <Col span={1}>
          <Steps current={step} size="default" direction="vertical" progressDot>
            {steps.map((item, index) => (
              <Steps.Step
                key={item.title}
                title={item.title}
                onClick={() => setStep(index)}
              />
            ))}
          </Steps>
        </Col>
        <Col span={16}>
          <div className="space-align-container mr-24">
            <div className="space-align-block">
              <Space align="center">
                <div className="steps-content">{current.content}</div>
              </Space>
            </div>
          </div>
          <div className="steps-action">
            {step < steps.length - 1 && (
              <Button type="primary" onClick={() => nextStep()}>
                Next
              </Button>
            )}
            {step > 0 && (
              <Button type="primary" onClick={() => prevStep()}>
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
