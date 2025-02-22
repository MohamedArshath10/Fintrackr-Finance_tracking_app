import React, { useEffect } from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { dateFormat } from '/src/Utils/Date';
import { useGlobalContext } from '../../Context/globalContext';

// ✅ Correctly Register ChartJS Components
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Chart = () => {
    const { incomes, expenses } = useGlobalContext();

    useEffect(() => {
        console.log("Fetched Incomes:", incomes);
        console.log("Fetched Expenses:", expenses);
    }, [incomes, expenses]);

    // ✅ Ensure data is always defined
    const data = {
        labels: incomes.length > 0 ? incomes.map((inc) => dateFormat(inc.date)) : ["No Data"],
        datasets: [
            {
                label: 'Income',
                data: incomes.length > 0 ? incomes.map((income) => income.amount) : [0],
                backgroundColor: 'green',
                borderColor: 'green',
                tension: 0.4
            },
            {
                label: 'Expenses',
                data: expenses.length > 0 ? expenses.map((expense) => expense.amount) : [0],
                backgroundColor: 'red',
                borderColor: 'red',
                tension: 0.4
            },
        ]
    };

    // ✅ Prevent rendering if `incomes` & `expenses` are empty
    if (!incomes.length && !expenses.length) {
        return <p>Loading or No Data Available...</p>;
    }

    return (
        <ChartStyled>
            {/* ✅ Pass the `data` prop to `Line` */}
            <Line data={data} />
        </ChartStyled>
    );
};

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;
