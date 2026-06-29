import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.navy};
  padding: 80px 5%;
  text-align: center;
`

export const Title = styled.h2`
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 48px;
  letter-spacing: -0.8px;
`

export const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
`

export const Avatar = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.grayLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.grayBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
`

export const Body = styled.div`
  padding: 24px;
`

export const Quote = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.7;
  margin-bottom: 20px;
`

export const Name = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 4px;
`

export const Meta = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.blue};
`