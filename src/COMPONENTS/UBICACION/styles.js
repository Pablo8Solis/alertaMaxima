import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.75); }
`

const pulseRing = keyframes`
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.4); opacity: 0; }
`


export const Section = styled.section`
  padding: 96px 5%;
  color:#000;
`

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
  color:#000;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`

export const TextSide = styled.div`
  animation: ${fadeInUp} 0.6s ease both;
  color:#000;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.35);
  color: #000000ff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
`

export const BadgeDot = styled.span`
  width: 7px;
  height: 7px;
  background: #4ADE80;
  border-radius: 50%;
  animation: ${pulseDot} 2s ease-in-out infinite;
`

export const Title = styled.h2`
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 900;
  color: #000;
  line-height: 1.1;
  letter-spacing: -1.2px;
  margin-bottom: 16px;

`

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: 36px;
`

export const CityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const CityDot = styled.span`
  width: 8px;
  height: 8px;
  background: #4ADE80;
  border-radius: 50%;
  flex-shrink: 0;
`

export const CityLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #CBD5E1;
`

export const CityMeta = styled.span`
  font-size: 12px;
  color: #475569;
  margin-left: auto;
`

export const CtaButton = styled.a`
  display: inline-block;
  margin-top: 36px;
  background: transparent;
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  padding: 13px 26px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.35);
  }
`


export const MapSide = styled.div`
  animation: ${fadeInUp} 0.6s ease 0.15s both;
`

export const MapWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 28px;
  position: relative;
`

export const MapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const MapTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

export const MapStatus = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #4ADE80;
  background: rgba(74, 222, 128, 0.1);
  padding: 4px 10px;
  border-radius: 100px;
`

export const SvgContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(15, 31, 61, 0.6);
`

/* Pin wrapper posicionado sobre el SVG */
export const PinGroup = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
`

export const Pin = styled.div`
  position: absolute;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`

export const PinDot = styled.div`
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.blue};
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    animation: ${pulseRing} 2s ease-out infinite;
    opacity: 0.5;
  }
`

export const PinLabel = styled.div`
  margin-top: 6px;
  background: rgba(15, 31, 61, 0.92);
  border: 1px solid rgba(37, 99, 235, 0.4);
  color: #E2E8F0;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  white-space: nowrap;
  letter-spacing: 0.3px;
`

export const PinStem = styled.div`
  width: 2px;
  height: 10px;
  background: white;
  opacity: 0.6;
`
