import styled from "styled-components";

const MainStyles = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    //padding: 2rem;

    section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        z-index: 2;
        position: relative;
        	clip-path: shape(from 4% 0%,hline to 91.68%,arc to 100% 13.87% of 8.32% 13.87% cw small rotate 0deg,vline to 73.33%,arc to 96% 80% of 4% 6.67% cw small rotate 0deg,hline to 94%,arc to 90% 86.67% of 4% 6.67% ccw small rotate 0deg,vline to 93.33%,arc to 86% 100% of 4% 6.67% cw small rotate 0deg,hline to 6.94%,arc to 0% 88.44% of 6.94% 11.56% cw small rotate 0deg,vline to 26.67%,arc to 4% 20% of 4% 6.67% cw small rotate 0deg,hline to 6%,arc to 10% 13.33% of 4% 6.67% ccw small rotate 0deg,vline to 6.67%,arc to 14% 0% of 4% 6.67% cw small rotate 0deg);
	width: 100%;
	height: 74rem;
	background-color: #2563EB;
	aspect-ratio: 5 / 3;
    }

    h2 {
        font-size: 4rem;
        font-weight: 800;
        line-height: 1.2;
        z-index: 2;
        position: relative;
        top: -48rem;
        left: 9rem;
        color:#fff;
        width:50rem;
        
        

    }

    p {
        font-size: 1.8rem;
        font-weight: 400;
        z-index: 2;
        position: relative;
        color:${({ theme }) => theme.colors.grayLight};
        top: -48rem;
        Font-weight: 300;
        left: 9rem;
        width:50rem;
    }
    
    span{
        color: ${({ theme }) => theme.colors.blue};
    }

    @media (max-width: 768px) {
        section {
            clip-path: none;
            height: auto;
            aspect-ratio: auto;
            padding: 12rem 2rem 4rem;
            align-items: center;
            gap: 2.5rem;
        }

        h2 {
            position: static;
            width: 100%;
            font-size: 3rem;
            text-align: center;
            left: auto;
            top: auto;
            order: 0;
            margin: 0;
        }

        p {
            position: static;
            width: 100%;
            font-size: 1.6rem;
            text-align: center;
            left: auto;
            top: auto;
            order: 1;
            margin: 0;
        }

        img {
            order: 2;
            width: 100%;
            max-width: 450px;
            height: auto;
            margin: 0 auto;
        }

        span {
            color: #93c5fd;
        }
    }
`

export default MainStyles;
