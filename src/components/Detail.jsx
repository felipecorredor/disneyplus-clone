import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db, { doc, getDoc } from "../firebase";

const Detail = () => {
  let { movieId } = useParams();
  const [detail, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieById = async () => {
      const snap = await getDoc(doc(db, "movies", movieId));

      if (snap.exists()) {
        console.log(snap.data());
        setDetailData(snap.data());
      }
    };

    getMovieById().finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <div>Loading...</div>;

  if (!detail) return <div>Error...</div>;

  return (
    <Container>
      <Background>
        <img src={detail.backgroundImg} alt={detail.title} />
      </Background>

      <ImageTitle>
        <img src={detail.titleImg} alt={detail.titleImg} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play-icon" />
            <span>play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="play-icon" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitle>{detail.subTitle}</Subtitle>
        <Description>{detail.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const Subtitle = styled.p`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  color: rgb(249, 249, 249);
  font-size: 20px;
  padding: 16px 0px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
