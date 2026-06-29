
import styled from "styled-components";

const CoberturaStyles = styled.section`
    z-index: 2;
    padding: 3rem;
    margin-top: 3rem;
    color:#fff;
    background: linear-gradient(90deg, #38254cff, #210CAE);

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
    }

    svg:first-child{
           position: relative;
           left:1240px;
           z-index: 20;
           bottom: -230px;
           
           }
    svg:nth-child(2){
    left: 1200px;
    bottom:-470px;
    position: relative;
    }

    svg:nth-child(3){
    left: 1155px;
    bottom:-715px;
    position: relative;
    
        
    }

    @media (max-width: 768px) {
        svg {
            display: none !important;
        }
    }

    section{
        clip-path: shape(from 14.05% 0%,hline to 100%,arc to 100% 0% of 0% 0% cw small rotate 0deg,vline to 81.29%,arc to 88.78% 100% of 11.22% 18.71% cw small rotate 0deg,hline to 0%,arc to 0% 100% of 0% 0% cw small rotate 0deg,vline to 23.42%,arc to 14.05% 0% of 14.05% 23.42% cw small rotate 0deg,close);
	padding: 2rem;
	//background-color: #0f3070;
    //background: linear-gradient(90deg, #254046ff, #210CAE);
	aspect-ratio: 5 / 3;
    height: 74rem;
    display:flex;
    align-items:center;

    @media (max-width: 768px) {
        clip-path: none;
        aspect-ratio: auto;
        height: auto;
        flex-direction: column;
        padding: 1rem 0;
        align-items: stretch;
    }

    article{
        flex:1;
        display:flex;
        flex-direction:column;
        gap:2rem;
         justify-content: center;

         @media (max-width: 768px) {
             text-align: center;
             margin-bottom: 3rem;
         }

         h2{
          font-weight:700;
          font-size:5rem;

          @media (max-width: 768px) {
              font-size: 3.2rem;
          }
         }
        
    
    
    }

    section{
        clip-path: shape(from 14.05% 0%,hline to 100%,arc to 100% 0% of 0% 0% cw small rotate 0deg,vline to 81.29%,arc to 88.78% 100% of 11.22% 18.71% cw small rotate 0deg,hline to 0%,arc to 0% 100% of 0% 0% cw small rotate 0deg,vline to 23.42%,arc to 14.05% 0% of 14.05% 23.42% cw small rotate 0deg,close);
        padding: 2rem;
        //background-color: #0f3070;
        //background: linear-gradient(90deg, #38254cff, #210CAE);
        aspect-ratio: 5 / 3;
        gap:2.5rem;
        flex:1;
        width:50%;
        display:flex;
        flex-direction:column;

        @media (max-width: 768px) {
            clip-path: none;
            aspect-ratio: auto;
            width: 100%;
            padding: 0;
        }

        article{
            padding:1rem;
            clip-path: shape(from 13.33% 0%,hline to 86.67%,arc to 100% 20% of 13.33% 20% cw small rotate 0deg,vline to 58%,arc to 90.67% 72% of 9.33% 14% cw small rotate 0deg,hline to 90.67%,arc to 81.33% 86% of 9.33% 14% ccw small rotate 0deg,vline to 86%,arc to 72% 100% of 9.33% 14% cw small rotate 0deg,hline to 13.33%,arc to 0% 80% of 13.33% 20% cw small rotate 0deg,vline to 20%,arc to 13.33% 0% of 13.33% 20% cw small rotate 0deg,close);
            height: 10px;
            aspect-ratio: 3 / 2;
            /* From https://css.glass */
            background: rgba(19, 3, 118, 0.24);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(6.9px);
            -webkit-backdrop-filter: blur(6.9px);
            border: 1px solid rgba(19, 3, 118, 0.26);

            @media (max-width: 768px) {
                clip-path: none;
                height: auto;
                aspect-ratio: auto;
                padding: 2rem;
                border-radius: 16px;
            }

                h3{
                    font-size:2rem;
                    font-weight: 700;

                }

        }
    }
    

        }

`


export { CoberturaStyles };
