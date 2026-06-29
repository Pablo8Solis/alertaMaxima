// Cotizacion/styles.js
import styled from 'styled-components'

export const Section = styled.section`
  padding: 80px 5%;
  background: ${({ theme }) => theme.colors.grayLight};
`

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ImageSide = styled.div`
  position: relative;
  min-height: 500px;
  background: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800') center/cover no-repeat;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    min-height: 280px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 31, 61, 0.65);
`

export const HeroText = styled.div`
  position: relative;
  z-index: 1;
  padding: 36px;
`

export const HeroTitle = styled.h2`
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 900;
  color: white;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 12px;

  span { color: ${({ theme }) => theme.colors.blue}; }
`

export const HeroSub = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
`

export const FormSide = styled.div`
  background: white;
  padding: 48px 40px;

  @media (max-width: 768px) {
    padding: 36px 24px;
  }
`

export const FormTitle = styled.h3`
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  letter-spacing: -0.5px;
  margin-bottom: 28px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const Group = styled.div`
  margin-bottom: 18px;
`

export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 7px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.grayLight};
  border: 1.5px solid transparent;
  border-radius: 50px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.colors.navy};
  outline: none;
  transition: border-color 0.2s;

  &::placeholder { color: #9CA3AF; }
  &:focus { border-color: ${({ theme }) => theme.colors.blue}; }
`

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.grayLight};
  border: 1.5px solid transparent;
  border-radius: 50px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.colors.navy};
  outline: none;
  transition: border-color 0.2s;
  cursor: pointer;

  &:focus { border-color: ${({ theme }) => theme.colors.blue}; }
`

export const SubmitBtn = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  padding: 14px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s, transform 0.15s;

  &:hover { background: #1D4ED8; transform: translateY(-1px); }
`