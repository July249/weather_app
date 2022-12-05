import styled from 'styled-components';
import loading from '../images/loading.gif';

const StyledLoadingImg = styled.img`
  position: relative;
  display: block;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10;
`;

const Loading = () => {
  return (
    <>
      <StyledLoadingImg className="load_img" src={loading} alt="" />
    </>
  );
};

export default Loading;
