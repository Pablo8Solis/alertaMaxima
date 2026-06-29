import styled from "styled-components";

const ServicesStyles = styled.section`
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;
    padding: 3rem;
    margin-top: 3rem;
    flex:1;
    background-color: ${({ theme }) => theme.colors.grayLight};

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
        margin-top: 2rem;
    }

    section {
        display: flex;
        padding: 3rem;
        //flex-direction: column;
        gap: 2rem;
        z-index: 2;
        position: relative;
        //background-color: ${({ theme }) => theme.colors.grayLight};

        @media (max-width: 768px) {
            flex-direction: column;
            padding: 1rem 0;
            align-items: center;
            gap: 3rem;
        }

        article{
         padding: 2rem;
         width:25rem;
         display: flex;
         flex-direction: column;
         gap: 1rem;
         position: relative;

         @media (max-width: 768px) {
             width: 100%;
             max-width: 32rem;
         }

         &::after,
         &::before {
             content: '';
             position: absolute;
             width: 100%;
             height: 2px;
             background: linear-gradient(90deg, hsla(221, 61%, 6%, 1) 0%, hsla(221, 83%, 53%, 1) 31%);
             bottom: -5px;
             left: 0;
             transform: scaleX(0);
             transform-origin: right;
             transition: transform 0.4s ease-out;
         }

         &::before {
             top: -5px;
             transform-origin: left;
         }

         &:hover::after,
         &:hover::before {
             transform: scaleX(1);
         }

         h3{
            font-size: 1.8rem;
            font-weight: 700;
            color: #000;
            margin-bottom: 1rem;
         }
         p{
            font-size: 1.5rem;
            font-weight: 300;
            color: #000;
            //margin-bottom: 1rem;
         }
        }
    }
`;

const SectionTextStyles = styled.section`
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;
    width: 50rem;
    flex:2;

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }

    p{
        font-size: 1.5rem;
        color:${({ theme }) => theme.colors.grayText};
    }

    p:first-child{
        color:#2563EB;
        font-weight: 700;
        font-size: 1.5rem;
    }

    h2{
        font-size: 2.5rem;
        font-weight: 700;
    }
`;


export { ServicesStyles, SectionTextStyles };