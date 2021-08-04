import { Popover, Steps } from "antd";
import React from "react";
import Layout from "../components/Layout";
import StepsDotsHorizontal from "../components/steps/stepsDotsHorizontal";
import StepsDotsVertical from "../components/steps/stepsDotsVertical";
import StepsNumbersHorizontal from "../components/steps/stepsNumbersHorizontal";
import StepsNumbersVertical from "../components/steps/stepsNumbersVertical";

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
    return (
        <Layout>
            <StepsNumbersVertical />
        </Layout>
    )
};

export default Quiz;