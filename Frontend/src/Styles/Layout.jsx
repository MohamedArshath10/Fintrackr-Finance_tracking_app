import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 3rem 1.5rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    @media (max-width: 450px) {
        padding: 0;
        h1, h2{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`