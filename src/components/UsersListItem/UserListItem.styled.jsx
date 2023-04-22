import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  text-align: center;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 28px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    height: 8px;
    z-index: 0;
    width: 380px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #ebd8ff;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 88px;
  margin-bottom: 26px;
`;

export const InfoText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: 0;
  color: #373737;
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
