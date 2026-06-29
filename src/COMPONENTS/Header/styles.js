import styled from "styled-components";

const HeaderSyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;

    .menu-toggle {
        display: none;
    }

    section {
        padding: 1rem;
        padding-right: 5rem;
        display: flex;
        align-items: center;
        gap: 4rem;
         background-color:grey;
         border-radius: 5rem;
         height:8rem;
/* From https://css.glass */
background: rgba(4, 8, 19, 0.66);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.1px);
-webkit-backdrop-filter: blur(7.1px);


    }

    img {
        height: 15rem;
        width: auto;
        display: block;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        gap: 2.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li a {
        font-size: 1.3rem;
        padding: .4rem;
        font-weight: 500;
        color:#fff;
        transition: color 0.2s ease;

        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            padding: .4rem;
            border-radius: 5rem;
        }
    }

    > nav{
     padding: 1rem 5rem 1rem 4.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
         border-radius: 5rem;
         height:8rem;
        /* From https://css.glass */
background: rgba(37, 99, 235, 0.64);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.9px);
-webkit-backdrop-filter: blur(6.9px);


    
    }

>nav a{
    color:#fff;
    padding: .4rem;
    border-radius: 5rem;
}

    @media (max-width: 768px) {
        padding: 1rem;

        section {
            padding: 1rem 1.5rem;
            height: 6rem;
            gap: 1.5rem;
            width: auto;
            position: relative;
        }

        img {
            height: 9rem; /* Sized down for mobile header */
        }

        .menu-toggle {
            display: flex;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            align-items: center;
            justify-content: center;
            outline: none;
        }

        .nav-menu {
            display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
            position: absolute;
            top: 7rem;
            left: 0;
            width: 100%;
            background: rgba(4, 8, 19, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 2rem;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: 99;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        ul {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        li a {
            font-size: 1.5rem;
            display: block;
            width: 100%;
            text-align: center;
            padding: 1rem;
            border-radius: 1rem;
        }

        > nav {
            padding: 0 2.5rem;
            height: 6rem;
        }

        > nav a {
            font-size: 1.2rem;
        }
    }
`

export default HeaderSyles;
